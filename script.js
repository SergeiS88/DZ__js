//Задание 1
/*Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени*/

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
/*Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"*/

let userSalary = 100;
while(true){
    userSalary = Number(prompt('Введите свою зарплату'));
    if(isNaN(userSalary)) alert('Это не число');
    else break;
}

const AfterTax = () => { return userSalary *= 0.87 };
console.log(AfterTax(userSalary));


//Задание 3
/*Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел*/

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
/*Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.*/

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