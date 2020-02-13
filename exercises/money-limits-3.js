// 1. Реализовать функцию getMoney для банкомата, выдающего купюры.
// На вход - сумма, на выходе объект с количеством купюр по каждому номиналу.
// При этом банкомат должен выдать минимальное количество банкнот.
// Доступные номиналы: 50, 100, 500, 1000, 5000 р

// Пример: getMoney(6200) // return {5000: 1, 1000: 1, 500: 0, 100: 2, 50: 0}

// 2. На вход добавляется объект с текущим количеством купюр в банкомате

// Пример: getMoney(6200, {5000:0, 1000:7, 100:5}) // return {5000: 0, 1000: 6, 100: 2}
// P.S. не забыть модифицировать объект с номиналами.

function getMoney(amount, limits = {}) {
  let fiveThousands, thousands, fiveHundreeds, hundreeds, fiveteens
  let rest = amount

  function getSomeMoney(rest, bill, limit) {
    let valToReturn = Math.floor(rest / bill)

    while (valToReturn > limit) {
      valToReturn = valToReturn - 1
    }

    const restToReturn = rest - valToReturn * bill

    return [valToReturn, restToReturn]
  }

  [fiveThousands, rest] = getSomeMoney(rest, 5000, limits['5000']);
  [thousands, rest] = getSomeMoney(rest, 1000, limits['1000']);
  [fiveHundreeds, rest] = getSomeMoney(rest, 500, limits['500']);
  [hundreeds, rest] = getSomeMoney(rest, 100, limits['100']);
  [fiveteens, rest] = getSomeMoney(rest, 50, limits['50'])

  if (rest) throw new Error('')

  return {
    5000: fiveThousands,
    1000: thousands,
    500: fiveHundreeds,
    100: hundreeds,
    50: fiveteens
  }
}
