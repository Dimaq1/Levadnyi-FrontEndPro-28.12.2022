let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

console.log('Кількість позитивних елементів(1)');
const numbersPositive = arr.filter((el) => {
  return el > 0;
})
console.log(numbersPositive.length);


console.log('Сума позитивних елементів(1)');
const sumPositiveNumbers = numbersPositive.reduce((total, el) => {
  return total + el;
}, 0)
console.log(sumPositiveNumbers);


console.log('Мінімальний елемент масиву(2)');
const minNumber = Math.min.apply(null, arr)
console.log(`${minNumber}, індекс - ${arr.indexOf(minNumber)}`);


console.log('Максимальний елемент масиву(3)');
const maxNumber = Math.max.apply(null, arr)
console.log(`${maxNumber}, індекс - ${arr.indexOf(maxNumber)}`);


console.log('Кількість негативних елементів(4)');
const numbersNegative = arr.filter((el) => {
  return el < 0;
})
console.log(numbersNegative.length);


console.log('Парні позитивні єлементи(5)');
const pairPositiveNumbers = numbersPositive.filter((el, index, thisArray) => {
  if (thisArray.indexOf(el) !== index) {
    return el
  }
})

console.log(pairPositiveNumbers)

console.log('Непарні позитивні єлементи(6)');
const unpairedPositiveNumbers = numbersPositive.filter((el) => {
  if (pairPositiveNumbers.indexOf(el) < 0) {
    return el
  }
})

console.log(unpairedPositiveNumbers)


console.log('Сума парних позитивних елементів');

const sumPairElements = pairPositiveNumbers.reduce((total, el) => {
  return total + el
}, 0)

console.log(sumPairElements)

console.log('Сума парних позитивних елементів');

const sumUnpairedElements = unpairedPositiveNumbers.reduce((total, el) => {
  return total + el
}, 0)

console.log(sumUnpairedElements)


console.log('Добуток позитивних елементів(9)');
const multyPositiveNumbers = numbersPositive.reduce((total, el) => {
  return total * el
}, 1)
console.log(multyPositiveNumbers)


console.log('Найбільший елемент, остальні обнулені(10)');

const ziroElementsWithoutMax = arr.map((el) => {
  if (el !== maxNumber) {
    return el = 0;
  } else {
    return maxNumber
  }
})

console.log(ziroElementsWithoutMax);





















// const pairPositiveNumbers = numbersPositive.filter((el, index, thisArray) => {
//   return thisArray.indexOf(el) !== index;
// })

// console.log(pairPositiveNumbers)

// const unpairedPositiveNumbers = 0

// for (let i = 0; i < numbersPositive.length; i++) {
//   numbersPositive.filter((el, index, thisArray) => {
//     return el[] === pairPositiveNumbers[i];
//   })
// }

// console.log(unpairedPositiveNumbers)
