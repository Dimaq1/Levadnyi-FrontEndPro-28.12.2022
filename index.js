const products = {
  tShirts: [
    {
      name: 'максі',
      price: 320,
      description: 'Це футболка відмінно підходить для прогулянок у вихідні на природу з родиною або похід в гості. Вона є середнім варіантом між простацькою футболкою і діловою сорочкою завдяки горловині як у сорочки і вертикальним вирізом висотою всього близько 10 см (схожа на футболку поло, але без ґудзиків)'
    },
    {
      name: 'класична',
      price: 350,
      description: 'Напевно, такі моделі є в гардеробі у багатьох чоловіків. Класика підходить практично до будь-якого одягу і на будь-який вихід (на побачення, в гості, на прогулянку, на шашлики на природу). Можна надіти і з джинсами, і з шортами. Прекрасна класика.'
    },
    {
      name: 'кроп-топ',
      price: 400,
      description: 'коротка футболка з відкритим пупком для самих струнких і сміливих.'
    },
    {
      name: 'боді',
      price: 200,
      description: 'майка або футболка різного типу з низом як у купальника. Застібка внизу може бути на кнопках або на липучках, а може бути і взагалі без застібки знизу.'
    },
    {
      name: 'двійна',
      price: 240,
      description: 'має вигляд наче була надіта спочатку одна футболка з довгими рукавами, а поверх неї — інша футболка (часто іншого кольору, але яка поєднується з колірною гамою першої) з короткими рукавами. Такі футболки подобається носити і дівчатам, і хлопцям. Вони завжди стильні і модні.'
    },
    {
      name: 'приталенна',
      price: 340,
      description: 'приталена футболка з круглим вирізом з тонкого трикотажу котону пеньє ідеально підійде для теплої пори року. Цю універсальну річ можна надіти в спортзал, виріб добре «дихає», має гігроскопічність. Багато представників чоловічої статі ніколи не розлучаються з подібними виробами, тому в їх гардеробі можна нарахувати більше десятка різного кольору і фасону футболок. '
    },
    {
      name: 'пряма',
      price: 500,
      description: 'футболка з коміром сорочкового типу і невеликим вирізом на ґудзиках трикотажу котону пеньє ідеально підійде для теплої пори року'
    },
    {
      name: 'оверсайз',
      price: 200,
      description: 'футболка з коміром сорочкового типу і невеликим вирізом на ґудзиках. Тканина в такому виробі повинна прекрасно вбирати вологу'
    },
    {
      name: 'поло',
      price: 210,
      description: 'футболка з коміром сорочкового типу і невеликим вирізом на ґудзиках має вигляд наче була надіта спочатку одна футболка з довгими рукавами  '
    },
    {
      name: 'спортивна',
      price: 300,
      description: 'футболка для занять спортом. Тканина в такому виробі повинна прекрасно вбирати вологу. Зазвичай крій таких футболок роблять облягаючим, щоб було зручно і ефективно займатися спортом або фітнесом.'
    },
  ],
  pants: [
    {
      name: 'Карго',
      price: 700,
      description: 'Прототипом цих штанів була проста військова форма. Зараз ці штани досить популярні серед модників. Їх комбінують з кедами, светрами і поло.Моветоном вважаються карго камуфляжного забарвлення або елементами стилю мілітарі.'
    },
    {
      name: 'Чінос',
      price: 600,
      description: 'Універсальні штани, поєднуються як з футболками, так і з піджаками. Виробники в основному шиють їх в світлих тонах, тому вони погано поєднуються з чорним взуттям. Чиносы краще комбінувати з коричневими туфлями або сандалями на товстій підошві.'
    },
    {
      name: 'Слакси',
      price: 700,
      description: 'Такі штани відмінно підходять як молодим хлопцям, так і чоловікам. Їх шиють з бавовни, тому вони досить комфортні.Така модель штанів підійде як для прогулянки в парку, так і для походу в кіно. До того ж їх перевагою перед іншими є можливість комбінувати їх з будь взуттям.'
    },
    {
      name: 'Вельветові',
      price: 800,
      description: 'Такі штани відмінно підійдуть для щоденної шкарпетки восени, так як сам матеріал призначений для холодних періодів.Вони гармонійно поєднуються з картатими сорочками і шкіряною або замшевою взуттям.'
    },
    {
      name: 'Хакі і камуфляж',
      price: 750,
      description: 'Такі штани – альтернатива звичним для всіх джинсів. Їх є 2 види брюк хакі: з защипами або без.Поєднують такі штани з кросівками, черевиками, футболками, светрами і сорочками.'
    },
    {
      name: 'Джоггеры',
      price: 500,
      description: 'Такі штани – щось середнє між класичною моделлю штанів і спортивними штанами. Їх шиють завужені і обтягують ноги. Вони чимось нагадують штани від військової форми.Такі брюки відмінно підійдуть для прогулянки в парку або для поїздки на шашлики з сім’єю.'
    },
    {
      name: 'Галіфе',
      price: 900,
      description: 'Такі штани віддають перевагу любителі комфорту. Вони пошиті широкими в області стегон, але штанини поступово звужуються в напрямку до щиколоткам.'
    },
    {
      name: 'Кльош',
      price: 800,
      description: 'Багато хто вважає, що цей елемент гардеробу – пережиток минулого і актуальні вони були тільки в часи стиляг. Насправді, брюки кльош популярні серед чоловіків, які хочуть приховати зайву повноту і об’єм в бедрах. Також вони допомагають виглядати вище і стрункіше.'
    },
    {
      name: 'Завужені',
      price: 700,
      description: 'Така модель штанів була популярна в Америці у 90-х роках. В кінці 20 століття їх комбінували з сорочками і піджаками.'
    },
    {
      name: 'Хулігани',
      price: 600,
      description: 'Модель цих штанів передбачає широкий фасон і бічні кишені, розташовані косо. Вони виконані з бавовни або джинса і користуються популярністю у спортсменів, зокрема футболістів. Вони не сковують рухів і підходять для активних чоловіків.'
    },
  ],
  jackets: [
    {
      name: 'Стьобана куртка',
      price: 2300,
      description: 'Одяг отримала таку назву тому, що головна відмінність куртки в тому, що матеріал повинен бути прострочений. Сама ж тканина може бути різноманітною – вовна і шкіра, і трикотаж.'
    },
    {
      name: 'Куртка-парку',
      price: 1450,
      description: 'Цей вид куртки в наш час набирає величезну популярність. Його полюбили як жінки, так і чоловіки. Куртка-парку – це верхній одяг з простим кроєм і аскетичним дизайном. '
    },
    {
      name: 'Куртка-косуха',
      price: 900,
      description: 'Одна з моделей курток, яка є відмінною рисою байкерів. Таку назву вона отримала через косою блискавки-застібки, а також вона має звужений силует.'
    },
    {
      name: 'Вітровка',
      price: 1900,
      description: 'Куртка-вітрівка – дуже практичний одяг, яка підійде будь-якій людині у будь-якій ситуації.'
    },
    {
      name: 'Сучасна куртка',
      price: 2360,
      description: 'У наш час набирає популярність одяг з мембрани. Це нововведення не обійшло стороною і куртки. Одяг зручна і дуже легка.'
    },
    {
      name: 'Кожанка',
      price: 1500,
      description: 'Класика актуальна завжди. Тому, якщо ви по натурі консерватор, купіть щось чорне й шкіряне.'
    },
    {
      name: 'Дуті куртки',
      price: 1000,
      description: 'Фото модного весняний жіночої куртки такого виду, ви можете побачити вище.'
    },
    {
      name: 'Бомбер',
      price: 2100,
      description: 'Куртка вільного покрою, яка щільно фіксується на поясі і манжетах з допомогою гумок, звела модниць з розуму. Подібні моделі популярні вже третій рік, хоча і до цього вони користувалися попитом, правда, у чоловіків, а не жінок.'
    },
    {
      name: 'Зимовий дутик',
      price: 2500,
      description: 'Найпопулярнішою жіночим одягом залишиться зимовий дутик — пішли в минуле часи, коли жінки хотіли виглядати елегантно.'
    },
    {
      name: 'З капюшоном',
      price: 2000,
      description: 'Куртки з капюшоном будуть корисні завжди — так можна і зовсім забути про виборі шапки. Це самі жіночні і елегантні моделі для зими, особливо якщо капюшон оздоблений благородним хутром.'
    },
  ],
  sweaters: [
    {
      name: 'Светр',
      price: 300,
      description: 'На початку минулого століття він використовувався для схуднення! Лікарі радили людям робити вправи в светрі, щоб більше потіти і, на їхню думку, заодно і худнути. Звідси і пішла назва — від англійського to sweat «потіти».'
    },
    {
      name: 'Світшот',
      price: 450,
      description: 'варіація толстовки, тобто звичайна кофта без блискавки і гудзиків, без капюшона, але виконана з легкого трикотажу. Світшоти прийшов до нас зі спорту, тому його головне призначення — гріти, але при цьому не сковувати рухи.'
    },
    {
      name: 'Довга кофта',
      price: 500,
      description: 'знахідка і рятівниця для повних жінок. З її допомогою можна легко візуально витягнути силует і сховати недоліки фігури.'
    },
    {
      name: 'Кардиган',
      price: 1100,
      description: 'Свою назву одяг отримала на честь творця Графа Кардігана. Саме він придумав утеплену модель жакета під мундир з гудзиками.'
    },
    {
      name: 'Худі',
      price: 700,
      description: 'Дана різновид одягу зовсім не має відношення до слова «худнути», хоча підібрана правильно кофта додає стрункості.'
    },
    {
      name: 'Толстовка',
      price: 600,
      description: 'Представниця спортивного одягу отримала свою назву… Немає. Не тому, що товста.'
    },
    {
      name: 'Туніка',
      price: 950,
      description: 'Модель прийшла до нас із Стародавнього Риму. Являє собою вільну одяг без талії завдовжки до стегон.'
    },
    {
      name: 'Пончо',
      price: 900,
      description: 'Це кофта–накидка. Прийшла до нас із Латинської Америки, де була улюбленою одягом індіанців.'
    },
    {
      name: 'Пуловер',
      price: 800,
      description: 'це джемпер з V-подібною горловиною.'
    },
    {
      name: 'Болеро',
      price: 1000,
      description: 'це коротенька кофта з гудзиками, на шнурівці або без застібок взагалі. Це одяг для дівчаток.'
    },
  ],
  hats: [
    {
      name: 'З помпоном вовняна',
      price: 150,
      description: 'На піку популярності в чоловічій моді цього сезону – в’язана шапка з помпоном. Виконується машиною або вручну, у різних техніках, з цікавими візерунками, поздовжніми і поперечними смугами.'
    },
    {
      name: 'Бере',
      price: 250,
      description: 'Берети вибирають мужні і креативно мислячі чоловіки, які бажають виділитися з безликої юрби.'
    },
    {
      name: 'Кепі',
      price: 220,
      description: 'Кепі шиються в різних варіантах і підбираються для будь-якого часу року. Фасони і моделі можуть бути різними і відрізнятися кроєм і забарвленням один від одного. Такий головний убір прекрасно підійде до класичного крою пальто чи куртки зі шкіри.'
    },
    {
      name: 'Хутряна',
      price: 200,
      description: 'Крій шапок з хутра зазвичай дозволяє закривати вуха.'
    },
    {
      name: 'Будьонівка',
      price: 300,
      description: 'Шолом з загостреною верхівкою, що закриває вуха, частина шиї і лоб'
    },
    {
      name: 'Шапка-каптур',
      price: 80,
      description: 'Ручна в’язка знову в моді.'
    },
    {
      name: 'Федора',
      price: 200,
      description: ' капелюх має три вм’ятини на тульї. Так зручно піднімати її, вітаючи знайомих.'
    },
    {
      name: 'Хомбург',
      price: 150,
      description: ' має відмінні риси: загнуті поля, одну поздовжню улоговинку на тульї, стрічку по всій окружності голови.'
    },
    {
      name: 'Спортивна',
      price: 90,
      description: 'Якісна та дуже зручна'
    },
    {
      name: 'Ділова',
      price: 100,
      description: 'Для важливих перемовин'
    },
  ],
}

