//create a BookInfoCard.tsx component that will take in a books object and display the book's name, gender, age, and books
import React from "react";
import { Person } from "../../model/BooksModel";

const BookInfoCard: React.FC<Person> = ({
  cardType,
  name,
  gender,
  age,
  books,
}) => {
  return (
    <div>
      <div className="flex items-center justify-center text-white bg-custom-blue">
        <h2 className="text-5xl p-[1rem] text-center">
          {cardType} Books with {gender} Owners
        </h2>
      </div>
      <div className="flex flex-col mt-[1rem]">
        {books.map((book: { name: string; type: string }, index: number) => (
          <div key={index}>
            <span className="font-medium text-xl">{book.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookInfoCard;
