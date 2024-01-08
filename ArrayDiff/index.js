// Finding difference between arrays
// Return the different element found between two arrays
function arrayDiff(a, b) {
  return a.filter((data) => !b.some(x => data === x));
 }

console.log(arrayDiff([1,2,3],[1,2,3]));