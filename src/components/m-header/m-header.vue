<template>
  <div class="m-header">
    <div class="date">
      <span>{{year}}</span>/<span>{{month}}</span>/<span>{{day}}</span>
    </div>
    <div class="weather">
      <span class="place">{{place}}</span>
      <span class="celsius">23℃</span>
    </div>
  </div>
</template>
<script>
// import BMap from 'BMap'

export default {
  data () {
    return {
      year: '',
      month: '',
      day: '',
      place: '广州'
    }
  },
  created () {
    this.getTime()
  },
  // mounted () {
  //   this.getPlace()
  // },
  methods: {
    getTime () {
      const time = new Date()
      this.year = time.getFullYear()
      this.month = time.getMonth() + 1
      this.day = time.getDate()
    }
    // getPlace () {
    //   var map = new BMap.Map('allmap')
    //   var point = new BMap.Point(116.331398, 39.897445)
    //   map.centerAndZoom(point, 12)
    //
    //   function myFun (result) {
    //     var cityName = result.name
    //     map.setCenter(cityName)
    //     // console.log(cityName)
    //     return cityName
    //   }
    //   var myCity = new BMap.LocalCity()
    //   // console.log(myCity)
    //   myCity.get(myFun)
    //   // this.place = map
    // }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.m-header
  height: 50px
  width: 100%
  background-color: #FFF
  position: fixed
  color: black
  font-size: 20
  text-align: center
  .date
    padding: 5px
    span
      padding: 0 10px
  .weather
    span
      padding: 0 12px
</style>
