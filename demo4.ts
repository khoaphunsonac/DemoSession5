function printArray(arr) {
    let String = arr[0];
    for (let i = 1; i < arr.length; i++) {
        String += " " + arr[i];
    }
    console.log(String);
}

function printArray2(arr) {
    let String = "";
    for (let item of arr) {
        String += item + " ";
    }
    console.log(String);
}

function filterMinToMax(numbers, min, max) {
    let String = "";
    for (let num of numbers) {
        if (num >= min && num <= max) String += num + " ";
    }
    console.log(`Các số trong khoảng từ ${min} đến ${max} là: ${String}`)
}

let arr = [7, 12, 25, 3, 18, 29, 14, 6, 22, 9, 17, 30, 5, 21, 11, 2, 28, 15, 8, 4];
let names = ["Emily", "James", "Olivia", "Michael", "Sarah", "William", "Ava", "David", "Sophia", "Daniel", "Mia",
    "Christopher", "Grace", "Andrew", "Charlotte", "Joshua", "Lily", "Matthew", "Ella", "Benjamin"];

filterMinToMax(arr, 10, 25);
