//create a BookApp component in typescript

import { useEffect, useState } from "react";
import useGetBooks from "../hooks/useGetBooks.tsx";
import BookInfoCard from "./BookInfoCard/BookInfoCard.tsx";
import HeaderTitle from "./HeaderTitle.tsx";
import FilterSection from "./FilterSection.tsx";
import LineDivider from "./LineDivider.tsx";
import { Person, BooksModel } from "../model/BooksModel.tsx";

const BookApp = () => {
  const { books, loading, error } = useGetBooks();
  const [maleBooks, setMaleBooks] = useState<BooksModel[]>([]);
  const [femaleBooks, setFemaleBooks] = useState<BooksModel[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Person[]>([]);
  const [filteredType, setFilteredType] = useState<string>("");
  const [filterSet, setFilterSet] = useState<string[]>([]);

  //The useEffect hook will run once the books state variable has a value and the filteredBooks state variable is empty,
  //it will set the filteredBooks state variable to the books state variable
  //This is to ensure that the filteredBooks state variable will have a value once the books state variable has a value
  //This will prevent the filteredBooks state variable to be empty

  useEffect(() => {
    if (filteredBooks.length === 0 && books) {
      setFilteredBooks(books);
    }
  }, [books, filteredBooks]);

  //The useEffect hook will run once the filteredBooks state variable has a value
  //It will filter the books based on gender and will store the filtered data on the maleBooks and femaleBooks state variable
  //The filtered data will be sorted based on the book's name in ascending order
  //maleBooks and femaleBooks are used in the BookInfoCard component to display the books

  useEffect(() => {
    if (filteredBooks) {
      const maleBooksData = filteredBooks
        .filter((person) => person.gender === "Male" && person.books !== null)
        .flatMap((person) => person.books!)
        .sort((a, b) => a.name.localeCompare(b.name));
      setMaleBooks(maleBooksData);

      const femaleBooksData = filteredBooks
        .filter((person) => person.gender === "Female" && person.books !== null)
        .flatMap((person) => person.books!)
        .sort((a, b) => a.name.localeCompare(b.name));
      setFemaleBooks(femaleBooksData);
    }
  }, [filteredBooks]);

  //the filterBooks function will filter the books based on the type of book
  const filterBooks = (type: string) => {
    const filteredDataForBooks = books
      .filter((person) => person.books !== null) // add this condition since there is a null value in the books array
      .map((person) => ({
        ...person,
        books: person.books?.filter((book) => book.type === type),
      }))
      .filter((person) => person.books.length > 0);
    setFilteredBooks(filteredDataForBooks);
  };

  //the useEffect below is needed to filter the books based on the type of book
  useEffect(() => {
    if (books) {
      filterBooks(filteredType);
    }
  }, [books, filteredType]);

  // This is used for the filter set, if we want to filter the books based on the type of book that is currently available
  // currently we have Hardcover as the only type of book available

  useEffect(() => {
    if (books) {
      const filterSetData = books
        .filter((person) => person.books !== null)
        .flatMap((person) => person.books)
        .map((book) => book.type);
      setFilterSet([...new Set(filterSetData)]);
    }
  }, [books]);

  return (
    <main className="border-[0.5rem] border-custom-blue pb-[2rem]">
      <HeaderTitle
        title="Owners and Books"
        className="text-5xl text-white flex items-center justify-center p-[4rem] w-full bg-custom-blue w-full"
      />
      <section className="flex items-center justify-center gap-[2rem] justify-center mt-[3rem] w-full">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-[2rem] w-[25rem] 2xl:w-[60rem]">
          <BookInfoCard
            cardType={filteredType}
            gender="Male"
            books={maleBooks}
            name=""
            age={0}
          />
          <BookInfoCard
            cardType={filteredType}
            gender="Female"
            books={femaleBooks}
            name=""
            age={0}
          />
        </div>
      </section>
      <div className="mt-[3rem] mb-[1rem]">
        <LineDivider />
      </div>

      <section className="flex justify-center">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-end items-center gap-[1.5rem] w-[60rem] mx-auto text-lg font-medium">
          <FilterSection
            setFilteredType={setFilteredType}
            filterSet={["Hardcover"]}
          />
        </div>
      </section>
    </main>
  );
};

export default BookApp;
