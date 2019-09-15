function bubble (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let q = i + 1; q < arr.length; q++) {
      if (arr[q] < arr[i]) {
        const s = arr[q]
        arr[q] = arr[i]
        arr[i] = s
      }
    }
  }

  return arr
}

console.log(bubble([3, 2, 5, 6, 7, -1]))
