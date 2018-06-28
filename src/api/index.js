import axios from 'axios'
const baseURL = 'http://v3.wufazhuce.com:8000'

export function getIdlist () {
  const idlistURL = baseURL + '/api/onelist/dilist'
  axios.get(idlistURL).then((res) => {
    console.log(res)
  })
}
export function getOnedayList (id) {
  const daylisturl = baseURL + '/api/onelist/{id}/0'
  const reg = /\{(.+)\}/ig
  const dayListURL = daylisturl.replace(reg, id)

  axios.get(dayListURL).then((res) => {
    console.log(res)
  })
}
