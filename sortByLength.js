sortByLength = str => {
  var j = str.split(" ")
  var f = j.sort((a, b) => a.length - b.length)
  let e = f.join(" ")
  return e
}