const wrapp = document.querySelector('.wrapp')
const categories = document.querySelector('.categories')
const listProducts = document.querySelector('.list-products')
const productDescription = document.querySelector('.product-description')
const productPrice = document.querySelector('.product-price')
const productText = document.querySelector('.product-text')
const buyButton = document.querySelector('.buy-button')
const popUp = document.querySelector('.pop-up')
const popUpBg = document.querySelector('.pop-up-bg')
const btnPopUp = document.querySelector('.btn-pop-up')
const popUpError = document.querySelector('.pop-up-error')
const btnPopUpError = document.querySelector('.pop-up-error-btn')
const accept = document.querySelector('.accept')
const btnAccept = document.querySelector('.btn-accept')


categories.addEventListener('click', (e) => {
  const target = e.target
  if (target === e.currentTarget) return

  productDescription.style.display = 'none'
  listProducts.style.display = 'block'

  for (prop in products) {
    const productArray = products[prop]
    const productArrayName = prop
    if (productArrayName === target.dataset.action) {
      if (listProducts.children.length > 0) {
        while (listProducts.firstChild) {
          listProducts.removeChild(listProducts.firstChild)
        }
      }
      productArray.filter((el) => {
        const li = document.createElement('li')
        li.className = 'list-item'
        li.innerHTML = el.name
        return listProducts.append(li);
      })
    }
  }
})

