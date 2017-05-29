function range (start, end, step) {
  var numbersLog = [];
  if (!step) {
    step = 1;
  }
  for (var i = start; i <= end; i += step) {
      numbersLog.push(i);
  }
  return numbersLog
}



console.log(range(1,10,2));

//didn't work before because didn't specify the !step part