function reverseArray (arr) {
  var reversedArray = [];
  for (i = 0; i < arr.length; i++) {
    reversedArray.unshift (arr[i])
  }
  return reversedArray;
}

var testArray = [1,3,5,7,9];
console.log(reverseArray(testArray));

//first try did i=arr.length-1, i>=0, i-- & push instead of unshift, didn't work

function reverseArray2 (arr2) {
  var reversedArray2 = [];
  for (i = arr2.length - 1; i >= 0; i--) {
    reversedArray2.push (arr2[i])
  }
  return reversedArray2;
}

var testArray2 = ["oranges", "apples", "table", "chair"];
console.log(reverseArray2(testArray2));

//don't know why first try with this method didn't work, works now.