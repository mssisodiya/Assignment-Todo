findNemo = str => {
    var c = 0
    var a = str.indexOf("Best")
    for (let i = 0; i < a; i++) {
        if (str[i] === ' ') {
            c += 1
        }
    } c = c + 1
    if (a >= 1)
        return "I found Best at " + c + "!"
    else
        return "I can't find Best :("
}