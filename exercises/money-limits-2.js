// 1. Реализовать функцию getMoney для банкомата, выдающего купюры.
// На вход - сумма, на выходе объект с количеством купюр по каждому номиналу.
// При этом банкомат должен выдать минимальное количество банкнот.
// Доступные номиналы: 50, 100, 500, 1000, 5000 р

// Пример: getMoney(6200) // return {5000: 1, 1000: 1, 500: 0, 100: 2, 50: 0}

// 2. На вход добавляется объект с текущим количеством купюр в банкомате

// Пример: getMoney(6200, {5000:0, 1000:7, 100:5}) // return {5000: 0, 1000: 6, 100: 2}
// P.S. не забыть модифицировать объект с номиналами.

const getMoneySimple = (money) => {
  if (money % 50 !== 0) return 'Тебе здесь не рады'

  const nominals = [5000, 1000, 500, 100, 50]

  return nominals.reduce((acc, current) => ({
    ...acc,
    all: acc.all % current,
    [current]: Math.floor(acc.all / current)
  }), { all: money })
}

const bankLimits = { 5000: 0, 1000: 7, 100: 5 }

const getMoneyLimits = (money, limits) => {
  const nominals = { 5000: 5000, 1000: 1000, 500: 500, 100: 100, 50: 50 }
  const sumInBank = Object.keys(nominals).reduce((acc, current) => {
    if (limits[current]) return acc + limits[current] * current
    return acc
  }, 0)

  if (sumInBank < money) throw new Error('Сумма слишком большая')

  const getMoneyNominals = Object.values(nominals).reverse().reduce((acc, current) => {
    const currentNominalLimit = limits[current.toString()]
    const currentNominalLimitValue = currentNominalLimit * nominals[current.toString()]

    const getMaxSumWithCurrentNominal = () => {
      const neededPapers = Math.floor(acc.rest / current)
      if (neededPapers <= currentNominalLimit) {
        return {
          rest: acc.rest % current,
          [current]: neededPapers
        }
      }

      return {
        rest: acc.rest - currentNominalLimitValue,
        [current]: currentNominalLimit
      }
    }

    if (currentNominalLimit) {
      return {
        ...acc,
        ...getMaxSumWithCurrentNominal()
      }
    }
    return acc
  }, { rest: money })

  if (getMoneyNominals.rest) throw new Error('Невозможно выдать эту сумму полностью')

  for (const nominal in getMoneyNominals) {
    if (bankLimits[nominal]) {
      bankLimits[nominal] = bankLimits[nominal] - getMoneyNominals[nominal]
    }
  }

  return getMoneyNominals
}

console.log(getMoneyLimits(3400, bankLimits))
console.log(getMoneyLimits(1100, bankLimits))
console.log(getMoneyLimits(100, bankLimits))
