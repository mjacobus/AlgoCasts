// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i in arr) {
    for (let j in arr) {
      if (i == j) {
        continue;
      }

      if (arr[i] < arr[j]) {
        const left = arr[i];
        const right = arr[j];
        arr[j] = left;
        arr[i] = right;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
