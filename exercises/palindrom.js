function palindrom2 (str) {
  const normalizedString = str.replace(/[^a-zA-Zа-яА-Я0-9]/g, '').toLowerCase()

  return (
    normalizedString ===
    normalizedString
      .split('')
      .reverse()
      .join('')
  )
}

console.log(palindrom2('Ш4л4ш'))
console.log(palindrom2('Eva, can I see bees in a cave?'))
console.log(palindrom2('Ээээшкшээээ'))
