module.exports = function countCats(matrix) {
  let catCount = 0;

  for(let i = 0; i < matrix.length; ++i) {
    for(let j = 0; j < matrix[i].length; ++j) {
      catCount += (matrix[i][j] === "^^");
    }
  }

  return catCount;
}