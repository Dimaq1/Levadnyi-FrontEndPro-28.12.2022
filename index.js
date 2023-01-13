let year = +prompt('Вкажіть ваш рік народження', '2000');
if (year === null || year === 0 || isNaN(year) === true) {
  year = 'Шкода, що Ви не захотіли ввести свій рік народження.';
  alert(year);
} else {
  year = `Ти народився в ${year} році.`;
}

let city = prompt('В якому місті ви живете?', 'Київ');
if (city === null || isNaN(city) === false) {
  city = 'Шкода, що Ви не захотіли ввести своє місто в якому живете.';
  alert(city);
} else if (city === 'Київ' || city === 'Вашингтон' || city === 'Лондон') {
  city = `Ти живеш у столиці ${city}.`;
} else {
  city = `Ти живеш у місті ${city}.`;
}

let kindSport = prompt('Який ваш улюблений вид спорту?', 'Футбол');
if (kindSport === 'Футбол') {
  kindSport = 'Круто! Хочеш стати Леонелем Мессі?';
} else if (kindSport === 'Баскетбол') {
  kindSport = 'Круто! Хочеш стати Майклом Джорданом?';
} else if (kindSport === 'Бокс') {
  kindSport = 'Круто! Хочеш стати Олександром Усиком?';
} else if (kindSport === null || isNaN(kindSport) === false) {
  kindSport = 'Шкода, що Ви не захотіли ввести свій улюблений вид спорту.';
  alert(kindSport);
} else {
  kindSport = `${kindSport} - це крутий вид спорту. Так тримати!`;
}

alert(`${year}\n${city}\n${kindSport}`);

