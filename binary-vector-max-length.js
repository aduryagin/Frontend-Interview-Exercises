
  /*
  Требуется найти в бинарном векторе самую длинную последовательность единиц и вывести её длину.
  Желательно получить решение, работающее за линейное время и при этом проходящее по входному массиву только один раз.
  */
  
  // [0] => 0
  // [] => 0
  // [1, 1, 1] => 3
  // [1, 1, 0] => 2
  // [1, 1, 0, 1] => 2
  
  function getMaxLength(vector) {
    let maxLength = 0;
    let memoizedMaxLength = maxLength;
  
    for (let i = 0; i < vector.length; i++) {
      if (vector[i] === 1) maxLength++;
      else {
        if (maxLength > memoizedMaxLength) memoizedMaxLength = maxLength;
        maxLength = 0;
      }
    }
  
    return memoizedMaxLength;
  }
  