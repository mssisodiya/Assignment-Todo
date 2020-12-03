findLongest = str => {
    const strArray = str.split(' ');
    const longWord = strArray.reduce((a, b) => {
        if (b.length > a.length)
            return b
        else
            return a
    })
    return longWord
}