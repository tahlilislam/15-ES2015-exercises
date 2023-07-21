// ## **Quick Question #1**
// What does the following code return?
new Set([1,1,2,2,3,4]) // Set(4) {1,2,3,4}


// ## **Quick Question #2**
// What does the following code return?
const noDuplicateLetters = [...new Set("referee")].join("") // "ref"


// ## **Quick Question #3**
// What does the following code return?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//{[1,2,3] => true, [1,2,3] => false}
//Actual Output
// {Array(3) => true, Array(3) => false}


// ## **hasDuplicate**
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(arr){
    const noDuplicate = [...new Set(arr)]
   if(noDuplicate.length !== arr.length) return true;
   return false;
}
// const hasDuplicate = arr => new Set(arr).size !== arr.length

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false


// ## **vowelCount**
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str){
    const vowels = "aeiou"
    const vowelMap = new Map();
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)) {
            if(vowelMap.has(char)) {
                vowelMap.set(char, vowelMap.get(char) + 1 );   //retrieveing the value using get
            }
            else {
                vowelMap.set(char, 1);
            }
        }
    }
    return vowelMap;

}
