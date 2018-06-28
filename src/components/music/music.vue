<template>
  <div class="music" v-infinite-scroll="loadMore">
    <div class="topbar">
      <span class="iconfont icon-back" @click="back"></span>
      <span class="topbar_title">音乐</span>
    </div>
    <div class="musicContent" v-for="item in this.musicTopten" :key="item.id" @click="selectItem(item)">
      <div class="tag">-{{ getTag(item) }}-</div>
      <h1 class="title">{{item.title}}</h1>
      <div class="author">文 / {{item.author.user_name}}</div>
      <img width="100%" :src="item.img_url">
      <div class="forward">{{item.forward}}</div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import {getCategoryByType} from 'common/js/type'

export default {
  created () {
    this.getMusicTopten()
  },
  computed: {
    ...mapGetters([
      'musicTopten'
    ])
  },
  methods: {
    back () {
      this.$router.back()
    },
    loadMore () {
      let len = this.musicTopten.length
      if (len > 0) this.getNextMusicPageById(this.musicTopten[len - 1].id)
    },
    selectItem (item) {
      this.$router.push({
        path: `/all/music/${item.item_id}`
      })
      this.setMusic(item)
    },
    getTag (item) {
      let taglist = item.tag_list
      let tag = ''
      if (taglist.length > 0) {
        tag = taglist[0].title
      } else {
        tag = getCategoryByType(item.category)
      }
      return tag
    },
    ...mapMutations({
      setMusic: 'SET_MUSIC'
    }),
    ...mapActions([
      'getMusicTopten',
      'getNextMusicPageById'
    ])
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.music
  padding: 40px 0
  .topbar
    position: fixed
    background-color: #FFF
    color: #000
    text-align: center
    width: 100%
    height: 40px
    line-height: 40px
    margin-top: -40px
    .iconfont
      position: absolute
      left: 0
      top: 0
      font-size: 25px
  .musicContent
    background-color: #FFF
    color: rgba(0, 0, 0, 0.6)
    margin-bottom: 5px
    padding: 20px
    .tag
      text-align: center
      font-size: 10px
      padding-bottom: 10px
    .title
      font-weight: normal
      font-size: 22px
      margin: 15px 0
      color: #000
    img
      margin: 10px 0
    .pageForward
      line-height: 20px
</style>
