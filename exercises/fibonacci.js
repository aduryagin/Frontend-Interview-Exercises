// Написать сумму первых n чисел последовательности fibonacci с мемоизацией
// (15) => 987

function fibonacci (num, memo) {
  memo = memo || {}

  if (memo[num]) return memo[num]
  if (num <= 1) return 1

  memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
  return memo[num]
}

console.log(fibonacci(15))
