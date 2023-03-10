// * Linear Search *
// Big O :
//   Best - O(1)
//   Worst - O(n)
//   Average - O(n)

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}

console.log(linearSearch([1, 23, 34, 5], 4));
