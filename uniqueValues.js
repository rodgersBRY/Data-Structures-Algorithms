/* Multiple Pointers */

/* A function that accepts a sorted array
counts the number of unique values */

// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   // create a pointer variable i
//   var i = 0;

//   // compare if they match  or not
//   for (var j = 1; j < arr.length; j++) {
//     // if not, move i forward and replace value at i with value at j
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }

//   // return result
//   return i + 1;
// }

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  var count = 0;
  var obj1 = {};

  for (var j = 0; j < arr.length; j++) {
    obj1[arr[j]] = (obj1[arr[j]] || 0) + 1;
  }

  for (var key in obj1) {
    count++;
  }
  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 2, 3, 3]));
