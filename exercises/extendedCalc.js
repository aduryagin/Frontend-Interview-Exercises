function Calculator () {
  this.operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  }

  this.calculate = function (str) {
    const operationParts = str.split(' ')
    const a = Number(operationParts[0])
    const b = Number(operationParts[2])
    const operand = operationParts[1]

    const knownOperation = this.operations[operand]

    try {
      return knownOperation(a, b)
    } catch (error) {
      new Error('unknow operations, try to use addMethod method')
    }
  }

  this.addMethod = function (operand, func) {
    const knownOperation = this.operations[operand]
    if (knownOperation) return new Error('this method already exist')
    else {
      this.operations = { ...this.operations, [operand]: func }
    }
  }
}

const calc = new Calculator()

const sum = calc.calculate('3 - 7')
console.log(calc.calculate('3 ** 7'))
calc.addMethod('**', (a, b) => a ** b)
const pow = calc.calculate('3 ** 7')

console.log(sum)
console.log(pow)

console.log(calc)
