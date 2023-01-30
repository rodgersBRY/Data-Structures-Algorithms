// longest palindromic substring
function getLongestPalindromicSubstring(str) {
  // bench case str length < 2
  if (str.length < 2) return str;

  // keep a memory of the size of longest sub and start position
  var start = 0,
    maxLength = 1;

  // expand inside out updating the start and maxlength
  function expandAroundCenter(left, right) {
    while (str[left] === str[right] && left >= 0 && right < str.length) {
      if (right - left + 1 > maxLength) {
        start = left;
        maxLength = right - left + 1;
      }
      
      left--;
      right++;
    }
  }

  // loop through the str
  for (let i = 0; i < str.length; i++) {
    expandAroundCenter(i - 1, i + 1); // odd
    expandAroundCenter(i, i + 1); // even
  }

  console.log(str.substring(start, start + maxLength));

  return str.substring(start, start + maxLength);
}

getLongestPalindromicSubstring("abbad");
getLongestPalindromicSubstring("cbbd");
