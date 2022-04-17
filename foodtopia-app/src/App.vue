<template>
  <div>
    <!-- 路由占位符 -->
    <router-view></router-view>
    <!-- Tabbar 控制路由链接 -->
    <van-tabbar route>
      <van-tabbar-item icon="shop-o" to="/">吃点啥</van-tabbar-item>
      <van-tabbar-item icon="logistics" to="/deliver">帮忙送</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped></style>
