function Sum(a, b) {
    console.log(`Tổng là ${a + b}`)
}

function Sub(a, b) {
    console.log(`Hiệu là ${a - b}`)
}

function Multi(a, b) {
    console.log(`Tích là ${a * b}`)
}

function Divi(a, b) {
    console.log(`Thương là ${a / b}`)
}

console.log('1.Tính tổng');
console.log('2.Tính hiệu');
console.log('3.Tính tích');
console.log('4.Tính thương');
let menu = 41;
let a = 10;
let b = 5;
if (menu == 1) Sum(a, b);
else if (menu == 2) Sub(a, b);
else if (menu == 3) Multi(a, b);
else if (menu == 4) Divi(a, b);
else { console.log(`Menu không hợp lệ!`); }




