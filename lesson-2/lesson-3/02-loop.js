//1. Tính tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Tổng từ 1 đến 100 là:", sum);

//2. In bảng cửu chương từ 2 đến 9
for (let i = 2; i <= 9; i++) {
    console.log(`\nBảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

//Tạo mảng chứa các số lẻ từ 1 đến 99



const addNumber = [];

for (let i = 1; i < 100; i += 2) {
    addNumber.push(i);
}

console.log("Mảng số lẻ từ 1 đến 99:", addNumber);

//4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:user1@example.com, user2@example.com, ..., user10@example.com).



let emailArry = [];
for (let i = 1; i < 10; i++) {
    emailArry = i;
    console.log(`user${emailArry}@mail.com`);
}
//Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
//in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
const doanhThu = {
    month: 2,
    toatal: 100,
}