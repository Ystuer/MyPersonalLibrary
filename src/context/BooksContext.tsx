import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';

export type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  pages: number;
  publishDate: string;
  coverImage: string | null;
};

export type SortField = 'title' | 'author' | 'pages' | 'publishDate';
export type SortOrder = 'asc' | 'desc';

type BooksContextType = {
  books: Book[];
  filteredBooks: Book[];
  isLoading: boolean;
  error: string | null;
  clearError: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  sortBy: SortField;
  setSortBy: (field: SortField) => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
  addBook: (book: Omit<Book, 'id'>) => Promise<void>;
  deleteBook: (id: string) => Promise<void>;
};

const BooksContext = createContext<BooksContextType | undefined>(undefined);

export function BooksProvider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortField>('title');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'books'), (snapshot) => {
      const fetched = snapshot.docs.map((d) => ({
        coverImage: null,
        ...d.data(),
        id: d.id,
      } as Book));
      setBooks(fetched);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const filteredBooks = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return books
      .filter((b) =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q)
      )
      .sort((a, b) => {
        let cmp = 0;
        switch (sortBy) {
          case 'title': cmp = a.title.localeCompare(b.title); break;
          case 'author': cmp = a.author.localeCompare(b.author); break;
          case 'pages': cmp = a.pages - b.pages; break;
          case 'publishDate': cmp = new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime(); break;
        }
        return sortOrder === 'asc' ? cmp : -cmp;
      });
  }, [books, searchQuery, sortBy, sortOrder]);

  const addBook = async (book: Omit<Book, 'id'>) => {
    try {
      const { coverImage, ...firestoreData } = book;
      await addDoc(collection(db, 'books'), firestoreData);
    } catch (e) {
      setError('Failed to add book. Please try again.');
      throw e;
    }
  };

  const deleteBook = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'books', id));
    } catch (e) {
      setError('Failed to delete book. Please try again.');
    }
  };

  return (
    <BooksContext.Provider value={{
      books, filteredBooks, isLoading,
      error, clearError: () => setError(null),
      searchQuery, setSearchQuery,
      sortBy, setSortBy,
      sortOrder, setSortOrder,
      addBook, deleteBook,
    }}>
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BooksContext);
  if (!context) throw new Error('useBooks must be used within BooksProvider');
  return context;
}
