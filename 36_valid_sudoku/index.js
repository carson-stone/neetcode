/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const nums = new Set()

  // validate rows
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      const el = board[i][j]

      if (el !== ".") {
        if (nums.has(el)) {
          return false
        }

        nums.add(el)
      }
    }

    nums.clear()
  }


  // validate columns
  for (let j = 0; j < 9; ++j) {
    for (let i = 0; i < 9; ++i) {
      const el = board[i][j]

      if (el !== ".") {
        if (nums.has(el)) {
          return false
        }

        nums.add(el)
      }
    }

    nums.clear()
  }


  // validate squares

  // first two for loops get the starting point of the square
  for (let rowStart = 0; rowStart < 9; rowStart += 3) {
    for (let colStart = 0; colStart < 9; colStart += 3) {

      // validate that square
      for (let i = rowStart; i < rowStart + 3; ++i) {
        for (let j = colStart; j < colStart + 3; ++j) {
          const el = board[i][j]

          if (el !== ".") {
            if (nums.has(el)) {
              return false
            }

            nums.add(el)
          }
        }
      }

      nums.clear()
    }
  }

  return true
};




/*
  Alternate solution with same complexity, but less loops and more readable
*/


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rows = new Map() // row index => set of numbers in that row
  const cols = new Map() // col index => set of numbers in that col
  const subSquares = new Map() // [row index // 3, col index // 3] => set of numbers in that sub square

  for (let i = 0; i < 9; ++i) {
    rows.set(i, new Set())

    for (let j = 0; j < 9; ++j) {
      if (!cols.get(j)) {
        cols.set(j, new Set())
      }

      // sub square starting at row 3, col 6 is at "sub square index" [1, 2]
      const subSquareRowIndex = Math.floor(i / 3)
      const subSquareColIndex = Math.floor(j / 3)
      const subSquareIndexHash = [subSquareRowIndex, subSquareColIndex].toString()

      if (!subSquares.get(subSquareIndexHash)) {
        subSquares.set(subSquareIndexHash, new Set())
      }

      const el = board[i][j]

      if (el === ".") {
        continue
      }

      if (
        rows.get(i).has(el) ||
        cols.get(j).has(el) ||
        subSquares.get(subSquareIndexHash).has(el)
      ) {
        return false
      }

      // add el to sets
      rows.get(i).add(el)
      cols.get(j).add(el)
      subSquares.get(subSquareIndexHash).add(el)
    }
  }

  return true
}
