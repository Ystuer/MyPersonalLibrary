import { createContext, useContext, useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';

export type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  pages: string;
  publishDate: string;
  coverImage: string | null;
};

type BooksContextType = {
  books: Book[];
  isLoading: boolean;
  addBook: (book: Omit<Book, 'id'>) => Promise<void>;
  deleteBook: (id: string) => Promise<void>;
};

const BooksContext = createContext<BooksContextType | undefined>(undefined);

export function BooksProvider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const addBook = async (book: Omit<Book, 'id'>) => {
    const { coverImage, ...firestoreData } = book;
    await addDoc(collection(db, 'books'), firestoreData);
  };

  const deleteBook = async (id: string) => {
    await deleteDoc(doc(db, 'books', id));
  };

  return (
    <BooksContext.Provider value={{ books, isLoading, addBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BooksContext);
  if (!context) throw new Error('useBooks must be used within BooksProvider');
  return context;
}
