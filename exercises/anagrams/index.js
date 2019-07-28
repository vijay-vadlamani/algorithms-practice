// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let cleanA = charMap(stringA);
    let cleanB = charMap(stringB);

    if(Object.keys(cleanA).length !== Object.keys(cleanB).length) {
        return false;
    }

    for(let char in cleanA) {
        if(cleanA[char] !== cleanB[char]) {
            return false;
        }
    }

    return true;
}

function charMap(str) {
    let charMap = {};
    let cleanStr = str.replace(/[^\w]/g,'').toLowerCase();

    for(let char of cleanStr) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

module.exports = anagrams;
