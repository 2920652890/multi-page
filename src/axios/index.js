import axios from 'axios'
import qs from 'qs'
import prod from '@/configs/prod.js'

const baseUrl = process.env.NODE_ENV ===  'production' ? prod.baseUrl : ''

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = baseUrl
axios.defaults.withCredentials = false

let init = {
  app:'s',
  time:new Date().getTime(),
  sign:'000009'
}

//axios.defaults.transformRequest = function _transformRequest (params = {}) { }

axios.defaults.transformResponse = (res) => {

  try {
    res = JSON.parse(res)
  } catch (e) {
    return Promise.reject(e)
  }

  if(res.code === undefined){
    return res
  }

  res.code = res.code * 1
  // 登录过期
  if (res.code === 10003){
    return Promise.reject(res.msg)
  }

  if (res.code !== 0) {
    return Promise.reject(res)
  } else {
    return res
  }
}
function get(url, params) {
  return new Promise((resolve, reject) => {
    params._t = new Date().getTime()
    axios.get(url, {
      params
    }).then(res => {
      resolve(res.data)
    }, err => {
      reject(err)
    }).catch(err => {
      reject(err)
    })
  })
}
function post (url,params) {
  return new Promise((resolve, reject) => {
    params = Object.assign({},init,params)
    axios.post(url, qs.stringify(params))
    .then(res => {
      resolve(res.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

function uploadFiles (url,data) {
  return new Promise((resolve, reject) => {
    let obj = Object.assign(data,init)
    let params = new FormData()

    Object.keys(obj).forEach((target)=>{
      params.append(target,data[target])
    })

    let config = {
      headers: {'Content-Type': 'multipart/form-data'}
    }
    axios.post(url, params, config)
    .then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}
function postJSON(url, params) {
  return new Promise((resolve, reject) => {
    let config = {
      headers: {'Content-Type': 'application/json'}
    }
    axios.post(url,params, config)
    .then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}
export default {
  post,
  get,
  postJSON,
  /**
   * 上传多张图片，公用
   */
  uploadFiles
}


