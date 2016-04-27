import Cell from './cell'
export default class Board {
  layout (amountOfRows = 50, amountOfColumns = 50, seed = null) {
    this.amountOfRows = amountOfRows
    this.amountOfColumns = amountOfColumns
    this.age = 0
    this.seed = seed
    this.generateGrid()
  }
  generateGrid () {
    this.grid = []
    for (let row = 0; row < this.amountOfRows; row++) {
      this.grid[row] = []
      for (let column = 0; column < this.amountOfColumns; column++) {
        let isAlive = false
        if (this.seed && this.seed[row] && this.seed[row][column]) {
          isAlive = !!this.seed[row][column]
        }
        let cell = new Cell(row, column, isAlive, this)
        this.putCell(row, column, cell)
      }
    }
  }
  /**
   * getCell - Returns the cell by locating it on the board by column and row
   *
   * @param  {number} row of the Cell
   * @param  {number} column of the Cell
   * @return {Cell}   cell at give column and row
   */
  getCell (row, column) { // convenience method to prevent mixing up columns and rows
    return this.grid[this.safeRow(row)][this.safeColumn(column)]
  }
  safeRow (row) {
    return mod(row, this.amountOfRows) // makes sure that the beginning is the end and the end is the beginning
  }
  safeColumn (column) {
    return mod(column, this.amountOfColumns) // makes sure that the beginning is the end and the end is the beginning
  }
  /**
   * putCell - Puts the cell on the board at the given location
   *
   * @param  {number} row to put Cell in
   * @param  {number} column to put Cell in
   * @param  {Cell}   cell to put on the board
   */
  putCell (row, column, cell) {
    this.grid[row][column] = cell
  }
  reset () {
    this.age = 0
    this.generateGrid()
  }
  foreachCell (cb) {
    for (let row of this.grid) {
      for (let cell of row) {
        cb(cell)
      }
    }
  }
  toString () {
    let result = ''
    for (let row of this.grid) {
      for (let cell of row) {
        result += (cell.isAlive ? '1' : '0')
      }
      result += '\n'
    }
    return result
  }
  ageUp () {
    this.age++
    // first calculateFuture
    this.foreachCell((cell) => cell.calculateFuture())
    // then ageUp
    this.foreachCell((cell) => cell.ageUp())
  }
}

function mod (a, b) {
  return ((a % b) + b) % b
}
