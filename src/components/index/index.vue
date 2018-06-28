<template>
  <div class="one-image">
    <m-header></m-header>
    <!-- 插画 -->
    <div class="index_picture" v-for="(item, index) in infoArray.content_list" v-show="index === 0" :key="item.id">
      <div class="picture" >
        <img width="100%" :src="item.img_url">
      </div>
      <div class="pic_info">{{item.title}}  |  {{item.pic_info}}</div>
      <div class="words">{{item.forward}}</div>
      <div class="words_info">{{item.words_info}}</div>
    </div>
    <!-- 文章 -->
    <div class="article" v-for="(item, index) in infoArray.content_list" v-if="index != 0" @click="selectItem(item)" :key="item.index">
      <div class="category">-{{ getTag(item) }}-</div>
      <h1 class="title">{{item.title}}</h1>
      <div class="author">文 / {{item.author.user_name}}</div>
      <div class="article_picture">
        <img width="100%" :src="item.img_url">
      </div>
      <div class="article_info">{{item.forward}}</div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import MHeader from 'components/m-header/m-header'
import axios from 'axios'
import {getCategoryByType} from 'common/js/type'
import {mapMutations} from 'vuex'

export default {
  data () {
    return {
      infoArray: [],
      idArray: []
    }
  },
  created () {
    setTimeout(() => {
      this._getImageInfo()
    }, 500)
    this._getImageId()
  },
  methods: {
    selectItem (item) {
      this.$router.push({
        path: `/index/${item.content_id}`
      })
      this.setArticle(item)
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
    _getImageInfo () {
      const imageNewId = this.idArray[0]
      const imageUrl = `http://v3.wufazhuce.com:8000/api/onelist/${imageNewId}/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`
      axios.get(imageUrl).then((res) => {
        this.infoArray = res.data.data
      })
    },
    _getImageId () {
      const idUrl = `http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`
      axios.get(idUrl).then((res) => {
        this.idArray = res.data.data
      })
    },
    ...mapMutations({
      setArticle: 'SET_ARTICLE'
    })
  },
  components: {
    MHeader
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.one-image
  z-index: 1
  padding-bottom: 55px
  background-color: #eee
  width: 100%
  .index_picture
    background-color: #FFF
    margin: 0 0 5px 0
    color: #949494
    .picture
      width: 100%
    .pic_info, .words_info
      font-size: 8px
      text-align: center
      padding: 8px 0
    .words
      font-size: 14px
      color: #000
      line-height: 26px
      padding: 5px 15px
    .words_info
      padding-bottom: 20px
  .article
    background-color: #FFF
    color: #949494
    margin: 5px 0 0 0
    padding: 20px
    .category
      text-align: center
      font-size: 10px
    h1
      color: #000
      font-size: 20px
      line-height: 20px
      margin: 20px 0
    .author
      font-size: 14px
      line-height: 26px
      margin: 10px 0
    .article_info
      color: #000
      margin: 10px 0
      font-size: 14px
      line-height: 26px
</style>
