// 1: take two dummy array of size row and col
const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]

const setZeroes = (matrix) => {
  let col0 = true;
  const row = matrix.length;
  const col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    if (matrix[i][0] == 0) col0 = false;
    for (let j = 1; j < col; j++) {
      if (matrix[i][j]==0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 1; j--) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
    if(col0 == false) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
}

console.log(setZeroes(matrix));