// Stacks

// functions: push, pop, peek, length

// var letters = []; // this is our stack

// var word = "racecar";

// var rword = "";

// // put letters into the stack
// for (var ltr of word) {
//   letters.push(ltr);
// }

// for (var ltr of word) {
//   rword += letters.pop();
// }

// if (rword === word) {
//   console.log(`${word} is a palindrome`);
// } else {
//   console.log(`${word} is not a palindrome`);
// }

var Stack = function () {
  var count = 0;
  var storage = {};

  this.push = function (val) {
    storage[count] = val;
    count++;
  };

  this.pop = function () {
    if (count === 0) {
      return undefined;
    }

    count--;
    var result = storage[count];
    delete storage[count];
    return result;
  };

  this.peek = function () {
    return storage[count - 1];
  };

  this.size = function () {
    return count;
  };
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("mawiraCorp");
console.log(myStack.size());
console.log(myStack.peek());
