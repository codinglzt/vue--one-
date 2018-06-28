import * as types from './mutation-types'
// import {getIdlist, getOnedayList} from 'api/index'
//
// export default {
//   getIdlist ({dispatch, commit, state}) {
//     getIdlist().then(response => {
//       commit(types.SET_IDLIST, response.data.data)
//       dispatch('getHpById', state.idlist[0])
//     })
//   },
//   getHpById ({ dispatch, commit, state }, id) {
//     getOnedayList(id).then(response => {
//       let hp = response.data.data
//       commit(types.SET_HP, hp)
//     })
//   }
// }

import {getReadingData, getNextReading} from 'api/reading'
import {getMovieData, getNextMovie} from 'api/movie'
import {getMusicData, getNextMusic} from 'api/music'

export const getReadingTopten = function ({commit}) {
  getReadingData().then((res) => {
    commit(types.SET_READINGDATA, res.data.data)
  })
}
export const getMovieTopten = function ({commit}) {
  getMovieData().then((res) => {
    commit(types.SET_MOVIEDATA, res.data.data)
    console.log(res.data)
  })
}
export const getMusicTopten = function ({commit}) {
  getMusicData().then((res) => {
    commit(types.SET_MUSICDATA, res.data.data)
    console.log(res.data)
  })
}
export const getNextPageById = function ({commit}, id) {
  getNextMovie(id).then((res) => {
    commit(types.SET_MOVIENEXTPAGE, res.data.data)
  })
}
export const getNextMusicPageById = function ({commit}, id) {
  getNextMusic(id).then((res) => {
    commit(types.SET_MUSICNEXTPAGE, res.data.data)
  })
}
export const getNextReadingPageById = function ({commit}, id) {
  getNextReading(id).then((res) => {
    commit(types.SET_READINGNEXTPAGE, res.data.data)
  })
}
