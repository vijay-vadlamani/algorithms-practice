// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(arr, n) {
    const chunked = [];
    let index = 0;
    while (index < arr.length) {
      chunked.push(arr.slice(index, index + n));
      index += n;
    }
  
    return chunked;
  }
  
  console.log(
    "What is chunked 2 result here?",
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
  );

  
  module.exports = chunk;
  
  // function chunk(array, size) {
  //     //declare a new array called chunked
  //     const chunked = [];
  
  //     // Iterate over the array passed
  //     for(let elm of array) {
  //         // check if chunked has last element
  //         let last = chunked[chunked.length - 1];
  
  //         if(!last || last.length === size) {
  //             chunked.push([elm]);
  //         } else {
  //             last.push(elm);
  //         }
  //     }
  //     return chunked;
  // }