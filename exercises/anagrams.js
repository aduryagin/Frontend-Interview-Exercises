/**
 * Нужно написать функцию, которая проверяет, являются ли две строки анаграммами,
 * причем регистр букв не имеет значения.
 * Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
 *
 * anagram('finder', 'Friend') --> true
 * anagram('hello', 'bye') --> false
 */

function isAnagram (string, secondString) {
  const getRawStringArr = x =>
    x
      .replace(/[^a-zA-Zа-яА-Я]/g, '')
      .toLowerCase()
      .split('')
  const rawStringArr = getRawStringArr(string)
  const rawSecondStringArr = getRawStringArr(secondString)

  if (rawStringArr.length !== rawSecondStringArr.length) return false

  for (let i = 0; i < rawStringArr.length; i++) {
    const index = rawSecondStringArr.indexOf(rawStringArr[i])

    if (index === -1) break
    else rawSecondStringArr.splice(index, 1)
  }

  return rawSecondStringArr.length === 0
}

console.log(isAnagram('finder', 'Friend'))
console.log(isAnagram('aabbcc', 'abbbcc'))
