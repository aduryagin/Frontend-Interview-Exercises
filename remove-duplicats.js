
  /* Удалить все дубликаты из отсортированного массива чисел */
  // 2, 4, 8, 8, 8
  
  function removeDublicats(arr) {
    // return Array.from(new Set(arr));
  
    const result = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  