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

const arr = [-97, 58, -23, 42, -12, 85, -67, 34, -74, 16, -5, 99, -39, 71, -88, 27, -56, 62, -19, 90, -82, 47, -31, 13, -45, 76, -50,
    29, -3, 64, -21, 11, -95, 52, -9, 38, -77, 1, -49, 73, -84, 4, -61, 94, -16, 8, -30, 39, -10, 86, -66, 22, -2, 45, -58,
    70, -15, 60, -99, 7, -25, 81, -80, 33, -44, 19, -63, 25, -87, 46, -26, 100, -1, 24, -54, 65, -68, 12, -75, 48, -92, 93,
-17, 30, -24, 37, -11, 69, -41, 59, -72, 78, -33, 14, -8, 83, -35, 53, -40, 2];

const min = -20;
const max = 50;

// Gọi các hàm với mảng và khoảng min, max đã cho
F1(arr, min, max); // Liệt kê các số chẵn
F2(arr, min, max); // Tính tổng các số dương
F3(arr, min, max); // Đếm số số lẻ
F4(arr);           // Tìm số lớn nhất
F5(arr);           // Tìm số nhỏ nhất