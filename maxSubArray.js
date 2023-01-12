/* Function that takes in an array of integers
and a number n, returns the maximum sum of n consecutive
integers in the array */

function maxSubArraySum(arr, n) {
  // create two variables for sum and temp
  var maxSum = 0;
  var tempSum = 0;
  // return null if n is greater than array length
  if (n > arr.length) return null;

  // set maxSum to the sum of the 1st n integers
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  // loop through the integers subtracting the previous first integer and adding the next integer
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    
    // if maxSum is less than temp then update max with temp value
    maxSum = maxSum < tempSum ? tempSum : maxSum;
  }
  // return max
  return maxSum;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
