// in default it sorts according to the string unicode code format
console.log([1, 2, 56, 7, 6, 44].sort());

// telling js how to sort
function numCompare(num1, num2) {
  return num1 - num2;
}

console.log([1, 2, 56, 7, 6, 44].sort(numCompare));

function strCompareLen(str1, str2) {
  return str2.length - str1.length;
}

console.log(
  ["Data Structures", "coal", "adelle", "miguel"].sort(strCompareLen)
);
