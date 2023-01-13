function binarySearch(arr, n) {
  var start = 0;
  var end = arr.length - 1;
  var midIndex = Math.round((start + end) / 2);

  while (arr[midIndex] !== n && start <= end) {
    if (n < arr[midIndex]) end = midIndex - 1;
    else start = midIndex + 1;

    midIndex = Math.round((start + end) / 2);
  }
  return arr[midIndex] === n ? midIndex : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
