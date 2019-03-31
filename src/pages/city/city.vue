<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from './components/header'
  import CitySearch from './components/search'
  import CityList from './components/list'
  import CityAlphabet from './components/alphabet'
  import { getIndex, getCity, getDDetail } from '@/api'

  export default {
    name: 'city',
    data () {
      return {
        cities: {},
        hotCities: []
      }
    },
    mounted () {
      this.getCityInfo()
    },
    methods: {
      getCityInfo () {
        getCity({})
          .then((res) => {
            if (res.ret) {
              console.log('tttttttttttt')
              this.cities = res.data.cities
              this.hotCities = res.data.hotCities
            }
          })
      }
    },
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    }
  }
</script>

<style scoped lang="stylus">

</style>
