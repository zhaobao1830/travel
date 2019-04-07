<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
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
        hotCities: [],
        letter: ''
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
              this.cities = res.data.cities
              this.hotCities = res.data.hotCities
            }
          })
      },
      handleLetterChange (letter) {
        this.letter = letter
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
