function camelize (str) {
  return str.split('-')
    .map((item, index) => {
      if (!item) return ''
      const upperFirstLetter = index !== 0 ? item[0].toUpperCase() : item[0]

      return `${upperFirstLetter}${item.slice(1)}`
    }).join('')
}

console.log(camelize('background-color'))
console.log(camelize('-background-color'))
