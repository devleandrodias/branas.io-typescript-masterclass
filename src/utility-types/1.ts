interface Todo {
  priority: number;
  description: string;
  done: boolean;
}

const todo: Todo = {
  done: true,
  priority: 1,
  description: "Study Typescript",
};

const todo2: Partial<Todo> = {
  done: false,
  description: "Study Javascript",
};

function updateTodo(updateTodo: Omit<Todo, "description">) {
  return { ...todo, ...updateTodo };
}

const updatedTodo: Omit<Todo, "description"> = {
  done: true,
  priority: 2,
};

console.log(updateTodo(updatedTodo));
