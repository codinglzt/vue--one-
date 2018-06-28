import * as types from './mutation-types'

const mutations = {
  [types.SET_IDLIST] (state, data) {
    state.idlist = data
  },
  [types.SET_POSTER] (state, poster) {
    state.poster = poster
  },
  [types.SET_HP] (state, data) {
    state.hp = data
    state.poster = data.content_list[0]
  },
  [types.SET_CLIMATE] (state, climate) {
    state.climate = climate
  },
  [types.SET_NODES] (state, data) {
    state.nodes = data.content_list
  },
  [types.SET_ARTICLE] (state, article) {
    state.article = article
  },
  [types.SET_MOVIES] (state, movies) {
    state.movies = movies
  },
  [types.SET_READINGDATA] (state, data) {
    state.readingTopten.length = 0
    state.readingTopten = data
  },
  [types.SET_MOVIEDATA] (state, data) {
    state.movieTopten.length = 0
    state.movieTopten = data
  },
  [types.SET_MUSICDATA] (state, data) {
    state.musicTopten.length = 0
    state.musicTopten = data
  },
  [types.SET_MUSIC] (state, music) {
    state.music = music
  },
  [types.SET_MOVIENEXTPAGE] (state, data) {
    state.movieTopten = state.movieTopten.concat(data)
  },
  [types.SET_MUSICNEXTPAGE] (state, data) {
    state.musicTopten = state.musicTopten.concat(data)
  },
  [types.SET_READINGNEXTPAGE] (state, data) {
    state.readingTopten = state.readingTopten.concat(data)
  }
}

export default mutations
