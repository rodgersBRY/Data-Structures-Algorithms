// /* Function that reverses a string */

// // O(n)
function reverseStr(str) {
  let newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// console.log(reverseStr("hello world"));

function isPalindrome(str) {
  var newStr = "";

  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  if (newStr === str) return true;
  return false;
}

// console.log(isPalindrome("allw"));

/* Frequency counter */
// function that checks if a word or phrase is an anagram
// i.e. cinema and iceman --> true
//      hello and pole --> false

// O(n)
function anagram(str1, str2) {
  //   end early if the strings don't match in length
  if (str1.length !== str2.length) return false;

  // create two empty objects
  var obj1 = {};
  var obj2 = {};

  //   loop through the first str populating
  //   the first object with chars and their frequency
  for (var char of str1) {
    obj1[char] = obj1[char] ? ++obj1[char] : 1;
  }

  //   loop through the second str populating
  //   the second object with chars and their frequency
  for (var char of str2) {
    obj2[char] = obj2[char] ? ++obj2[char] : 1;
  }

  for (var key in obj1) {
    // return false if key in obj1 is not in obj2
    if (!(key in obj2)) return false;

    // return false if value of obj1[key] != value of obj2[key]
    if (obj1[key] !== obj2[key]) return false;
  }
  // return true
  return true;
}

// console.log(anagram("fizz", "zfiz"));

function maxSum(arr, n) {
  var maxSum = 0;
  var tempSum = 0;

  for (var i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (var i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n];
    if (tempSum > maxSum) maxSum = tempSum;
  }

  return maxSum;
}

// console.log(maxSum([8, 2, 5, 8, 2, 5, 7], 2));

function removeElement(nums, n) {
  console.log(nums);
  var newIndex = 0;
  for (var j = 0; j < nums.length; j++) {
    if (nums[j] != n) {
      console.log("swapping");
      nums[newIndex] = nums[j];
      newIndex++;
      console.log(nums);
    }
  }

  return newIndex;
}

// console.log(removeElement([1, 2, 4, 5, 4, 6, 4, 7], 4));

function palindromicSubstring(str) {
  var result = "";
  var j = 0;

  for (var i = 0; i < str.length; i++) {
    for (var j = i + 2; j < str.length; j++) {
      let substr = str.slice(i, j + 1);
      // if (substr.length < result.length) break;
      if (isPalindrome(substr) && substr.length > result.length)
        result = substr;
    }
  }

  console.log(result);

  return result !== "" ? result : "none";
}

palindromicSubstring("helloannasmith");
