export function binarySearch(array, size, input) {
  let start = 0;
  let end = size - 1;
  let found = false;
  let searches = 0;
  const type = "Binary";

  // Creating a copy of the array so it can be sorted and then searched without sorting the original array
  // This is necessary because the binarySearch requires the array to be sorted in order to work
  let arrayCopy = [...array];

  arrayCopy.sort((a, b) => a - b);

  console.log(`"Original:" ${array} "Copy:" ${arrayCopy}`);

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arrayCopy[mid] === Number(input)) {
      searches += 1;
      found = true;
      break;
    } else if (arrayCopy[mid] < Number(input)) {
      searches += 1;
      start = mid + 1;
    } else {
      searches += 1;
      end = mid - 1;
    }
  }

  return { found, searches, type };
}

export function sequentialSearch(array, size, input) {
  let found = false;
  let searches = 0;
  let i = 0;
  const type = "Sequential";

  // Keep looking for the input value until it's found or we've reached the end of the array
  while (found === false && i <= size - 1)
    // Check if the current array element matches the input value
    if (array[i] == input) {
      found = true;
      searches += 1;
      break;
    } else {
      // Move on to the next array element
      i++;
      searches += 1;
    }

  return { found, searches, type };
}