listProducts.addEventListener('click', (e) => {
  const target = e.target
  if (target === e.currentTarget) return
  productDescription.style.display = 'block'

  for (prop in products) {
    const productArray = products[prop]
    productArray.filter((el) => {
      if (target.innerText === el.name) {
        productPrice.innerText = `Ціна: ${el.price}грн`
        productText.innerText = `Опис: ${el.description}`
      }
    })
  }
})

function defaultState() {
  popUp.style.display = 'none'
  popUpBg.style.display = 'none'
}

buyButton.addEventListener('click', () => {
  popUp.style.display = 'block'
  popUpBg.style.display = 'block'
  productDescription.style.display = 'none'
  listProducts.style.display = 'none'
})

btnPopUp.addEventListener('click', () => {
  defaultState()
})

const form = document.querySelector('#order-form')
const formName = form.name
const formLastname = form.lastname
const formSurname = form.surname
const formCity = document.querySelector('#city')
const formPost = form.post
const formPayment = form.payment
const formAmount = form.amount
const formComment = form.comment
const formBtnSubmit = document.querySelector('#form-btn-submit')

function validateLongLength(value, length) {
  return value.length >= length
}

function validateForValue(value) {
  return !!value.trim()
}

function notNumber(value) {
  return value ? isNaN(value) : false
}

