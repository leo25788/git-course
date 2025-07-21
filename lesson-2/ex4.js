let height = 170;

let lastDigit = height % 100;

let maxWeight = lastDigit;
let idealWeight = (lastDigit * 9) / 10;
let minWeight = (lastDigit * 8) / 10;




console.log("Cân nặng lý tưởng:"+idealWeight+" kg"+",Tối đa: "+maxWeight+" kg"+",Tối thiểu:"+minWeight+" kg"
);
