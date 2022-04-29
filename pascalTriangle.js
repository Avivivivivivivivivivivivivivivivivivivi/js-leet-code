var generate = function (numRows) {
  if (numRows === 1) return [[1]]

  const triangleArray = [[1]]

  for (let i = 1; i < numRows; i++) {
    const level = [1]
    for (let j = 1; j < i; j++) {
      level.push(triangleArray[i - 1][j - 1] + triangleArray[i - 1][j])
    }
    level.push(1)

    triangleArray.push(level)
  }
  return triangleArray
}

console.log(generate(3))
