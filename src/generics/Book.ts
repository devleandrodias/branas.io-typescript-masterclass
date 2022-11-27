import Entity from "./Entity";

export class Book extends Entity {
  constructor(readonly id: number, readonly title: string) {
    super(id);
  }
}
