  function countBs (string) {
    var i = 0
    for (var p = 0; p <= string.length - 1; p++) {
      if (string.charAt(p) === "B") {
        i ++
      }
    }
    return (i);
  }

  console.log(countBs("CBbbbbBBBBBC"));