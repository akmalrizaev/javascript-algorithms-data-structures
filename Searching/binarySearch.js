// Binary search is an efficient algorithm for finding an item from a sorted list of items

// Big O:
//  Worst and Average Case - O(log n)
//  Best Case - O(1)

function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

console.log(binarySearch([1, 4, 5, 12, 15, 20, 25], 20));
