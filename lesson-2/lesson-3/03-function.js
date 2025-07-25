/* 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với
2 cặp giá trị khác nhau. */

function multiply(a, b) {
    const result = a * b;
    console.log(`Kết quả của ${a} * ${b} là: ${result}`);
}
multiply(5, 6);
multiply(6, 6);

/*
Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả
với 2 bộ số khác nhau. */

function findMin(a, b, c) {
    let min_value;
    if (a <= b && a <= c) {
        min_value = a;
    }
    else if (b <= a && b <= c) {
        min_value = b;
    }
    else
        min_value = c;

    return min_value;


}

const min1 = findMin(1, 2, 0);
console.log(`Giá trị nhỏ nhất trong là: ${min1}`);

const min2 = findMin(10, 2, 20);
console.log(`Giá trị nhỏ nhất trong là: ${min2}`);
/*
Viết hàm getTopStudents nhận 2 tham số:
● students: mảng các object, mỗi object chứa name (tên) và score (điểm).
● threshold: ngưỡng điểm để được coi là "top" (số).
Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
Gọi hàm với danh sách thực tế và in kết quả. */

function getTopStudents(students, threshold) {

    const result = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result.push(students[i].name);
        }
    }

    return result;
}
const studentsList = [
    { name: "Huy-1", score: 9 },
    { name: "Thuy", score: 10 },

    { name: "Hanh", score: 2 }
];
const topStudents = getTopStudents(studentsList, 7);
console.log("Top students:", topStudents);

//Viết hàm calculateInterest nhận 3 tham số:
function calculateInterest(principal, rate, years) {
    const interest = (principal * rate * years) / 100;
    const totalAmount = principal + interest;
    return totalAmount;
}
console.log("Số Tiền gởi:" + calculateInterest(10, 100, 2))