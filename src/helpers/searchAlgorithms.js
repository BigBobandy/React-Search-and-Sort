export function binarySearch(array, size, input) {
  let start = 0;
  let end = size - 1;
  let found = false;
  let searches = 0;

  array.sort((a, b) => a - b);

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === input) {
      searches += 1;
      found = true;
      break;
    } else if (array[mid] < input) {
      searches += 1;
      start = mid + 1;
    } else {
      searches += 1;
      end = mid - 1;
    }
  }

  return { found, searches };
}

export function sequentialSearch(array, size, input) {
  let found = false;
  let searches = 0;
  let i = 0;
  const searchType = "Sequential";

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
}
