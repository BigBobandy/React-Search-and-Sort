export function populateArray(array, size) {
  for (let i = 0; i < size - 1; i++) {
    let randomNum = random();

    while (array.includes(randomNum)) {
      randomNum = random();
    }

    array[i] = randomNum;
  }
  return array;
}

// Generate a random number between 1 and 99
export function random() {
  return 1 + Math.floor(Math.random() * 99);
}
