const fs = require('fs');

fs.readFile('./day-3-data.txt', 'utf8', function(err, data){
  const content = data;

  const slopeCheck = function(right, down) {
    let matrix = content.split('\n')

    for (let i = 0; i < matrix.length; i++) {
      matrix[i] = matrix[i].split('');
    }

    let rowCount = matrix.length;
    let colCount = matrix[0].length
    let rowPosition = 0;
    let colPosition = 0;
    let treeCount = 0;
    do {
      if (!matrix[rowPosition] || !matrix[rowPosition][colPosition]) {
        for (let i = 0; i < rowCount; i++) {
          for (let j = 0; j < colCount; j++) {
            matrix[i].push(matrix[i][j]);
          }
        }
      }
      if (matrix[rowPosition][colPosition] === '#') {
        treeCount++;
      }
      colPosition += right;
      rowPosition += down;
    } while (rowPosition < rowCount)
    console.log(treeCount);
    return treeCount
  }

  let multipliedTrees = 1;
  [[1,1],[3,1],[5,1],[7,1],[1,2]].forEach((pair)=>{
    multipliedTrees *= slopeCheck(pair[0],pair[1]);
  })
  console.log(multipliedTrees);
  return multipliedTrees;
})