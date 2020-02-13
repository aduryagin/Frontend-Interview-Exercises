// const inBetween = (min, max) => (item) => {
//   console.log(item)

//   return item >= min && item <= max
// }

// const inArray = arr => item => {
//   return arr.includes(item)
// }

// /* .. ваш код для inBetween и inArray */
// const arr = [1, 2, 3, 4, 5, 6, 7]

// console.log(arr.filter(inBetween(3, 6))) // 3,4,5,6

// console.log(arr.filter(inArray([1, 2, 10]))) // 1,2

// const users = [
//   { name: 'John', age: 20, surname: 'Johnson' },
//   { name: 'Pete', age: 18, surname: 'Peterson' },
//   { name: 'Ann', age: 19, surname: 'Hathaway' }
// ]

// const byField = field => (a, b) => {
//   if (a[field] < b[field]) return -1
//   if (a[field] > b[field]) return 1
//   return 0
// }

// console.log(users.sort(byField('name')))
// console.log(users.sort(byField('age')))

function makeArmy () {
  const shooters = []

  let i = 0
  while (i < 10) {
    const number = i
    const shooter = function () { // функция shooter
      console.log(number) // должна выводить порядковый номер
    }
    shooters.push(shooter)
    i++
  }

  return shooters
}

const army = makeArmy()

army[0]() // у 0-го стрелка будет номер 10
army[5]() // и у 5-го стрелка тоже будет номер 10
