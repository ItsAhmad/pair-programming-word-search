//Collaborators: @laraibsshaikh10, @ItsAhmad, @danminogue_31788


const transpose = function (matrix) {
  const result = [];
  // A set up for a new array.
  const rows = matrix.length;
  // Set rows to length of each matrix.
  const col = matrix[0].length;
  //  Sets columns to length of element arrays.
  for (let j = 0; j < col; j++) {
    // Initialize new row array
    let newRow = [];
    for (let i = 0; i < rows; i++) {
      // Push elements from original matrix to new row.
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
    // Push new row to transposed matrix.
  } 
  
  return result;
};


const wordSearch = (letters, word) => { 
    //join the letters horizontally to make up a word
    const horizontalJoin = letters.map(ls => ls.join(''))
    //transposes the arrays of letters and joins the letters in the row to form a word
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    //returns true if either of the two condition is true
    return horizontalJoin.some(row => row.includes(word)) || verticalJoin.some(column => column.includes(word));
   
}

module.exports = wordSearch