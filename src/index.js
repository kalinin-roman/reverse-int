module.exports = function reverse (n) {
    const string = Math.abs(n);
    const result = string.toString().split('').reverse().join('');
    return result;
}
