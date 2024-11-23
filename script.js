let number = [2, 4, 9, 10, 45, 67, 8, 90];
console.log(`[${number}] 'начала array'`); // Начальный массив

let evenNumbers = []; // Массив для хранения чётных чисел
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) { // Проверка на чётность
        evenNumbers.push(number[i]); // Добавляем чётное число в массив
    }
}

console.log(`[${evenNumbers}] 'чётные числа array'`); // Чётные числа


