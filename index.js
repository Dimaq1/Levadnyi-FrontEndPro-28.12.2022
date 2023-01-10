let Action = prompt('What do you want to do?' + ' (add, sub, mult, div)')
const NUMBER1 = +prompt('Name the first number')
const NUMBER2 = +prompt('Name the second number')

if ((Action === 'add') || (Action === '+')) {
  alert(`${NUMBER1} + ${NUMBER2} = ${NUMBER1 + NUMBER2}`)
} else if ((Action === 'sub') || (Action === '-')) {
  alert(`${NUMBER1} - ${NUMBER2} = ${NUMBER1 - NUMBER2}`)
} else if ((Action === 'mult') || (Action === '*')) {
  alert(`${NUMBER1} * ${NUMBER2} = ${NUMBER1 * NUMBER2}`)
} else if ((Action === 'div') || (Action === '/')) {
  alert(`${NUMBER1} / ${NUMBER2} = ${NUMBER1 / NUMBER2}`)
}