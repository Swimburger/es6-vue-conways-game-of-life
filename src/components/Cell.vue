<template lang="pug">
  button.cell(type="button" v-bind:class="{'is-alive': cell.isAlive}" @click="killOrResurect")
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
<style lang="sass">
.cell
  height: 100%
  width: 100%
  border: none
  display: block
  transition: all .1s

  &:hover, &:focus
    background: #eee
    transform: scale(1.1) translateY(-4px)
    opacity: .9

  &.is-alive
    background: #fff
    transform: scale(1.3) translateY(-10px)
    opacity: .9

</style>
