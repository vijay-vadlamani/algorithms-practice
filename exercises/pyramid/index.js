// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


/**
 * adding total of n+(n-1) for column while  rows stay at n
 * for loop 0 to n
 * make empty string variable
 * make an other for loop from 0 to n + (n-1)
 * if length equals n+(n-1) return
 * else add # or ' '
 *
 * 
 */
function pyramid(n) {
    
  for(let row=0; row < n; row++) {
    let step = '';
    for(let column = 0; column <= n+(n-1); column++) {
      console.log("#", column);
    }
  }
}

pyramid(3);

module.exports = pyramid;
