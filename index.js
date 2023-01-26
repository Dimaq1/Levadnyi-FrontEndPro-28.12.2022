const bestCars = ['Opel', 'Mazda', 'BMW', 'Mercedes', 'Tavria', 'Honda'];
console.log(bestCars)

function removeElement(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
    }
  }
}

removeElement(bestCars, 'Tavria')
console.log(bestCars)