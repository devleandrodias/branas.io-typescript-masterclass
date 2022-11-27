export class Headphone {
  brand: string;
  price: number;
  connectorType: string;

  constructor(brand: string, connectorType: string, price: number) {
    this.brand = brand;
    this.price = price;
    this.connectorType = connectorType;
  }
}
