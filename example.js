const { performance } = require("perf_hooks");

// calculate sum from 1 upto,
// and including, some number n
function addUpTo(n) {
  // let total = 0;
  // for (let i = 1; i <= n; i++) {
  //   total += i;
  // }
  // return total;

  return (n * (n + 1)) / 2;
}

function countUpAndDown(n) {
  console.log("Going Up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top\nGoing down");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down.Bye!");
}

let t1 = performance.now();
countUpAndDown(10);
var t2 = performance.now();
console.log(`Time lapsed: ${(t2 - t1) / 1000} seconds`);
