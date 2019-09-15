/*
var limits = {
  5000: 4,
  1000: 5,
  500: 2,
  100: 5,
  50: 100,
  30: 23
};
function getMoney(amount, limits) {
   // нужно вернуть набор денег и обновленные лимиты
   // {
   //   res: {
   //     5000: 1,
   //     1000: 2,
   //     ....
   //     50: 5
   //   } || "warn" (если вернуть деньги невозможно)
   //  limits: // объект лимитов той же структуры с обновленными    данными
   // }
}
*/

export const LIMITS = {
  5000: 10,
  1000: 10,
  500: 10,
  100: 10,
  50: 10,
  30: 10
}

export function getMoney (money, limits) {
  function findMoney (innerMoney, innerLimits = { ...limits }, result = {}) {
    const nominals = Object.keys(innerLimits)
    const sortedNominals = nominals.sort((a, b) => b - a)
    const bestNominal = sortedNominals.find((sortedNominal) => {
      const nominal = sortedNominal
      return (
        innerMoney >= nominal &&
        Math.floor(innerMoney / nominal) <= innerLimits[nominal]
      )
    })

    if (bestNominal) {
      const count = Math.floor(innerMoney / bestNominal)
      result[bestNominal] = count
      innerLimits[bestNominal] -= count
      innerMoney -= count * bestNominal

      if (innerMoney) return findMoney(innerMoney, innerLimits, result)
    }

    return { money: innerMoney, limits: innerLimits, result }
  }

  const data = findMoney(money)
  let resultMoney = data.money
  let resultData = data.result
  let resultLimits = data.limits

  while (
    resultMoney &&
    Object.keys(resultLimits).length &&
    Object.keys(resultData).length
  ) {
    const newLimits = Object.keys(resultLimits).reduce(
      (accum, item) => ({ ...accum, [item]: limits[item] }),
      {}
    )
    const sortedNominals = Object.keys(resultData).sort((a, b) => b - a)
    delete newLimits[sortedNominals[sortedNominals.length - 1]]
    const data = findMoney(money, { ...newLimits })
    resultMoney = data.money
    resultData = data.result
    resultLimits = data.limits
  }

  if (!Object.keys(resultData).length) return 'warn'

  return { resultData, resultLimits: { ...limits, ...resultLimits } }
}
