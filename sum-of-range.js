function range (start, end) {
  var numbersLog = [];
  for (var i = start; i <= end; i ++) {
      numbersLog.push(i)
  }
  return numbersLog
}

function sum (array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result
}

console.log(range(1,10));
console.log(range(5,2,-1));
console.log(sum(range(1,10)));