import assert from "assert";

function endZeros(a: number): number {
    // your code here
    let count = 0;
    if (a === 0) {
        return 1;
    }
    while (a % 10 === 0) {
        count++;
        a = Math.floor(a / 10);
    }
    return count;
}


console.log(endZeros(1));
console.log(endZeros(0));
console.log(endZeros(10));
console.log(endZeros(100));
console.log(endZeros(1000));
// console.log(endZeros(1010));

// These "asserts" are used for self-checking
assert.strictEqual(endZeros(1), 0);
assert.strictEqual(endZeros(0), 1);
assert.strictEqual(endZeros(10), 1);
assert.strictEqual(endZeros(100), 2);
assert.strictEqual(endZeros(1000), 3);