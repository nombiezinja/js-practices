function reverseArrayInPlace (arr) {
  for (i = 0; i <= Math.floor(arr.length / 2 - 1); i++) {
    var hold = [];
    hold[i] = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = hold[i];
  }
  return arr
}

var testArray = ["A", "B", "C", "D", "E"];
var testArray2 = [1, 2, 3, 4, 5, 6];

console.log(reverseArrayInPlace(testArray));
console.log(reverseArrayInPlace(testArray2));