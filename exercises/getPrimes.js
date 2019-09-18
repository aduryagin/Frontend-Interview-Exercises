/**
 * Написать функцию getPrimes(n)
 * Должна вернуть простые числа от 2 до n;
 */

function getPrimes (n) {
  const primes = []

  if (n < 2) return 'warn'

  for (let i = 2; i <= n; i++) {
    let isPrime = true

    for (let q = 2; q <= i; q++) {
      if (i !== q && i % q === 0) {
        isPrime = false
        break
      }
    }

    if (isPrime) {
      primes.push(i)
    }
  }

  return primes
}

console.log(getPrimes(5))
