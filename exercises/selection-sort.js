export default function selection (arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i

    for (let q = i + 1; q < arr.length; q++) {
      if (arr[q] < arr[minIndex]) {
        minIndex = q
      }
    }

    const s = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = s
  }

  return arr
}
