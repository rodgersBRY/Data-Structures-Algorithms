/* 
With Linear Search, we go through 
evey item from start to finish checking if our value 
is indeed in the array. Best with unsorted array 
e.g. indexOf, includes, find, findIndex
*/

function linearSearch(arr, n) {
  // loop through the array and chek if the current array element is equal to the value
  for (var i = 0; i < arr.length; i++) {
    // if so, return the index of the value
    if (arr[i] === n) return i;
  }
  return -1;
}

console.log(linearSearch([1, 2, 4, 6, 12, 76], 12));
