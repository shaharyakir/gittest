import { of } from "ipfs-only-hash";

class Calc {
  add(num1: number, num2: number) {
    return num1 + num2;
  }
}

const calc = new Calc();

(async function () {
  const result = calc.add(2, 4);
  const hash = await of(`Sum is ${result}`);
  console.log(hash);
})();
