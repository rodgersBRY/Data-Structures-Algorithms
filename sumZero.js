/* Multiple Pointers */

/* Create pointers corresponging
to in index/position and move towards
 beginning, middle or end on certain conditions */

//  O(n) time complexity
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 5, 10]));
