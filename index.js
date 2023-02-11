//1

let arr = ['string', 4, 7, true, null, 6, 'number', 10, '', false, 33]
console.log(arr);

function meanNum(array) {
  let numbers = array.filter((value) => {
    return typeof value === 'number'
  })
  let sum = numbers.reduce((total, el) => {
    return total + el
  }, 0)
  return `Середнє арифметичне = ${sum / numbers.length}`
}

console.log(meanNum(arr))


//2

function doMath(x, znak, y) {
  x = +prompt('Введіть перше число')
  znak = prompt('Введіть знак')
  y = +prompt('Введіть перше число')

  if (znak === '+') {
    return alert(`${x} + ${y} = ${x + y}`)
  } else if (znak === '-') {
    return alert(`${x} - ${y} = ${x - y}`)
  } else if (znak === '*') {
    return alert(`${x} * ${y} = ${x * y}`)
  } else if (znak === '/') {
    return alert(`${x} / ${y} = ${x / y}`)
  } else if (znak === '%') {
    return alert(`${x}% від ${y} = ${x / 100 * y}`)
  } else if (znak === '^') {
    return alert(`${x} ^ ${y} = ${x ** y}`)
  }
}

doMath()

//3

function arrTwoDimensional() {
  let arrOwner = new Array(+prompt('Введіть довжину основного масиву'))
  let arrNested = +prompt('Введіть довжину внутрішнього масиву')
  for (let i = 0; i < arrOwner.length; i++) {
    arrOwner[i] = new Array(arrNested)
    for (let j = 0; j < arrNested; j++) {
      arrOwner[i][j] = prompt('Введіть єлемент внутрішнього масиву')
    }
  }
  return console.log(arrOwner)
}

arrTwoDimensional()


//4

function extraCharacters(str, arr) {
  str = prompt('Введіть рядок')
  arr = prompt('Введіть через кому символи які треба видалити')
  arr = arr.split(', ')
  for (let i = 0; i < str.length; i++) {
    str = str.replaceAll(arr[i], '')
  }
  return str
}

console.log(extraCharacters());
