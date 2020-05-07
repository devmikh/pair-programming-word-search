const transpose = function(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];
    for (let k = 0; k < matrix.length; k++) {
      
      row.push(matrix[k][i]);
    }
    newMatrix.push(row);
  }
  return newMatrix;
};
module. exports = transpose;