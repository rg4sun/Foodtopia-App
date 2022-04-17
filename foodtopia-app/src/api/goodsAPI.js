// 获取文章相关的 API 接口，都封装在这里
// 导入封装的 axios
import request from '@/utils/request'

export const getGoodsListAPI = function(_page, _limit) {
  return request.get('/goods', {
    params: {
      _page,
      _limit
    }
  })
}
