import { useState, useEffect } from "react";
import axios from "axios";
import { Person } from "../model/BooksModel";

const useGetBooks = () => {
  const [books, setBooks] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/books");
        setBooks(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { books, loading, error };
};

export default useGetBooks;
