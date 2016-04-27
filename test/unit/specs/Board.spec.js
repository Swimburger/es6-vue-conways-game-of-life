import Board from 'src/game/Board'

describe('Board', () => {
  it('should create a grid of 10 rows and 25 columns', () => {
    let board = new Board()
    board.layout(10, 25)
    expect(board.grid.length).to.eql(10)
    expect(board.grid[0].length).to.eql(25)
  })
  it('should create blinker', () => {
    let board = new Board()
    board.layout(5, 5,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
      ]
    )
    console.log(board.toString())
    expect(removeSpecialChars(board.toString())).to.eql('0000000100001000010000000')

    board.ageUp()
    console.log(board.toString())
    expect(removeSpecialChars(board.toString())).to.eql('0000000000011100000000000')

    board.ageUp()
    console.log(board.toString())
    expect(removeSpecialChars(board.toString())).to.eql('0000000100001000010000000')
  })
})

function removeSpecialChars (str) {
  return str.replace(/(\r\n|\n|\r)/gm, '').trim()
}
