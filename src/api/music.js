import axios from 'axios'

const baseURL = 'http://v3.wufazhuce.com:8000'
const reg = /\{(.+)\}/ig

export function getMusicData () {
  const musicURL = baseURL + '/api/channel/music/more/0'
  return axios.get(musicURL)
}
export function getNextMusic (id) {
  const musicURL = baseURL + '/api/channel/music/more/{id}'
  return axios.get(musicURL.replace(reg, id))
}
