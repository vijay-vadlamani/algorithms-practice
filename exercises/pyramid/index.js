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
function pyramid(n, row = 0, levels = '') {
  // if row equals n return
  // if columns equals n return
  // logic to add '#' or ' '
  // recurse
  let mid = Math.floor((2*n-1)/2);
  let length = levels.length;
  if(row === n) {
    return;
  }

  if(length === 2*n-1) {
    console.log(levels);
    return pyramid(n, row+1);
  }

  if(length-row <= mid && length+row >= mid) {
    levels += '#';
  } else {
    levels += ' ';
  }

  pyramid(n, row, levels);

}


module.exports = pyramid;

// function pyramid(n) {
//   let middleElm = Math.floor((n + n-1)/2);
    
//   for(let row=0; row < n; row++) {
//     let step = '';
//     for(let column = 0; column < n + n - 1; column++) {
//       if(middleElm - row <= column && middleElm + row >= column) {
//         step += '#';
//       } else {
//         step += ' ';
//       }
//     }
//     console.log(step);
//   }
// }
