<template>
  <button type="button" class="cell" v-bind:class="{'is-alive': cell.isAlive}" v-on:click="killOrResurect">
  </button>
</template>

<script>
export default {
  props: ['cell'],
  methods: {
    killOrResurect () {
      this.cell.isAlive = !this.cell.isAlive
    }
  }
}
</script>
<style>
.cell{
  height: 100%;
  width: 100%;
  border: none;
  display: block;
  transition: all .1s;
}
.cell:hover, .cell:focus{
  background: #eee;
  transform: scale(1.1) translateY(-4px);
  opacity: .9;
}
.cell.is-alive{
  background: #fff;
  transform: scale(1.3) translateY(-10px);
  opacity: .9;
}
</style>
