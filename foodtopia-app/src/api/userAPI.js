// 登录的 API 接口
import request from '@/utils/request'

export const loginAPI = (data) => {
  return request.post('/user_authorization', data)
}
