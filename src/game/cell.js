export default class Cell {
  constructor (row, column, isAlive, board) {
    this.row = row
    this.column = column
    this.isAlive = isAlive
    this.willBeAlive = false
    this.board = board
  }
  calculateFuture () {
    let amountOfAliveNeighbours = this.amountOfAliveNeighbours
    if (this.isAlive) {
      // 1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.
      if (amountOfAliveNeighbours < 2) {
        this.willBeAlive = false
        return
      }
      // 2. Any live cell with two or three live neighbours lives on to the next generation.
      if (amountOfAliveNeighbours === 2 || amountOfAliveNeighbours === 3) {
        this.willBeAlive = true
        return
      }
      // 3. Any live cell with more than three live neighbours dies, as if by over-population.
      if (amountOfAliveNeighbours > 3) {
        this.willBeAlive = false
      }
    } else {
      // 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
      if (amountOfAliveNeighbours === 3) {
        this.willBeAlive = true
      }
    }
  }
  ageUp () {
    this.isAlive = this.willBeAlive
  }
  get neighbours () {
    const board = this.board
    const row = this.row
    const column = this.column
    return [
      board.getCell(row + 0, column - 1), // 1. cell to the left
      board.getCell(row + 1, column - 1), // 2. cell below to the left
      board.getCell(row + 1, column + 0), // 3. cell below
      board.getCell(row + 1, column + 1), // 4. cell below to the right
      board.getCell(row + 0, column + 1), // 5. cell to the right
      board.getCell(row - 1, column - 1), // 6. cell above to the left
      board.getCell(row - 1, column + 0), // 7. cell above
      board.getCell(row - 1, column + 1)  // 8. cell above to the right
    ]
  }
  get amountOfAliveNeighbours () {
    let count = 0
    for (let cell of this.neighbours) {
      if (cell.isAlive) {
        count++
      }
    }
    return count
  }
}
