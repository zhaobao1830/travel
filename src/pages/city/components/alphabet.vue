<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      @click="handleletterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @toucend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'alphabet',
    props: {
      cities: {
        type: Object,
        default: () => {}
      }
    },
    data () {
      return {
        touchStatus: false
      }
    },
    computed: {
      letters() {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    methods: {
      handleletterClick (e) {
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart () {
        this.touchStatus = true
      },
      handleTouchMove (E) {
        if (this.touchStatus) {
          const startY = this.$refs['A'][0].offsetTop
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }
      },
      handleTouchEnd () {
        this.touchStatus = false
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles"

  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      color: $bgColor
</style>
