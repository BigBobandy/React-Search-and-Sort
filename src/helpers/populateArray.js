import { random } from "./random";

export function populateArray(array, size) {
  for (let i = 0; i < size - 1; i++) {
    let randomNum = random();

    while (array.includes(randomNum)) {
      randomNum = random();
    }

    array[i] = randomNum;
  }
}
