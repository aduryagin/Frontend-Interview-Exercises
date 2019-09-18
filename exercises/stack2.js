/**
 * Обойти дерево без использования рекурсии.
 * Найти сумму всех значений data
 */

const tree = {
  data: 1,
  children: [{
    data: 2,
    children: [{
      data: 3
    },
    {
      data: 4,
      children: [{
        data: 5
      }]
    }]
  }]
}

function walkTree (treeData) {
  let memo = treeData.children
  let result = treeData.data

  while (memo.length) {
    for (let i = 0; i < memo.length; i++) {
      result += memo[i].data

      if (memo[i].children) memo = memo.concat(memo[i].children)

      memo.splice(i, 1)
    }
  }

  return result
}

console.log(walkTree(tree))
