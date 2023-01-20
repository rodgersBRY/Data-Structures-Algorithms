function mergeArrays(arr1, arr2) {
  var finalArr = [];
  var i = 0;
  var j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      finalArr.push(arr1[i]);
      i++;
    } else {
      finalArr.push(arr2[j]);
      j++;
    }
  }

  // add the rest of values if we exhaust one array
  while (i < arr1.length) {
    finalArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    finalArr.push(arr2[j]);
    j++;
  }

  return finalArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArrays(left, right);
}

console.log(mergeSort([10,100,28,48,44,32,78]));
