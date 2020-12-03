sortByLength = str => {
  var j = str.split(" ")
  j.sort()
  var f = j.sort(function (a, b) {
    return a.length - b.length;
  });
  let e = f.join(" ")
  return e
}