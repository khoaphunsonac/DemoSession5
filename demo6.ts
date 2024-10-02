function add(a, b) {
    let result = a + b;
    return result;
}

function isEven(number) {
    if (number % 2 == 0) return true;
    return false;
}

let sum = add(5, 10);
console.log(sum);

if (add(10, -5) > 0) console.log("Kết quả là số dương!");
else console.log("Kết quả là số âm!");