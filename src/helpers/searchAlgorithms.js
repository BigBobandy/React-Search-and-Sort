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
