const transpose = function (matrix) {
  let newArray = [];
  for(let x = 0; x < matrix[0].length; x++) {
    newArray.push([]);

  }
  let tmp = matrix[0].length;

  for(let r = 0; r < matrix.length; r++) {
    for(let c = 0; c < tmp; c++){
      newArray[c].push(matrix[r][c]);
    }
  }
  return newArray;
};


const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    console.log('horizontal line: ', horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
      }

        let transposed = transpose(letters)
        const verticleJoin = transposed.map(vs => vs.join(''))
        //console.log('verticleJoin: ', verticleJoin)
        //if(letters.includes(word));
        for (l of verticleJoin) {
            if (l.includes(word)) return true
          }
        return false;

}
module.exports = wordSearch
