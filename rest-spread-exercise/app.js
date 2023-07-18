// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

  //Refactor it to use the rest operator & an arrow function:

  const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.
// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

function findMin (...nums) {
	if (!nums.length) return undefined;
    return nums.reduce((min, currNum) => min < currNum ? min : currNum)
}
const findMin2 = (...args) => Math.min(...args)

//Write a function called mergeObjects that accepts two objects and returns a new object 
//which contains all the keys and values of the first object and second object.
// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

function mergeObjects(obj1, obj2) { 
    return {...obj1, ...obj2};
}
const mergeObjects2 = (obj1, obj2) => ({...obj1, ...obj2});

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
// The function should return a new array with the original array values and all of additional arguments doubled.
// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...restArgs) => {
    const doubleRestArgs = restArgs.map(num => num * 2)
    return [...arr, ...doubleRestArgs];
};


/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
let rmvItemIdx = Math.floor(Math.random() * (items.length-1));
const newItemsArr = [...items.slice(0, rmvItemIdx), ...items.slice(rmvItemIdx+1)]
return newItemsArr;
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key] : val}  
}
    //let newObj = {...obj}
    //delete newObj[key];
    //return newObj;


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = {...obj}
    delete newObj[key];
    return newObj;

}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    return {...obj, [key]: val}

}