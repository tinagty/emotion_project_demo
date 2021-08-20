import axios from 'axios'

const local = true
const localRoot = 'http://localhost:8082/'
const prodRoot = ''
const apiRoot = local ? localRoot : prodRoot

axios.defaults.baseURL = apiRoot

export function get({ api, params = {}}) {
  return new Promise((resolve, reject) => {
    axios({
      url: api,
      params
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function post({ api, params = {}}) {
  return new Promise((resolve, reject) => {
    axios({
      url: api,
      method: 'post',
      data: { ...params }
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
