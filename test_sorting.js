// O(n)
function bubbleSort(arr) {
  var swap;
  for (var i = arr.length; i > 0; i--) {
    swap = false;
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (!swap) break;
  }

  return arr;
}

// bubbleSort([11, 10, 12, 13, 15, 256, 67]);
// O(n^2)
function selectionSort(arr) {
  console.log(arr);

  for (var i = 0; i < arr.length; i++) {
    var minIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    if (i !== minIndex) {
      // swap the values
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// console.log(selectionSort([19, 44, 38, 5, 47, 15]));

function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}

insertionSort([1, 2, 3, 4, -1]);
