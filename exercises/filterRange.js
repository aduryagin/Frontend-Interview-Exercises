'use strict'
function filterRange (arr, a, b) {
  return arr.filter(item => {
    const cond = item > a && item < b

    return cond && item
  })
}

// console.log(filterRange([1, 4, 7, 24, 33, 54, 7, 6], 8, 34))

const arr = [1, 4, 7, 24, 33, 54, 7, 6]

function filterRangeInPlace (arr, a, b) {
  const forDelete = filterRange(arr, a, b)

  return forDelete.forEach((item) => {
    const indexForDelete = arr.findIndex(x => x === item)
    arr.splice(indexForDelete, 1)
  })
}

filterRangeInPlace(arr, 8, 34) // удалены числа вне диапазона 1..4

console.log(arr)

function opana () {
  console.log(this)
}

opana()
