<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom">
        <div class="item-img-wrapper">
          <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1901/ed/ed4079d797a78d28a3.water.jpg_200x200_53b1d509.jpg">
        </div>
        <div class="item-info">
          <p class="item-title">榆次老城</p>
          <p class="item-desc">榆次老城</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .title
    margin-top: .2rem
    line-height: .8rem
    background-color: #eee
    text-indent: .2rem
    text-align: left
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      text-align: left
      .item-title
        line-height: .54rem
        font-size: .32rem
      .item-desc
        line-height: .4rem
        color: #ccc
      .item-button
        background: #ff9300
        padding: 0 .1rem
        border-radius: .06rem
</style>
