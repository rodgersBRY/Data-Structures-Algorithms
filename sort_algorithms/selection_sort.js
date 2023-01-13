function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var lowest = i;
    // compare with the next value
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
      console.log(arr);
    }
  }
  return arr;
}

selectionSort([32, 22, 10, 19, 17]);
