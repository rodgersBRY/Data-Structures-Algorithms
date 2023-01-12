/* write a function that takes in 2 strings
and checks if an string is an anagram
word or phrase formed by rearranging the letters of another
e.g cinema from iceman */

// O(n) space complexity
function isAnagram(str1, str2) {
  // make sure the strings have the same length
  if (str1.length != str2.length) {
    return false;
  }
  // create two empty objects
  let strObj1 = {};
  let strObj2 = {};
  // iterate through the string char to populate the objects
  for (let char of str1) {
    strObj1[char] = (strObj1[char] || 0) + 1;
  }
  for (let char of str2) {
    strObj2[char] = (strObj2[char] || 0) + 1;
  }
  console.log(strObj1);
  console.log(strObj2);

  for (let key in strObj1) {
    // check if keys in one object exist in the other object
    if (!(key in strObj2)) {
      return false;
    }
    // check if frequency values match for both objects
    if (strObj1[key] != strObj2[key]) {
      return false;
    }
  }
  // return true
  return true;
}

console.log(isAnagram("fizz", "zifz"));
