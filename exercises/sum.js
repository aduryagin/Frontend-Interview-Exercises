/**
 * Функция для суммы аргументов
 * f(1)(2)(3) => 6
 */

function sum(a) {
  let result = a

  function sum2(b) {
    result += b

    return sum2
  }

  sum2.valueOf = () => {
    return result
  }

  sum2.toString = () => {
    return result
  }

  return sum2
}

console.log(sum(1)(2)(3))
