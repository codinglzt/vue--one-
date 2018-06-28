<template>
  <transition name="slide">
  <div class="music_detail">
    <div class="topbar">
      <span class="iconfont icon-back" @click="back"></span>
      <span class="topbar_title">音乐</span>
    </div>
    <div class="musicContent">
      <h1 class="title">{{this.music.title}}</h1>
      <div class="about"></div>
      <div class="author">文 / {{this.music.author.user_name}} </div>
      <div class="musicPassage" v-html="this.music.share_info.content"></div>
    </div>
  </div>
  </transition>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  methods: {
    back () {
      this.$router.back()
    }
  },
  computed: {
    ...mapGetters([
      'music'
    ])
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.slide-enter-active, .slide-leave-active
  transition: all 0.3s
.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
.music_detail
  background-color: #FFF
  color: #000
  z-index: 1000
  top: 0
  left: 0
  bottom: 0
  right: 0
  position: fixed
  overflow-y: scroll
  overflow-x: hidden
  padding: 15px
  .topbar
    width: 100%
    height: 40px
    line-height: 40px
    background-color: #FFF
    margin-top: -15px
    z-index: 1001
    text-align: center
    position: fixed
    .iconfont
      position: absolute
      left: 0
      top: 0
      font-size: 25px
  .musicContent
    .title
      font-size: 22px
      padding: 50px 0 10px 0
    .author
      font-size: 10px
      padding: 20px 0
    .musicPassage
      height: 25px
      line-height: 25px
      margin: 10px 0
</style>
