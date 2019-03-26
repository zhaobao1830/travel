<template>
  <div>
    <div class="title">周末游推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    data () {
      return {
        recommendList: [
          {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1901/ed/ed4079d797a78d28a3.water.jpg_200x200_53b1d509.jpg',
            title: '榆次老城',
            desc: '榆次老城欢迎您'
          },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1901/ed/ed4079d797a78d28a3.water.jpg_200x200_53b1d509.jpg',
            title: '榆次老城',
            desc: '榆次老城欢迎您'
          },
          {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1901/ed/ed4079d797a78d28a3.water.jpg_200x200_53b1d509.jpg',
            title: '榆次老城',
            desc: '榆次老城欢迎您'
          },
          {
            id: '0004',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1901/ed/ed4079d797a78d28a3.water.jpg_200x200_53b1d509.jpg',
            title: '榆次老城',
            desc: '榆次老城欢迎您'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~styles/mixins.styl"

  .title
    margin-top: .2rem
    line-height: .8rem
    background-color: #eee
    text-indent: .2rem
    text-align: left
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    text-align: left
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
