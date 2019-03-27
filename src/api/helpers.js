import axios from 'axios'

const ERR_OK = 0

export function get(url) {
  return function (params) {
    return axios.get(url, {
      params
    }).then((res) => {
      const { errno, data } = res.data
      console.log(data)
      if (errno === ERR_OK) {
        console.log('ttttttttttttt')
        return data
      }
    }).catch((e) => {})
  }
}
