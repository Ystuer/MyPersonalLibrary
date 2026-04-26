import { createContext, useContext, useState } from 'react';

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
  addBook: (book: Omit<Book, 'id'>) => void;
  deleteBook: (id: string) => void;
};

const BooksContext = createContext<BooksContextType | undefined>(undefined);

export function BooksProvider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (book: Omit<Book, 'id'>) => {
    setBooks((prev) => [...prev, { ...book, id: Date.now().toString() }]);
  };

  const deleteBook = (id: string) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <BooksContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BooksContext);
  if (!context) throw new Error('useBooks must be used within BooksProvider');
  return context;
}
