<template>
  <table>
    <tr v-if="board.grid" v-for="row in board.grid">
      <td v-for="cell in row">
        <cell :cell="cell"></cell>
      </td>
    </tr>
  </table>
</template>

<script>
import Cell from './Cell'
import Board from './../game/board'
export default {
  props: ['preset'],
  components: {
    Cell
  },
  data () {
    let board = new Board()
    let dims = calculateRowsAndColumns()
    board.layout(dims.rows, dims.columns)
    board.loadPreset(this.preset)
    return {
      board
    }
  },
  events: {
    'board.age-up': function () {
      this.board.ageUp()
    }
  }
}
function calculateRowsAndColumns () {
  let columns = Math.ceil(document.body.clientWidth / 25)
  let rows = Math.ceil((document.body.clientHeight - 60) / 25)
  return {rows, columns}
}
</script>
<style>
table{
  height: 100%;
  width: 100%;
  padding-bottom: 60px;
  border-collapse: collapse;
  background: #333;
  overflow: hidden;
}

table td{
  border: 5px solid #999;
  height: 20px;
  width: 20px;
}
</style>
