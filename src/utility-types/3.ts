interface Car {
  model: string;
  brand?: string;
}

const car: Required<Car> = {
  model: "Palio",
  brand: "Fiat",
};
