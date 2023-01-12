/* write a function that 
takes in a string and reverses it */

function reverseStr(str) {
  // create a temporary str
  var reversedStr = "";
  // iterate through the str characters
  for (var i = str.length - 1; i >= 0; i--) {
    // append the last char of str to the reversedStr
    reversedStr += str[i];
  }

  // return reversed string
  return reversedStr;
}

console.log(reverseStr("hello"));
