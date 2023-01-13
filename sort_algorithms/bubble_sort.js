function bubbleSort(arr) {
  // optimize the algorithm to stop if they were no swaps
  var noSwaps;
  // loop to start at the end of the array towards the start
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    // inner loop to start at the beginning
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // SWAP
        
        /* ES2015 swap */
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        console.log("SWAP!");
        var temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([1, 2, 4, 6, 5, 3, 37]));
