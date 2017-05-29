function range (start, end, step) {
  var numbersLog = [];
  while (!step) {
    step = 1;
  }
  if (start < end) {
    for (var i = start; i <= end; i += step) {
      numbersLog.push(i);
    }
  }
  else
    for (var i = start; i >= end; i -= Math.abs(step)) {
      numbersLog.push(i);
    }
  return numbersLog
}



console.log(range(1,10,2));
console.log(range(5,2,-1));