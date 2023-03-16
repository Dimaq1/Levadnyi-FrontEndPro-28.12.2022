const wrap = document.querySelector('.wrap')
const button1 = document.querySelector('.btn1')
const button2 = document.querySelector('.btn2')


let div = document.createElement('div')
div.innerHTML = prompt('Text1:')
div.className = 'text'

button1.addEventListener('click', function () {
  wrap.appendChild(div)
  wrap.appendChild(div2)
  wrap.appendChild(div3)

})

button2.addEventListener('click', function () {
  if (wrap.lastChild !== button1 && wrap.lastChild !== button2) {
    wrap.removeChild(wrap.lastChild)
  }
})

div.addEventListener('click', function () {
  div.classList.toggle('active')
})



