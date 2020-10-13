module.exports = function reverse (n) {
    let arr = [];
    while(n != 0) {
        let surplus = n % 10;
        n /= 10;
        n = Math.trunc(n);
        arr.push(surplus);
    }
    let reversedString = arr.join();
    reversedString = reversedString.replace(/,?-|,/g, '');
    let reversedInt = parseInt(reversedString);
    return reversedInt;
}
