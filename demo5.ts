// Liệt kê các số chẵn trong khoảng từ min đến max
function F1(arr, min, max) {
    let String = "";
    for (let num of arr) {
        if (num >= min && num <= max && num % 2 == 0) String += num + " ";
    }
    console.log(`Các số chẵn trong mảng thuộc (${min},${max}) là: ${String}`);
}

function F2(arr, min, max) {
    let Sum = 0;
    for (let num of arr) {
        if (num >= min && num <= max && num > 0) Sum += num;
    }
    console.log(`Tổng các số dương trong khoảng (${min},${max}) là: ${Sum}`);
}

function F3(arr, min, max) {
    let counter = 0;
    for (let num of arr) {
        if (num >= min && num <= max && num % 2 != 0) counter++;
    }
    console.log(`Số số lẻ trong khoảng (${min},${max}) là: ${counter}`);
}

function F4(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
    }
    console.log(`Max: ${max}`);
}

function F5(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    console.log(`Min: ${min}`);
}

const arr = [3, 5, 8, 12, 15, 20, 24, -2, -5, 0, 18, 30];

const min = 0;
const max = 25;

// Gọi các hàm với mảng và khoảng min, max đã cho
F1(arr, min, max); // Liệt kê các số chẵn
F2(arr, min, max); // Tính tổng các số dương
F3(arr, min, max); // Đếm số số lẻ
F4(arr);           // Tìm số lớn nhất
F5(arr);           // Tìm số nhỏ nhất