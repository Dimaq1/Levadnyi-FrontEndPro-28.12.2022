// Создать блок в нем 2 кнопки в html
// Добавить к ним какие то стили чтоб это норм смотрелось. Без излишеств.
// При клике на одну кнопку внизу добавлять div  c каким то текстом.
// При клике на добавленный див менять ему background
// При на вторую кнопку удалять последний добавленный div
// Именно удалять , а не скрывать


const wrap = document.querySelector('.wrap')
const button1 = document.querySelector('.btn1')
const button2 = document.querySelector('.btn2')

let div = document.createElement('div')
div.innerHTML = prompt('Text:')
div.className = 'text'

button1.addEventListener('click', function () {
  wrap.append(div)
})

button2.addEventListener('click', function () {
  wrap.removeChild(div)
})

div.addEventListener('click', function () {
  div.classList.toggle('active')
})



