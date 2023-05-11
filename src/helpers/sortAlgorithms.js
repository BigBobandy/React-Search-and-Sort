export function bubbleSort(array, size) {
  maxElement = size - 1;
  // Iterate through the array, comparing adjacent elements
  for (let i = 0; i < maxElement; i++) {
    // Iterate through the unsorted part of the array
    for (let j = 0; j < maxElement - i - 1; j++) {
      // Compare adjacent elements and swap them if they are in the wrong order
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

export function insertionSort(array) {
  // Iterate through the array starting from the second element (index 1)
  for (let i = 1; i < array.length; i++) {
    // Store the current element as the key
    let key = array[i];
    // Set j to the index before the current element (i - 1)
    let j = i - 1;

    // Move elements of array[0...i-1] that are greater than the key to one position ahead of their current position
    // As long as j is not negative and the current element at index[j] is greater than the key
    while (j >= 0 && array[j] > key) {
      // Move the element at index[j] to the next position (j + 1)
      array[j + 1] = array[j];
      // Decrement j
      j -= 1;
    }
    // Insert the key in its correct position in the sorted part of the array
    array[j + 1] = key;
  }
}
