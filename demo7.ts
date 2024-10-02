function isNegative(num) {
    return num < 0;
}

function listNegativeNumber(numbers) {
    for (let i of numbers) {
        if (isNegative(i)) console.log(i);
    }
    return;
}
let numbers = [-13, 82, 16, -85, -31, 90, 16, 14, -23, 28, -96, -21, 21, 8, -62, 84, 22, 99, 98, -8];

console.log("Liệt kê các số âm!");
listNegativeNumber(numbers);

