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

export function measureAverageSortTime(sortFunction, array, numRuns) {
  let totalTime = 0;

  for (let i = 0; i < numRuns; i++) {
    let arrayCopy = [...array];
    let startTime = window.performance.now();
    sortFunction(arrayCopy);
    let endTime = window.performance.now();
    totalTime += endTime - startTime;
  }

  // Returns average time in milliseconds
  return totalTime / numRuns;
}
