// Сжатие целочисленного массива
// ([3, 2, 1, 5, 6, -1, 10]) => "-1,1-3,5-6,10"

function compress(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  let firstNumber = sortedArray[0];
  const resultArray = [firstNumber];

  for (let i = 1; i < sortedArray.length; i++) {
    if (Math.abs(sortedArray[i] - sortedArray[i - 1]) === 1) {
      resultArray.splice(-1, 1, `${firstNumber}-${sortedArray[i]}`);
    } else {
      resultArray.push(
        sortedArray.length - 1 === i ? sortedArray[i] : firstNumber
      );
      firstNumber = sortedArray[i];
    }
  }

  return resultArray.join(",");
}

// console.log(compress([3, 2, 1, 5, 6, -1, -2, 10]));
