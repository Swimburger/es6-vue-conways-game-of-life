<template lang="pug">
  div#app
      board(v-bind:preset="preset")
      div.controls
        button(type="button" v-on:click="autoAge" v-bind:class="{'active':!!interval}")
          i.fa.fa-clock-o(aria-hidden="true")
        button(type="button" v-on:click="ageUp")
          i.fa.fa-arrow-circle-o-right(aria-hidden="true")
</template>

<script>
import Board from './components/Board'
import {getParameterByName} from './helpers'
const preset = getParameterByName('preset')
export default {
  data () {
    return {
      interval: null,
      preset
    }
  },
  components: {
    Board
  },
  methods: {
    ageUp () {
      this.$broadcast('board.age-up')
    },
    autoAge () {
      if (this.interval) {
        clearInterval(this.interval)
        this.interval = null
      } else {
        this.interval = setInterval(() => {
          this.ageUp()
        }, 200)
      }
    }
  },
  ready () {
    if (preset) {
      this.autoAge()
    }
  }
}
</script>
<style lang="sass">
*
  margin: 0
  padding: 0

html, body, #app
  height: 100%
  overflow: hidden

.controls
  position: absolute
  bottom: 0
  width: 100%
  height: 60px
  background: #333
  text-align: center

  button
    font-size: 42px
    margin: 8px 4px
    background: none
    border: none
    color: #aaa
    
    &.active
      color: #fff

</style>
