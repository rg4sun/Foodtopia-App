// 自己封装的 axios
// 用于提高复用性
import axios from 'axios'

// 基于 Vant 的 Toast 轻提示 组件，可以方便的展示 loading 效果
import { Toast } from 'vant'

// 导入 vuex 的模块：
import store from '@/store/index'

// 调用 axios.create() 方法，创建 axios 的实例对象
const instance = axios.create({
  // 请求根路径
  // 测试用的api务器，上线时请换成真实服务器
  baseURL: 'http://192.168.3.3:7777/api'
})

// 基于拦截器实现 loading 效果
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 展示 loading 效果
    Toast.loading({
      message: 'wow 正在服务器挖数据...', // 文本内容
      duration: 0 // 展示时长(ms)，值为 0 时，toast 不会消失
    })
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 隐藏 loading 效果
    Toast.clear()
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 基于拦截器添加 token 认证
instance.interceptors.request.use(
  (config) => {
    // 1. 获取 token 值
    const tokenStr = store.state.tokenInfo.token
    // 2. 判断 tokenStr 的值是否为空
    if (tokenStr) {
      // 3. 添加身份认证字段
      config.headers.Authorization = `Bearer ${tokenStr}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
