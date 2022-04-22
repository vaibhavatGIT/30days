const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

var setZeroes = function(matrix) {
  for(let i = 0; i < matrix.length ; i++) {
      for(let j = 0; j < matrix[0].length ; j++) {
          if(matrix[i][j] == 0) {
              setRowAndCol(i,j, matrix);
          }
      }
  }
   return setAllNegativesToZero(matrix);
};

let setRowAndCol = (i, j, matrix) => {
  let row = matrix.length-1;
  let col = matrix[0].length-1;    
  while( row >= 0){
      if(matrix[row][j]!=0)
          matrix[row][j]= '*'
      row--;
  }
  while( col >= 0){
      if(matrix[i][col]!=0)
          matrix[i][col]= '*'
      col--;
  }
}

let setAllNegativesToZero= (matrix) =>{
  for(let i =0; i < matrix.length ; i++) {
      for(let j =0; j < matrix[0].length ; j++) {
          if(matrix[i][j]=='*'){
              matrix[i][j] = 0;
          }       
      }
  }
  return matrix;
}
console.log(setZeroes(matrix));