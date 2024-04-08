export interface BooksModel {
  name: string;
  type: string;
}

interface Books {
  name: string;
  type: string;
}

export interface Person {
  cardType?: string;
  name: string;
  gender: string;
  age: number;
  books: Books[]; // Use the 'Book' type
}
