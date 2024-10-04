// Hàm đếm số ước của một số
function Divisor(num) {
    let count = 0;
    // Vòng lặp kiểm tra các ước của num
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) { // Nếu i là ước của num
            count++; // Tăng số lượng ước
        };
    }
    return count; // Trả về tổng số ước của num
}

// Hàm kiểm tra số nguyên tố
function isPrime(num) {
    return Divisor(num) == 2; // Một số nguyên tố có đúng 2 ước
}

// 1. Hàm liệt kê các số nguyên tố trong mảng
function F1(arr) {
    let Str = "";
    for (let num of arr) {
        if (isPrime(num)) Str += num + " "; // Nếu là số nguyên tố thì thêm vào chuỗi kết quả
    }
    if (Str == "") {
        console.log("1. Trong dãy không tồn tại số nguyên tố");
        return; // Nếu không có số nguyên tố thì kết thúc hàm
    }
    console.log(`1. Các số nguyên tố trong mảng là ${Str}`); // In ra các số nguyên tố tìm được
}

// 2. Hàm tính tổng các số nguyên tố trong mảng
function F2(arr) {
    let sum = 0;
    for (let num of arr) {
        if (isPrime(num)) sum += num; // Cộng dồn các số nguyên tố
    }
    return sum; // Trả về tổng của các số nguyên tố
}

// 3. Hàm đếm số lượng số nguyên tố trong mảng
function F3(arr) {
    let count = 0;
    for (let num of arr) {
        if (isPrime(num)) count++; // Tăng biến đếm nếu là số nguyên tố
    }
    return count; // Trả về số lượng số nguyên tố
}

// 4. Hàm tìm số lớn nhất trong mảng
function F4(arr) {
    let max = arr[0]; // Giả định phần tử đầu tiên là lớn nhất
    for (let num of arr) {
        if (num > max) max = num; // Cập nhật giá trị lớn nhất nếu tìm thấy số lớn hơn
    }
    return max; // Trả về số lớn nhất
}

// 5. Hàm tìm số nhỏ nhất trong mảng
function F5(arr) {
    let min = arr[0]; // Giả định phần tử đầu tiên là nhỏ nhất
    for (let num of arr) {
        if (num < min) min = num; // Cập nhật giá trị nhỏ nhất nếu tìm thấy số nhỏ hơn
    }
    return min; // Trả về số nhỏ nhất
}

// 6. Hàm tính tổng các phần tử trong mảng
function F6(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num; // Cộng dồn tất cả các phần tử trong mảng
    }
    return sum; // Trả về tổng của mảng
}

// 7. Hàm tính giá trị trung bình của các phần tử trong mảng
function F7(arr) {
    return (F6(arr) / arr.length).toFixed(2); // Gọi hàm F6 để lấy tổng rồi chia cho số phần tử
}

// 8. Hàm kiểm tra mảng có chứa số nguyên tố hay không
function F8(arr) {
    for (let num of arr) {
        if (isPrime(num)) return true; // Nếu có ít nhất một số nguyên tố thì trả về true
    }
    return false; // Nếu không có số nguyên tố nào thì trả về false
}

// Mảng các số cần kiểm tra
let numbers = [
    0, 1, 4, 6, 8, 9, 10, 12, 14, 15,
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

// Gọi các hàm và in kết quả
F1(numbers); // Liệt kê các số nguyên tố

console.log(`2. Tổng các số nguyên tố tìm được là: ${F2(numbers)}`); // Tính tổng các số nguyên tố
console.log(`3. Số các số nguyên tố trong mảng là: ${F3(numbers)}`); // Đếm số lượng số nguyên tố
console.log(`4. Số lớn nhất trong mảng là: ${F4(numbers)}`); // Tìm số lớn nhất
console.log(`5. Số nhỏ nhất trong mảng là: ${F5(numbers)}`); // Tìm số nhỏ nhất
console.log(`6. Tổng các số trong mảng là: ${F6(numbers)}`); // Tính tổng các phần tử trong mảng
console.log(`7. Trung bình cộng các số trong mảng là: ${F7(numbers)}`); // Tính giá trị trung bình
F8(numbers) ? console.log("8. Dãy tồn tại số nguyên tố") : console.log("8. Dãy không tồn tại số nguyên tố"); // Kiểm tra có tồn tại số nguyên tố
