<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      swiperList: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true // 支持循环轮播
        }
      }
    },
    computed: {
      showSwiper () {
        return this.swiperList.length
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.67%
    background-color: #eee
    >>> .swiper-pagination-bullet-active
      background: #fff
    .swiper-img
      width: 100%
</style>
