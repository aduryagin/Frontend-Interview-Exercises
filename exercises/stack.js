/**
 * flatten.
 *
 * Дан массив, в котором могут храниться любые типы данных.
 * Нужно реализовать функцию, которая разворачивает вложенные массивы в исходный массив.
 * Данные остальных типов должны остаться без изменений.
 * Решение должно учитывать любую вложенность элементов (т.е. не должно содержать рекурсивные вызовы)
 */

// console.log(flatten([1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }]));
// возвращает
//      [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]

const list = [1, 'any [complex] string', null, function () {}, [1, 2, [3, '4'], ['asd', ['ololo', ['lalalalla']]], 0], [], { a: 1 }]

const stack = [...list.reverse()]
const result = []
while (stack.length) {
  const item = stack.pop()
  if (!Array.isArray(item)) {
    result.push(item)
  } else {
    if (item.length !== 0) {
      for (let i = item.length - 1; i >= 0; i--) {
        stack.push(item[i])
      }
    }
  }
}

console.log(result)
