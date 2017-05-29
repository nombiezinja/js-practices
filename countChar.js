  function countChar (string, letter) {
    var i = 0
    for (var p = 0; p <= string.length - 1; p++) {
      if (string.charAt(p) === letter) {
        i ++
      }
    }
    return (i);
  }

  console.log(countChar("kakkerlak", "k"));