findNemo = str => {
    let s = str.split(" ")
    let c = s.indexOf("Best") + 1;
    if (c >= 1)
        return "I found Best at " + c + "!"
    else
        return "I can't find Best :("
}