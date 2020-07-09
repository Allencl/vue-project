import axios from 'axios'
import qs from 'qs'
import { Loading } from 'element-ui'


axios.defaults.baseURL = "http://183.195.194.250:8914/merger-mobile"; //动态配置网络请求不同环境下的地址
axios.defaults.withCredentials = true; //让ajax携带cookie


// 请求拦截
let instance = axios.create();

instance.interceptors.request.use(config => {
  // 1. 这个位置就请求前最后的配置
  // 2. 当然你也可以在这个位置 加入你的后端需要的用户授权信息
  config.headers["webClient"] = 1; // 后台要的
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(response => {
  // 请求成功
  // 1. 根据自己项目需求定制自己的拦截
  // 2. 然后返回数据
  if (response.status === 200) {
    if (response.data.success === undefined) {
      return response;
    } else {
      if (response.data.success) {
        return response.data
      } else {
        if (response.data.data === '4') {
          location.href = '/login'
        }
      }

    }

  }
}, error => {
  // 请求失败
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        alert('error-400')
        // 对400错误您的处理\
        break
      case 401:
        // 对 401 错误进行处理
        alert('error-401')
        break
      default:
        // 如果以上都不是的处理
        alert('error')
        return Promise.reject(error);
    }
  }

})

export default {
  get (url, params = {}) { //context vue 实例
    return new Promise((resolve, reject) => {
      const _loading = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      instance.get(url, { params: params }).then(res => {
        _loading.close();
        resolve(res);
      }).catch(err => {

        reject(err)
      })
    })
  },
  post (url, params = {}, option = {}) {

    // if (userToken) {

    //   Object.assign(params, { userToken: userToken }); //合并两个对象

    // }
    return new Promise((resolve, reject) => {

      const _loading = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });


      instance.post(url, (option["formData"] ? params : qs.stringify(params))).then(res => { //序列化字符串
        _loading.close();
        resolve(res)
      }).catch(err => {
        reject(err)
      })

    })

  }
}


