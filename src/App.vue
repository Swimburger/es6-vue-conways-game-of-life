<template>
  <div id="app">
      <board :preset="preset"></board>
      <div class="controls">
        <button type="button" v-on:click="autoAge" v-bind:class="{'active':!!interval}"><i class="fa fa-clock-o" aria-hidden="true"></i></button>
        <button type="button" v-on:click="ageUp"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button>
      </div>
  </div>
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
<style>
*{
  margin: 0;
  padding: 0;
}
html, body, #app{
  height: 100%;
  overflow: hidden;
}
.controls{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: #333;
  text-align: center;
}
.controls button{
  font-size: 42px;
  margin: 8px 4px;
  background: none;
  border: none;
  color: #aaa;
}
.controls button.active{
  color: #fff;
}
</style>
