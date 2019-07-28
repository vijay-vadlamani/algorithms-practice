// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((char, i) => {
       return char === str[str.length - i - 1];
    });
}

module.exports = palindrome;


// function palindrome(str) {
//     let revStr = str.split('').reduce((rev,char) => char + rev);

//     return str === revStr ? true : false;
    
// }

// function palindrome(str) {
//     let rev = str.split('').reverse().join('');

//     return str === rev ? true : false;
    
// }

// function palindrome(str) {
//     let rev = '';

//     for (let char of str) {
//         rev = char + rev;
//     }

//     return str === rev ? true : false;
    
// }
