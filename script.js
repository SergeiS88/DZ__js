//Задание 1

let num1 = 2;
let num2 = 3;
const Degree = (num, degree) => {
    for(let i = 0; i < degree-1; i++){
        num *= num;
    }
    return num;
}
console.log(Degree(num1,3) + Degree(num2,3));


//Задание 2

let userSalary = 100;
while(true){
    userSalary = Number(prompt('Введите свою зарплату'));
    if(isNaN(userSalary)) alert('Это не число');
    else break;
}

const AfterTax = () => { return userSalary *= 0.87 };
console.log(AfterTax(userSalary));


//Задание 3

let userNum1 = Number(prompt('Введите первое число')); 
let userNum2 = Number(prompt('Введите второе число'));
let userNum3 = Number(prompt('Введите третье число'));
alert(MaxNumber(userNum1, userNum2, userNum3));
function MaxNumber(num1, num2, num3) {
    let min;
    if(num1 > num2) min = 'второе число минимальное';
    if(num2 > num3) min = 'третье число минимальное';
    if(num3 > num1) min = 'первое число минимальное';
    return min;
}


// Задание 4

let numberA = 2;
let numberB = 6;

Sum = (x,y) => x+y; 
console.log(Sum(numberA,numberB));

Diff = (x,y) => Math.max(x,y) - Math.min(x,y);
console.log(Diff(numberA,numberB));

Mult = (x,y) => x*y;
console.log(Mult(numberA,numberB));

Div = (x,y) => x/y;
console.log(Div(numberA,numberB));