import { Book } from "./Book";
import { Person4 } from "./Person";
import { Repository } from "./Repository";

const books = new Repository<Book>();

const cleanCodeBook = new Book(1, "Clean Code");
const person4 = new Person4("Leandro", 22);

books.add(cleanCodeBook);

// books.add(person4);

console.log(books);
