<template>
  <div class="header">
    城市选择
    <div class="iconfont header-back">&#xe624;</div>
  </div>
</template>

<script>
  export default {
    name: 'Cityheader'
  }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles"

  .header
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #ffffff
    background-color: $bgColor
    .header-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
