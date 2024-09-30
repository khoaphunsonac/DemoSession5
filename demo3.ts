// Tính diện tích và chu vi hình vuông
function perimeterOfSquare(n) {
    return n * 4;
}

function areaOfSquare(n) {
    return n * n;
}
// Tính diện tích và chu vi hình chữ nhật
function perimeterOfRectangle(a, b) {
    return (a + b) * 2;
}

function areaOfRectangle(a, b) {
    return a * b;
}

// Khai báo hàm tính điểm trung bình 3 môn toán lý hóa theo công thức đtb = (toan*3 + ly*2 + hoa)/6
function Average(toan, ly, hoa) {
    return (toan * 3 + ly * 2 + hoa) / 6;
}
// Hàm chính 
let String = "";
String += areaOfSquare(4) + " và " + perimeterOfSquare(4);
console.log("Diện tích và chu vi của hình vuông có cạnh là 4 lần lượt là " + String);

String = "";
String += areaOfRectangle(4, 5) + " và " + perimeterOfRectangle(4, 5);
console.log("Diện tích và chu vi của hình chữ nhật có các cạnh là 4 và 5 lần lượt là " + String);

let t = 4;
let l = 5;
let h = 6;
String = "";
String += Average(t, l, h).toFixed(2);
console.log("Điểm trung bình môn của Tý là :" + String);

