function Queue() {
  var collection = [];

  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (val) {
    collection.push(val);
  };

  this.dequeue = () => collection.shift();

  this.front = () => collection[0];

  this.size = () => collection.length;

  this.isEmpty = () => collection.length === 0;
}

var myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.print();
console.log(myQueue.size());
console.log(myQueue.isEmpty());
