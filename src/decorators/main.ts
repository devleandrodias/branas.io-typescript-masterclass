// psql -d app -f src/decorators/create.sql

import pgp from "pg-promise";

interface Connection {
  query(statement: string, params: any): Promise<any>;
  close(): Promise<void>;
}

class Entity {
  declare schema: string;
  declare table: string;
  declare colums: { property: string; column: string }[];

  [key: string]: any;
}

class PostgresSQLConnection implements Connection {
  pgp: any;

  constructor() {
    this.pgp = pgp()("postgres://postgres:123456@localhost:5432/app");
  }

  query(statement: string, params: any): Promise<any> {
    return this.pgp.query(statement, params);
  }

  close(): Promise<void> {
    return this.pgp.$pool.end();
  }
}

class Orm {
  constructor(readonly connection: Connection) {}

  async save(entity: Entity) {
    const colums: string = entity.colums
      .map((column) => column.column)
      .join(",");

    const params: string = entity.colums
      .map((_, index) => `$${index + 1}`)
      .join(",");

    const values = entity.colums.map((column) => entity[column.property]);

    // const exampleQuery = "insert into branas.book (title, author) values ($1, $2)";

    const statement = `insert into ${entity.schema}.${entity.table} (${colums}) values (${params})`;

    this.connection.query(statement, [...values]);
  }

  async list(entity: Function) {
    return this.connection.query(
      `select * from ${entity.prototype.schema}.${entity.prototype.table}`,
      []
    );
  }
}

function entity(config: { schema: string; table: string }) {
  return (constructor: Function) => {
    constructor.prototype.table = config.table;
    constructor.prototype.schema = config.schema;
  };
}

function colum(config: { name: string }) {
  return (target: Entity, propertyKey: string) => {
    target.colums = target.colums || [];
    target.colums.push({ property: propertyKey, column: config.name });
  };
}

@entity({ schema: "branas", table: "book" })
class Book extends Entity {
  @colum({ name: "title" })
  title: string;

  @colum({ name: "author" })
  author: string;

  constructor(title: string, author: string) {
    super();
    this.title = title;
    this.author = author;
  }
}

async function init() {
  const connection = new PostgresSQLConnection();
  const book = new Book("Clean Code", "Robert Martin");
  const orm = new Orm(connection);

  await orm.save(book);

  console.log(await orm.list(Book));

  await connection.close();
}

init();
