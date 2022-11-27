// Voce pode receber um parametro desconhecido, mas nao pode repassar para algo conhecido

class Server {
  constructor(readonly port: Number) {}
}

function init(port: unknown) {
  console.log(port);
  // new Server(port);
}

function init2(port: any) {
  console.log(port);
  new Server(port); // Any permite
}

function init3(): never {
  while (true) {
    console.log("Never return");
  }

  // Nunca tem retorno
}

function init4(): void {
  // Void tem um retorno undefined
}

init(1000);
init("1000");
init(true);

init2(1000);
init2("1000");
init2(true);

console.log(init4());

function go(steps: number, exec: Function) {
  let i = 0;
  while (i < steps) {
    exec(i);
    i++;
  }
}

function go2(steps: number, exec: (step: number) => void) {
  let i = 0;
  while (i < steps) {
    exec(i);
    i++;
  }
}

go(10, (step: number) => {
  console.log(`[${step}] Brazil!`);
});

go2(10, (step: number) => {
  console.log(`2 - [${step}] Brazil!`);
});
