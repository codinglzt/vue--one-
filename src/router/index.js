import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import All from '@/components/all/all'
import Me from '@/components/me/me'
import ArticleDetail from '@/components/article-detail/article-detail'
import Reading from '@/components/reading/reading'
import Movie from '@/components/movie/movie'
import Music from '@/components/music/music'
import MovieDetail from '@/components/movie-detail/movie-detail'
import MusciDetail from '@/components/music-detail/music-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: ':id',
          component: ArticleDetail
        }
      ]
    },
    {
      path: '/all',
      component: All
    },
    {
      path: '/me',
      component: Me
    },
    {
      path: '/article',
      component: ArticleDetail
    },
    {
      path: '/all/reading',
      component: Reading,
      children: [
        {
          path: ':id',
          component: ArticleDetail
        }
      ]
    },
    {
      path: '/all/movie',
      component: Movie,
      children: [
        {
          path: ':id',
          component: MovieDetail
        }
      ]
    },
    {
      path: '/all/music',
      component: Music,
      children: [
        {
          path: ':id',
          component: MusciDetail
        }
      ]
    }
  ]
})
