import { of } from "ipfs-only-hash";
import { Cell } from "ton";

class Calc {
  add(num1: number, num2: number) {
    return num1 + num2;
  }
}

const calc = new Calc();

(async function () {
  const result = calc.add(2, 4);

  const cell = new Cell();

  let mostDeepSigCell = cell.refs[1];

  while (true) {
    if (mostDeepSigCell.refs.length === 0) {
      break;
    }
    mostDeepSigCell = mostDeepSigCell.refs[0];
  }

  return {
    ipfsHash: await of(
      mostDeepSigCell.hash().toString("base64") + ":" + result
    ),
  };
})();
