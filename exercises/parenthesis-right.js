/*
  Написать функцию, проверяющую правильно расставленные скобки;
  check("{()}[]") // true
  check("{[}]") // false
*/

function check (parenthesis) {
  const mapParenthesis = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  const stack = []
  let result = true

  for (let i = 0; i < parenthesis.length; i++) {
    if (mapParenthesis[parenthesis[i]]) {
      stack.push(parenthesis[i])
    } else {
      const item = stack.pop()

      if (mapParenthesis[item] !== parenthesis[i]) {
        result = false
        break
      }
    }
  }

  return result
}

console.log(check('{()}[]'))
console.log(check('{[}]'))
