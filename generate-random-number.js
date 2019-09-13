/*
  Написать функцию для генерации числа от 0 до 1.
  Потом написать функцию для генерации числа от 0 до 3 с равной вероятностью с использованием первой функции.
*/

function generateFromZeroToOne() {
  return Math.round(Math.random());
}

function generateFromZeroToThree() {
  const first = generateFromZeroToOne();
  const second = generateFromZeroToOne();

  return parseInt(`${first}${second}`, 2);
}

console.log(generateFromZeroToThree());
