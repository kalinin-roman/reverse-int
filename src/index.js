module.exports = function reverse (n) {
    let x = n;
    let y = 0;
    for(; x; x = Math.floor(x / 10)) {
        y *= 10;
        y += x % 10;
    }
    return y
}
