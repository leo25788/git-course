car = { make: 'Toyota', model: 'Corolla', year: 2012 };

console.log("Năm sản xuất:", car.year);

const person = {
    name: 'Huy',
    address:
    {
        street: 'Trung Nu Vuong',
        city: 'DN',
        country: 'VN'
    }
};

console.log(person.address.street);

const student = {
    name: "Huy",
    grades: {
        math: 10,
        english: 9
    }
};

console.log("Điểm toán:", student["grades"]["math"]);


const settings = {
    volume: 70,
    brightness: 100
};


settings.volume = 99;
console.log(settings.volume);

const bike = {

};
bike["color"] = 'Red';
console.log(bike.color);

const employeee = {
    name: 'Huy',
    age: 10
};
delete employeee.age;


const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]

};
