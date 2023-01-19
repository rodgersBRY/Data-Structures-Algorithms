function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
  }
  return arr;
}

insertionSort([12, 13, 10, 7, 17, 14]);
// 7, 10, 12, 13, 14, 17;
