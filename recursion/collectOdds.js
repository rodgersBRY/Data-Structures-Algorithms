/* Helper Method Recursion */

function collectOdds(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length == 0) return;
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }
  helper(arr);

  return result;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 13]));

/* Pure Recursion */

function collectOddsPurely(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddsPurely(arr.slice(1)));
  return newArr;
}

console.log(collectOddsPurely([1, 2, 3, 4, 5, 6, 7]));
