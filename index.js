function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } else {
      for (let key in collection) {
        result.push(callback(collection[key], key));
      }
    }
    return result;
  }
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    if (!acc) {
      acc = collection[0];
      startIdx = 1;
    }
    if (Array.isArray(collection)) {
      for (let i = startIdx; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else {
      for (let key in collection) {
        acc = callback(acc, collection[key], collection);
      }
    }
    return acc;
  }
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else {
      for (let key in collection) {
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
    }
  }
  function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else {
      for (let key in collection) {
        if (predicate(collection[key])) {
          result.push(collection[key]);
        }
      }
    }
    return result;
  }
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  function myFirst(array, n) {
    if (!n) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  function myLast(array, n) {
    if (!n) {
      return array[array.length - 1];
    } else {
      return array.slice(Math.max(array.length - n, 0));
    }
  }
  function myKeys(object) {
    return Object.keys(object);
  }
  function myValues(object) {
    let values = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]);
      }
    }
    return values;
  }
// Test myEach
console.log(myEach([1, 2, 3], alert)); // Should alert 1, then 2, then 3

// Test myMap
console.log(myMap([1, 2, 3], function(num){ return num * 3; })); // Should output [3, 6, 9]

console.log(myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; })); // Should output [3, 6, 9]
function myReduce(collection, callback, acc) {
    let startIdx = 0;
    if (!acc) {
      acc = collection[0];
      startIdx = 1;
    }
    if (Array.isArray(collection)) {
      for (let i = startIdx; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else {
      for (let key in collection) {
        acc = callback(acc, collection[key], collection);
      }
    }
    return acc;
  }
                