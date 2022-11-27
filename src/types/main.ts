interface Entity {
  id: number;
}

interface Person extends Entity {
  name: string;
  age: number;
  paradigm: string;
}

const persons: Person[] = [];

persons.push({ id: 1, age: 22, name: "Leandro", paradigm: "00" });

interface IPersonRepository {
  save(persons: Person): void;
}

class PersonRepositoryMemory implements IPersonRepository {
  save(persons: Person): void {
    throw new Error("Method not implemented.");
  }
}

abstract class Item {
  description: string;
  price: number;

  constructor(description: string, price: number) {
    this.description = description;
    this.price = price;
  }

  abstract getTax(): number;

  calculateTax() {
    return this.price * this.getTax();
  }
}

class RealItem extends Item {
  getTax(): number {
    return this.calculateTax() * 0.1;
  }
}

class Class1 {
  constructor(readonly name: string) {}
}

class Class2 extends Class1 {
  constructor() {
    super("Leandro");
  }
}

let point: number[] = [10, 20];
let tuplas: [number, number, boolean] = [10, 20, true];

export class Book {
  constructor(public title: string, public author: string) {}
}

const email: string = "leandrodbdias@gmail.com";
const grade: number = 10;
const isOpen: boolean = true;

console.log(email, typeof email);
console.log(grade, typeof grade);
console.log(isOpen, typeof isOpen);

let book: Book;

book = new Book("Clean Code", "Robert Martin");

console.log(book);

function startServer(port: number) {
  console.log(port);
}

startServer(80);

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(5, 2));

class Person4 {
  name: string;
  age: number;
  weight?: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person4("Leandro", 21);

console.log(person);

const numbers: number[] = [];
const persons4: Person4[] = [];

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;

console.log(numbers);

persons4[0] = new Person4("Leandro", 21);
persons4[1] = new Person4("Thaisa", 23);
persons4[2] = { name: "Beatriz", age: 22, weight: 60 };

console.log(persons);

const persons2: { name: string; age: number }[] = [];

persons2[0] = { name: "Leandro", age: 21 };
persons2[1] = { name: "Thaisa", age: 23 };

console.log(persons2);

type Person3 = { name: string; age: number };

const persons3: Person3[] = [];

console.log(persons3);

type Age = number | string;

const myAge: Age = 21;
const myAge2: Age = "22";

console.log(myAge, myAge2);

type Entity2 = {
  id: number;
};

type Person2 = {
  name: string;
  age: number;
  paradigm: "oo" | "function";
};

type PersonEntity = Person2 & Entity2;

const personsEntity: PersonEntity[] = [];

personsEntity.push({
  id: 1,
  age: 22,
  name: "Leandro",
  paradigm: "oo",
});

console.log(personsEntity);
