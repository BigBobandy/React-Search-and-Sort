export function populateArray(array, size) {
  // Copy the input array to avoid mutation
  let newArray = [...array];

  for (let i = 0; i < size - 1; i++) {
    let randomNum = random();

    // Check if the random number already exists in the array to prevent duplicates in the array
    while (newArray.includes(randomNum)) {
      // Generate a new random number if it already exists in the array
      randomNum = random();
      let attempts;

      // If we've tried to find a unique number too many times, break out of the loop
      if (attempts > 10000) {
        break;
      }
      console.log(attempts);
      attempts++;
    }

    // Add the unique random number to the array
    newArray[i] = randomNum;
  }
  return newArray;
}

// Generate a random number between 1 and 99
export function random() {
  return 1 + Math.floor(Math.random() * 99);
}

export async function measureAverageSortTime(
  sortFunction,
  array,
  numIterations
) {
  let totalTime = 0;

  for (let i = 0; i <= numIterations; i++) {
    // Create copy of the array to be sorted so that the original isn't modified
    let arrayCopy = [...array];
    // Start the timer
    let startTime = window.performance.now();
    // Call the sort function and wait for it to finish sorting
    await sortFunction(arrayCopy);
    // Stop the timer
    let endTime = window.performance.now();

    // Calculate the time taken for this specific run (in microseconds)
    // and add it to the totalTime variable
    totalTime += (endTime - startTime) * 1000;
  }

  // Calculate the average time of all of the sorts
  let averageTime = totalTime / numIterations;

  return { time: averageTime, iterations: numIterations };
}
