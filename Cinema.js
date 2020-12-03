class Cinema {
    constructor(movies) {
        this.movies = movies
    }
    calculateDuration = movies => movies.reduce(function (total, movies) {
        return total + movies.duration
    }, 0)

    getAllName = movies => {
        var x = movies.map(key => {
            return key.name
        })
        return x
    }
}

const obj = new Cinema()
const arr = [
    { 'name': 'Baaghi', 'duration': 120 },
    { 'name': 'Panga', 'duration': 60 },
    { 'name': 'Drive', 'duration': 240 }]


m = obj.calculateDuration(arr)
n = obj.getAllName(arr)
console.log(m)
console.log(n)