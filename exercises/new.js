/**
 * Написать реализацию new Function();
 *
 * instanceof customNew(Function) === Function
 */

function customNew (func) {
  const newPrototype = Object.create(func.prototype)
  func.apply(newPrototype)

  return newPrototype
}

function Test () {}

console.log(customNew(Test) instanceof Test)