const inputs = [
  {
    name: 'name',
    inputEl: formName,
    minLengthValue: 2,
    validateRules: [validateLongLength, notNumber, validateForValue],
    isValid: false,
    needValid: true,
  },
  {
    name: 'lastname',
    inputEl: formLastname,
    minLengthValue: 3,
    validateRules: [validateLongLength, notNumber, validateForValue],
    isValid: false,
    needValid: true,
  },
  {
    name: 'surname',
    inputEl: formSurname,
    minLengthValue: 4,
    validateRules: [validateLongLength, notNumber, validateForValue],
    isValid: false,
    needValid: true,
  },
  {
    name: 'city',
    inputEl: formCity,
    minLengthValue: null,
    validateRules: [],
    isValid: false,
    needValid: false,
  },
  {
    name: 'post',
    inputEl: formPost,
    minLengthValue: null,
    validateRules: [],
    isValid: false,
    needValid: false,
  },
  {
    name: 'payment',
    inputEl: formPayment,
    minLengthValue: null,
    validateRules: [],
    isValid: false,
    needValid: false,
  },
  {
    name: 'amount',
    inputEl: formAmount,
    minLengthValue: null,
    validateRules: [],
    isValid: false,
    needValid: false,
  },
  {
    name: 'comment',
    inputEl: formComment,
    minLengthValue: null,
    validateRules: [],
    isValid: false,
    needValid: false,
  },
]

formBtnSubmit.addEventListener('click', (e) => {
  e.preventDefault()

  console.dir(formCity.value);

  const validatedArr = inputs.map((el) => {

    const isAllValid = el.validateRules.map((func) => {
      return func(el.inputEl.value, el.minLengthValue)
    })
    return el.isValid = isAllValid.every(el => el === true)

  })
  if (validatedArr.every(el => el === true)) {
    const data = {}
    inputs.forEach((input) => {
      data[input.name] = input.inputEl.value
    })
    sendData(data)
  } else {
    popUpError.style.display = 'block'
    popUp.style.zIndex = '0'
  }
})

function sendData(data) {
  const div = document.createElement('div')
  div.innerHTML = `Замовлення на ім'я: ${data.lastname + ' ' + data.name + ' ' + data.surname} <br> Кількість товару: ${data.amount}<br>Доставка: м.${data.city}, відділення ${data.post}<br>Спосіб оплати: ${data.payment}\n `
  div.className = 'info'
  accept.prepend(div)
  accept.style.display = 'block'
  popUp.style.display = 'none'
  btnAccept.addEventListener('click', () => {
    defaultState()
    div.innerHTML = ''
    accept.style.display = 'none'
  })
}

btnPopUpError.addEventListener('click', () => {
  popUp.style.zIndex = '1'
  popUpError.style.display = 'none'
})



































