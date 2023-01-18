console.log('Завдання 1 (числа від 20 до 30 через проміжок 0,5.)');
for (let num1 = 20; num1 <= 30; num1 = num1 + 0.5) {
  console.log(num1);
}

console.log('Завдання 2 (Виведення даних з розрахунком вартості.)');
for (let dollar = 10; dollar <= 100; dollar = dollar + 10) {
  console.log(`${dollar}$ * 27грн = ${dollar * 27}грн`);
}

console.log('Завдання 3 (Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.)');
let num2 = +prompt('Введіть будь-яке ціле число. Завдання 3');
for (let i = 1; i <= 100; i++) {
  if (i ** 2 <= num2) {
    console.log(i);
  }
}

console.log('Завдання 4 (Прості числа до 10)');
mark:
for (let i = 2; i <= 10; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      continue mark;
    }
  }
  console.log(i);
}

console.log('Завдання 5 (Чи можна одержати число шляхом зведення числа 3 у ступінь)');
let num4 = +prompt('Введіть будь-яке ціле число. Завдання 5');
let i = 1;

for (; i < num4; i++) {
  if (3 ** i === num4) {
    num4 = true;
    break;
  }
}
if (num4 === true) {
  console.log(`Можна, 3 в ступені ${i}`);
} else {
  console.log(`Не можна`);
}

