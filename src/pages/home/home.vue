<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/header'
  import HomeSwiper from './components/swiper'
  import HomeIcons from './components/icons'
  import HomeRecommend from './components/recommend'
  import HomeWeekend from './components/weekend'
  import { getIndex, getCity, getDDetail } from '@/api'

  export default {
    name: 'home',
    data () {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    mounted () {
      this.getHomeIndex()
    },
    methods: {
      getHomeIndex () {
        getIndex({})
          .then((res) => {
            if (res.ret) {
              this.swiperList = res.data.swiperList
              this.iconList = res.data.iconList
              this.recommendList = res.data.recommendList
              this.weekendList = res.data.weekendList
            }
          })
      }
    },
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    }
  }
</script>

<style scoped>

</style>
