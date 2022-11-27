import type Car from "./Car";

function init(car: Car) {
  console.log(car);
}

const otherCar: Car = {
  brand: "Kia",
  model: "Soul",
};

init({ brand: "Fiat", model: "Pulse" });
init({ brand: "Chevrolet", model: "S10" });
init(otherCar);
