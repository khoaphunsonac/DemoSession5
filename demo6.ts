function add(a, b) {
    let result = a + b;
    return result;
}

function isEven(number) {
    return number % 2 == 0;
}

function login(username,password){ 
    return username == "khoaphunsonac" && password == "blabla";
}

let sum = add(5, 10);
console.log(sum);

if (add(10, -5) > 0) console.log("Kết quả là số dương!");
else console.log("Kết quả là số âm!");

let num = 11;
if (isEven(num)) console.log(`${num} là số chẵn`);
else console.log(`${num} là số lẻ`);

let username = 'khoaphunsonac';
let password = 'blabla';

if(login(username,password)) console.log ("Tài khoản hợp lệ!");
else console.log("Tài khoản không hợp lệ!");