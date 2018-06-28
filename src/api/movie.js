import axios from 'axios'

const baseURL = 'http://v3.wufazhuce.com:8000'
const reg = /\{(.+)\}/ig

export function getMovieData () {
  const movieURL = baseURL + '/api/channel/movie/more/0'
  return axios.get(movieURL)
}

export function getNextMovie (id) {
  const movieURL = baseURL + '/api/channel/movie/more/{id}'
  return axios.get(movieURL.replace(reg, id))
}
