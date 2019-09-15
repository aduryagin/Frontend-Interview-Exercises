/**
 * Нужно написать функцию, которая проверяет, являются ли две строки анаграммами,
 * причем регистр букв не имеет значения.
 * Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
 *
 * anagram('finder', 'Friend') --> true
 * anagram('hello', 'bye') --> false
 */

function isAnagram (string, secondString) {
  const getRawString = x => x.replace(/[^a-zA-Zа-яА-Я]/g, '').toLowerCase()
  const rawString = getRawString(string)
  const rawSecondString = getRawString(secondString)

  if (rawString.length !== rawSecondString.length) return false

  const stringArr = rawString.split('')
  const secondStringArr = rawSecondString.split('')

  for (let i = 0; i < stringArr.length; i++) {
    const index = secondStringArr.indexOf(stringArr[i])

    if (index === -1) break
    else secondStringArr.splice(index, 1)
  }

  return secondStringArr.length === 0
}

console.log(isAnagram('finder', 'Friend'))
console.log(isAnagram('aabbcc', 'abbbcc'))
