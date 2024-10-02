// Khai báo hàm đếm ước số của 1 số. Trả về số ước số đếm được 
function Divisor(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        };
    }
    return count;
}

function isPrime(num) {
    return Divisor(num) == 2;
}
// Xây dựng hàm thực hiện các yêu cầu sau:
// 1. Liệt kê các số nguyên tố
function F1(arr) {
    let Str = "";
    for (let num of arr) {
        if (isPrime(num)) Str += num + " ";
    }
    if (Str == "") {
        console.log("1. Trong dãy không tồn tại số nguyên tố");
        return;
    }
    console.log(`1. Các số nguyên tố trong mảng là ${Str}`);
}
// 2. Tính tổng các số nguyên tố tìm được . Trả về kết quả khi tính
function F2(arr) {
    let sum = 0;
    for (let num of arr) {
        if (isPrime(num)) sum += num;
    }
    return sum;
}
// 3. Đếm trong mảng có bao nhiêu số nguyên tố . Trả về kết quả khi tính
function F3(arr) {
    let count = 0;
    for (let num of arr) {
        if (isPrime(num)) count++;
    }
    return count;
}
// 4. Tìm số lớn nhất trong mảng.
function F4(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}
// 5. Tìm số nhỏ nhất trong mảng.
function F5(arr) {
    let min = arr[0];
    for (let num of arr) {
        if (num < min) min = num;
    }
    return min;
}
// 6. Tinh tong cac phan tu trong mang
function F6(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
// 7. Tim gia tri trung binh cac phan tu trong mang
function F7(arr) {
    return (F6(arr) / arr.length).toFixed(2);
}
// 8. Kiem tra mang co chua so nguyen to hay khong? Tra ve ket qua la true hoac false
function F8(arr) {
    for (let num of arr) {
        if (isPrime(num)) return true;
    }
    return false;
}
let numbers = [0, 1, 4, 6, 8, 9, 10, 12, 14, 15,
    16, 18, 20, 21, 22, 24, 25, 26, 27, 28,
    30, 32, 33, 34, 35, 36, 38, 39, 40, 42,
    44, 45, 46, 48, 49, 50, 51, 52, 54, 55,
    56, 57, 58, 60, 62, 63, 64, 65, 66, 68,
    69, 70, 72, 74, 75, 76, 77, 78, 80, 81,
    82, 84, 85, 86, 87, 88, 90, 91, 92, 94,
    95, 96, 98, 99, 100, 102, 104, 105, 106, 108,
    110, 111, 112, 114, 115, 116, 117, 118, 120, 121,
    122, 124, 125, 126, 128, 130, 132, 133, 134, 135
    ];
;
// let num = 17
// console.log(`${num} có số ước là: ${Divisor(num)}`);
// isPrime(num) ? console.log("Là số nguyên tố") : console.log("Không là số nguyên tố");
F1(numbers);

console.log(`2. Tổng các số nguyên tố tìm được là: ${F2(numbers)}`);
console.log(`3. Số các số nguyên tố trong mảng là: ${F3(numbers)}`);
console.log(`4. Số lớn nhất trong mảng là: ${F4(numbers)}`);
console.log(`5. Số nhỏ nhất trong mảng là: ${F5(numbers)}`);
console.log(`6. Tổng các số trong mảng là: ${F6(numbers)}`);
console.log(`7. Trung bình cộng các số trong mảng là: ${F7(numbers)}`);
F8(numbers) ? console.log("8. Dãy tồn tại số nguyên tố") : console.log("8. Dãy không tồn tại số nguyên tố");



