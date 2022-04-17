<template>
  <div class="home-container">
    <!-- fixed 默认值为 false，注意改置要v-bind，不然只是传入字符串 -->
    <!-- 改默认值，就直接加上属性就好 -->
    <!-- <van-nav-bar title="Foodtipia • 食托邦" :fixed="true"/> -->
    <van-nav-bar title="Foodtipia • 食托邦" fixed sticky />
    <form action="/">
      <van-search show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
    </form>
    <van-tabs sticky>
      <van-tab :title="item" v-for="(item, i) in canteenId" :key="i">
        <!-- 下拉刷新 -->
        <!-- isLoading 改为 refreshing -->
        <van-pull-refresh v-model="isLoading" :disabled="finished" @refresh="onRefresh">
          <!-- 上拉加载更多 -->
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <!-- 用 ArticleInfo 组件渲染文章列表 -->
            <!-- 这里不是通过路由跳转渲染的 -->
            <!-- title父传子，自定义属性 -->
            <Canteen v-for="item in goodsList" :key="item.id" :title="item.title" :rmb="item.rmb" :like="item.like" :time="item.time" :cover="item.cover"></Canteen>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// 导入封装的 axios
// import request from '@/utils/request'
// 按需导入 API 接口
import { getGoodsListAPI } from '@/api/goodsAPI'
// 导入渲染文章列表的组件
import Canteen from '@/components/Canteen/Canteen.vue'

export default {
  name: 'Foodtopia-Home',
  props: {
    canteenId: {
      type: Array,
      default: () => {
        return ['三餐', '五餐', '美食城', '教工餐厅']
      }
    }
  },
  data() {
    return {
      page: 1,
      limit: 5,
      goodsList: [],
      // 上拉加载控制
      loading: true, // 默认初次加载使用created加载，不用onload
      finished: false,
      // 下拉刷新控制
      isLoading: false,
      refreshing: false
    }
  },
  components: {
    Canteen
  },
  created() {
    this.initGoodsList()
  },
  methods: {
    async initGoodsList(isRefresh) {
      // const { data: res } = await request.get('/articles', {
      //   params: {
      //     _page: this.page,
      //     _limit: this.limit
      //   }
      // })
      // 获取数据，改用封装的 api 函数
      console.log(this.limit)
      const { data: res } = await getGoodsListAPI(this.page, this.limit)
      console.log(res)

      // debugger

      if (isRefresh) {
        // 新数据加载到头部
        this.goodsList = [...res, ...this.goodsList]
        this.isLoading = false
      } else {
        // 新数据加载到尾部
        this.goodsList = [...this.goodsList, ...res]
        this.loading = false // 初次加载完后，接下来要交给 onLoad函数控制
      }
      // console.log(this.goodsList)
      if (res.length === 0) {
        // 所有数据加载完毕
        this.finished = true
      }
    },
    onLoad() {
      console.log('触发 onLoad 上拉加载更多')
      this.page++
      // 重现获取数据
      this.initGoodsList()
    },
    onRefresh() {
      console.log('触发 onRefresh 下拉刷新')
      this.page++
      this.initGoodsList(true)
    },
    onSearch(val) {
      // Toast(val);
    },
    onCancel() {
      // Toast('取消');
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  // ⚠️ 使用定制主题更佳（后续学）
  // 这是把 nav 和 tab 的元素高度，加padding把他们空间挤掉
  // 不然会挡住最上方、最下方内容
  // 不用这个的话，可以加入
  // 不用 padding 实现的话，用 vant自带的 placeholder属性，给 nav 和 tab都加上
  padding: 46px 0 50px 0;

  /deep/ .van-nav-bar__title {
    color: antiquewhite;
  }
}
</style>
