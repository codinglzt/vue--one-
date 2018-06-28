<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/index">
      <div class="iconfont icon-smile"></div>
      <span class="tab-link">ONE</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/all">
      <div class="iconfont icon-all"></div>
      <span class="tab-link">ALL</span>
    </router-link>
    <!-- <router-link tag="div" class="tab-item" to="/me">
      <div class="iconfont icon-account"></div>
      <span class="tab-link">ME</span>
    </router-link> -->
  </div>
</template>
<script>
export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .tab
    width: 100%
    height: 50px
    background-color: #FFF
    position: fixed
    bottom: 0
    color: #000
    display: flex
    margin-bottom: -3px
    .tab-item
      flex: 1
      text-align: center
      .iconfont
        font-size: 16px
        padding: 5px 0 5px 0
        display: block
      .tab-link
        font-size: 14px
        padding-bottom: 5px
        color: black
      &.router-link-active
        .iconfont
          border-top: 2px solid black
</style>
