import axios from 'axios'

const baseURL = 'http://v3.wufazhuce.com:8000'
const reg = /\{(.+)\}/ig

export function getReadingData () {
  const readingURL = baseURL + '/api/channel/reading/more/0'
  return axios.get(readingURL)
}
export function getNextReading (id) {
  const readingURL = baseURL + '/api/channel/reading/more/{id}'
  return axios.get(readingURL.replace(reg, id))
}
