import { Category } from "./Categories";

export default class Movie {
  constructor(readonly name: string, readonly category: Category) {}
}
