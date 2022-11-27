import * as Entity from "./Entity";

export class Repository<T extends Entity.default> {
  list: T[];

  constructor() {
    this.list = [];
  }

  add(element: T) {
    console.log(Entity.max);
    this.list.push(element);
  }
}
