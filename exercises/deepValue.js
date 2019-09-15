/*
  Получить значение объекта по переданному пути в виде строки

  ({ one: { two: { fieldName: 'gotcha' } } }, 'one.two.fieldName') => 'gotcha'
*/

function getVal (project, myPath) {
  return myPath.split('.').reduce((res, prop) => res[prop], project)
}

const project = { one: { two: { fieldName: 'gotcha' } } }
console.log(getVal(project, 'one.two.fieldName'))
