<template>
  <div class="all">
    <div class="navbar">
      <h1 class="navbar_title">ONE IS ALL</h1>
    </div>
    <div class="content">
      <div v-if="slideContent.length" class="slider-wrapper">
        <slider>
          <div v-for="item in slideContent" :key="item.id">
            <a>
              <img  :src="item.img_url">
            </a>
          </div>
        </slider>
      </div>
    </div>
    <div class="navigation">
      <div class="nav_title">分类导航</div>
      <div class="nav_content">
        <!-- <router-link to="/all/imagetext">
          <span class="nav_image">
            <img src="./image.jpg">
            <p class="des">图文</p>
          </span>
        </router-link> -->
        <span class="nav_image">
          <router-link to="/all/reading">
            <img src="./reading.jpeg">
            <p class="des">阅读</p>
          </router-link>
        </span>
        <span class="nav_image">
          <router-link to="/all/movie">
            <img src="./movie.jpg">
            <p class="des">影视</p>
          </router-link>
        </span>
        <span class="nav_image">
          <router-link to="/all/music">
            <img src="./music.jpg">
            <p class="des">音乐</p>
          </router-link>
        </span>
      </div>
    </div>
    <div class="subject" v-for="item in subjectContent" :key="item.id">
      <img width="100%" :src="item.img_url">
      <h1 class="forward">{{item.forward}}</h1>
    </div>
  </div>
</template>
<script>
import Slider from 'base/slider/slider'
import axios from 'axios'
export default {
  data () {
    return {
      slideContent: [],
      subjectContent: [],
      idArray: []
    }
  },
  created () {
    setTimeout(() => {
      this._getImageInfo()
      this._getSubject()
    }, 500)
    this._getImageId()
  },
  methods: {
    _getImageInfo () {
      const imageNewId = this.idArray[0]
      const imageUrl = `http://v3.wufazhuce.com:8000/api/onelist/${imageNewId}/0`
      axios.get(imageUrl).then((res) => {
        this.slideContent = res.data.data.content_list
      })
    },
    _getSubject () {
      const imageNewId = this.idArray[1]
      const imageUrl = `http://v3.wufazhuce.com:8000/api/onelist/${imageNewId}/0`
      axios.get(imageUrl).then((res) => {
        this.subjectContent = res.data.data.content_list
      })
    },
    _getImageId () {
      const idUrl = `http://v3.wufazhuce.com:8000/api/onelist/idlist`
      axios.get(idUrl).then((res) => {
        this.idArray = res.data.data
      })
    }
  },
  components: {
    Slider
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .all
    background-color: #eee
    width: 100%
    color: #000
    position: fixed
    top: 0px
    bottom: 58px
    overflow-y: scroll
    .navbar
      background-color: #FFF
      text-align: center
      height: 48px
      width: 100%
      position: flex
      .navbar_title
        position: absolute
        top: 20px
        left: 40%
        font-weight: bold
    .content
      height: 230px
      overflow: hidden
      .slider-wrapper
        width: 100%
        position: relative
        overflow: hidden
    .navigation
      background-color: #FFF
      margin: 10px 0
      padding: 10px
      .nav_title
        height: 20px
        line-height: 20px
      .nav_content
        margin-top: 10px
        padding-right: 10px
        text-align: center
        span
          display: inline-block
          border: 1px solid #000
          overflow: hidden
          position: relative
          margin-left: 10px
          width: 28%
          height: 80px
          img
            width: 100%
            height: 82px
        .des
          position: absolute
          left: 42px
          bottom: 5px
          color: #FFF
  .subject
    background-color: #FFF
    color: #000
    width: 100%
    margin-top: 10px
    padding: 10px 0
    img
      height: 200px
      overflow: hidden
    .forward
      padding: 15px
      font-size: 15px
      line-height: 20px
</style>
