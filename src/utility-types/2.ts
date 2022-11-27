interface Book {
  title: string;
  author: string;
  price: number;
}

const book: Book = {
  title: "Clean Code",
  author: "Robert Martin",
  price: 49.9,
};

const updatedBook: Pick<Book, "price"> = {
  price: 69.9,
};

function updateBook(updateProperties: Partial<Book>) {
  return { ...book, ...updateProperties };
}

console.log(updateBook(updatedBook));
