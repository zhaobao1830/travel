<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles"

  .header
    height: .86rem
    display: flex
    align-items: center
    background: $bgColor
    color: #fff
    .header-left
      flex: 0 0 .64rem
      height: .86rem
      line-height: .86rem
    .header-input
      flex: 1
      background: #fff
      border-radius: .1rem
      height: .64rem
      margin-left: .2rem
      padding-left: .2rem
      color: #ccc
      line-height: .64rem
      text-align: left
    .header-right
      flex: 0 0 1.24rem
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
