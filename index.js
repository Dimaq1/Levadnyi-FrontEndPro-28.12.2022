const userName = prompt("Як тебе звати?");
const userAge = +prompt("Скільки тобі років?");
const smoke = confirm("Ти куриш?");

if (userAge => 18) {
  if (smoke) {
    alert(`Привіт ${userName}, що ж, ти сам обрав цей шлях..`);
    console.log(`Привіт ${userName}, що ж, ти сам обрав цей шлях..`);
  } else {
    alert(`Привіт ${userName}, чудово! Ти мабуть ще й спортом займаєшся!`);
    console.log(`Привіт ${userName}, чудово! Ти мабуть ще й спортом займаєшся!`);
  }
} else {
  if (smoke) {
    alert(`Привіт ${userName}! А батьки знають про це?`);
    console.log(`Привіт ${userName}! А батьки знають про це?`);
  } else {
    alert(`Привіт ${userName}! Правильно, зараз головне добре вчитися!`);
    console.log(`Привіт ${userName}! Правильно, зараз головне добре вчитися!`);
  }
}