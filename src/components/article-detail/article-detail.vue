<template>
  <transition name="slide">
    <div class="article_detail">
        <div class="topbar">
          <span class="iconfont icon-back" @click="back"></span>
          <span class="topbar_title">{{getTag(this.article)}}</span>
        </div>
        <h1 class="title">{{articleContent.hp_title}}</h1>
        <div class="author" v-for="item in articleContent.author" :key="item.id">文 / {{item.user_name}}</div>
        <div class="articleContent" v-html="this.articleContent.hp_content"></div>
    </div>
  </transition>
</template>
<script>
import {mapGetters} from 'vuex'
import axios from 'axios'
import {getCategoryByType} from 'common/js/type'

export default {
  data () {
    return {
      articleContent: {},
      id: ''
    }
  },
  created () {
    this.getArticle()
  },
  computed: {
    title () {
      return this.article.hp_title
    },
    ...mapGetters([
      'article'
    ])
  },
  methods: {
    back () {
      this.$router.back()
    },
    getTag (list) {
      let taglist = list.tag_list
      let tag = ''
      if (taglist.length > 0) {
        tag = taglist[0].title
      } else {
        tag = getCategoryByType(list.category)
      }
      return tag
    },
    getArticle () {
      var articleURL = `http://v3.wufazhuce.com:8000/api/essay/${this.article.content_id}`
      axios.get(articleURL).then((res) => {
        this.articleContent = res.data.data
        console.log(this.articleContent)
      })
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
  .article_detail
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
    .title
      font-size: 22px
      padding: 50px 0 10px 0
    .author
      font-size: 10px
      padding: 20px 0
    .articleContent
      height: 25px
      line-height: 25px
      margin: 10px 0
</style>
