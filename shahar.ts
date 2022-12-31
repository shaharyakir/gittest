function hello() {
  return "hello";
}

class Calc {
  add(num1: number, num2: number) {
    return num1 + num2;
  }
}

const calc = new Calc();

console.log(calc.add(2,4));
