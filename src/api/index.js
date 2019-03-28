import { get } from './helpers'

const getIndex = get('/api/index')
const getCity = get('/api/city')
const getDDetail = get('/api/detail')

export {
  getIndex,
  getCity,
  getDDetail
}
