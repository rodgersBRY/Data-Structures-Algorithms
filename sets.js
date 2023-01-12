// Sets
// contains unique number of values

// add, remove, elements, size/length
var Set = function () {
  var collection = [];

  this.has = function (val) {
    return collection.indexOf(val) !== -1;
  };

  this.values = function () {
    return collection;
  };

  this.add = function (val) {
    if (!this.has(val)) {
      collection.push(val);
      return true;
    }
    return false;
  };

  this.remove = function (val) {
    if (this.has(val)) {
      var index = collection.indexOf(val);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };

  // join two sets together
  this.union = function (otherSet) {
    var unionSet = new Set();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function (e) {
      unionSet.add(e);
    });

    secondSet.forEach(function (e) {
      unionSet.add(e);
    });

    return unionSet.values();
  };

  //   return values common to both sets
  this.intersection = function (otherSet) {
    var intersectionSet = new Set();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet.values();
  };

  // return values not in the other set
  this.difference = function (otherSet) {
    var differenceSet = new Set();
    var firstSet = this.values();

    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet.values();
  };

  // test if the set is a subset of a different set
  this.subset = function (otherSet) {
    var firstSet = this.values();

    // checks if every value of first set passes the callback function
    return firstSet.every(function (e) {
      return otherSet.has(e);
    });
  };
};

mySet = new Set();
otherSet = new Set();

mySet.add(2);
mySet.add(3);
mySet.add(6);
otherSet.add(4);
otherSet.add(5);
otherSet.add(3);
console.log(mySet.values());
console.log(mySet.size());
console.log(otherSet.values());
console.log(otherSet.size());
console.log(mySet.union(otherSet));
console.log(mySet.intersection(otherSet));
console.log(otherSet.difference(mySet));
