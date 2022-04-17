// 导入封装的 axios
import request from '@/utils/request'

export const getDeliverListAPI = (_page, _limit) => {
  return request.get('/delivery', {
    params: {
      _page,
      _limit
    }
  })
}
