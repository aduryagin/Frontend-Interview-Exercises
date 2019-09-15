/*
  Дано целое число n. Требуется вывести все правильные скобочные последовательности длины 2 ⋅ n,
  упорядоченные лексикографически (см. https://ru.wikipedia.org/wiki/Лексикографический_порядок).
  В задаче используются только круглые скобки.
  Желательно получить решение, которое работает за время,
  пропорциональное общему количеству правильных скобочных последовательностей в ответе,
  и при этом использует объём памяти, пропорциональный n.
  */

function generateSeq (n) {
  function generate (n, opened = 0, closed = 0, result = '') {
    if (opened + closed === 2 * n) return result

    if (opened < n) {
      return generate(n, opened + 1, closed, `${result}(`)
    }
    if (opened > closed) {
      return generate(n, opened, closed + 1, `${result})`)
    }
  }

  function next (s) {
    let counterClose = 0
    let counterOpen = 0

    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === '(') {
        counterOpen++
        if (counterClose > counterOpen) break
      } else {
        counterClose++
      }
    }

    let newS = s.slice(0, -(counterOpen + counterClose))
    if (!newS) return false

    newS += ')'

    for (let i = 0; i < counterOpen; i++) {
      newS += '('
    }

    for (let q = 0; q < counterClose - 1; q++) {
      newS += ')'
    }

    return newS
  }

  let first = generate(n)
  console.log(first)

  while ((first = next(first))) {
    console.log(first)
  }
}

console.log(generateSeq(3))
