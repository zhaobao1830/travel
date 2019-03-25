<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item">
        <div class="item-img-wrapper">
          <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1901/ed/ed4079d797a78d28a3.water.jpg_200x200_53b1d509.jpg">
        </div>
        <div class="item-info">
          <p class="item-title"></p>
          <p class="item-desc"></p>
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
    background-color: red
</style>
