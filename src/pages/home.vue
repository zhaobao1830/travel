<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/header'
  import HomeSwiper from './components/swiper'
  import HomeIcons from './components/icons'
  import HomeRecommend from './components/recommend'
  import HomeWeekend from './components/weekend'
  import { getIndex } from '../api'

  export default {
    name: 'home',
    mounted () {
      this.getHomeInfo(
        getIndex({})
          .then((inFor) => {
            console.log(inFor)
          })
      )
    },
    methods: {
      getHomeInfo () {},
      getHomeInfoSucc () {}
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
