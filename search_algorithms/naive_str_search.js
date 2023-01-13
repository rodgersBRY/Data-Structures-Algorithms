function naiveStrSearch(str, substr) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < substr.length; j++) {
      if (substr[j] !== str[i + j]) break;
      if (j === substr.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveStrSearch("wozwozgmomg", "wo"));
