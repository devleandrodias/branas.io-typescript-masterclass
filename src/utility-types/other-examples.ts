interface User {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  phone?: string;
  instagram?: string;
}

type UserFullName = Pick<User, "firstName" | "lastName">;

const userPick: UserFullName = {
  firstName: "Leandro",
  lastName: "Dias",
};

console.log(userPick);

type UserOmmit = Omit<User, "id" | "instagram">;

const userOmmit: UserOmmit = {
  age: 21,
  firstName: "Leandro",
  lastName: "Dias",
  phone: "16992080397",
};

console.log(userOmmit);

const userPartial: Partial<User> = {
  firstName: "Leandro",
};

console.log(userPartial);

const userReadonly: Readonly<User> = {
  firstName: "Leandro",
  lastName: "Dias",
  age: 21,
};

console.log(userReadonly);

function createPerson() {
  return {
    name: "Leandro",
    age: 30,
  };
}

type T1 = ReturnType<typeof createPerson>;

const result: T1 = {
  age: 40,
  name: "Leandro",
};

console.log(result);

type myType = string | number | null | undefined;

type noNulls = NonNullable<myType>;

const my: noNulls = "Exclude null and undefined from T";

console.log(my);
