class PersonProtected {
  protected job: string;

  constructor(job: string) {
    this.job = job;
  }
}

class Person extends PersonProtected {
  public name: string;
  private _age: number;
  #company: string;

  constructor(
    name: string,
    age: number,
    job: string,
    company: string,
    readonly email: string
  ) {
    super(job);
    this.name = name;
    this._age = age;
    this.#company = company;
  }

  setAge(age: number) {
    if (this.age > 0) {
      this._age = age;
    } else {
      throw new Error("Invalid Age");
    }
  }

  get age() {
    console.log(this.job);
    return this._age;
  }
}

const person = new Person(
  "Leandro",
  22,
  "Developer",
  "Smart Black Code",
  "leandro@smartblackcode.com"
);

person.name = "Thaisa";

console.log(person.name);
console.log(person.age);
console.log(person.email);

// person.email = "other@gmail.com";

class PersonUpdate extends PersonProtected {
  constructor(
    public name: string,
    private age: number,
    protected job: string,
    private company: string,
    readonly email: string
  ) {
    super(job);
  }

  setAge(age: number) {
    if (this.age > 0) {
      this.age = age;
    } else {
      throw new Error("Invalid Age");
    }
  }

  getCompany() {
    return this.company;
  }
}

const personUpdate = new PersonUpdate(
  "Leandro",
  22,
  "Developer",
  "Smart Black Code",
  "leandro@smartblackcode.com"
);

console.log(personUpdate);
