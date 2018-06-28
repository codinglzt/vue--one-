<template>
  <div class="reading" v-infinite-scroll="loadMore">
    <div class="topbar">
      <span class="iconfont icon-back" @click="back"></span>
      <span class="topbar_title">阅读</span>
    </div>
    <div class="readingContend" v-for="item in this.readingTopten" @click="selectItem(item)" :key="item.id">
      <div class="tag">-{{ getTag(item) }}-</div>
      <h1 class="title">{{item.title}}</h1>
      <div class="author">文 / {{item.author.user_name}}</div>
      <img width="100%" :src="item.img_url">
      <div class="pageForward">{{item.forward}}</div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import {getCategoryByType} from 'common/js/type'

export default {
  created () {
    this.getReadingTopten()
  },
  computed: {
    ...mapGetters([
      'readingTopten'
    ])
  },
  methods: {
    back () {
      this.$router.back()
    },
    loadMore () {
      let len = this.readingTopten.length
      if (len > 0) this.getNextReadingPageById(this.readingTopten[len - 1].id)
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
    selectItem (item) {
      this.$router.push({
        path: `/all/reading/${item.content_id}`
      })
      this.setArticle(item)
    },
    ...mapMutations({
      setArticle: 'SET_ARTICLE'
    }),
    ...mapActions([
      'getReadingTopten',
      'getNextReadingPageById'
    ])
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .reading
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
    .readingContend
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
