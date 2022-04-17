// router 模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login/Login.vue'
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/user', component: User },
  // 具名路由
  { path: '/login', component: Login, name: 'login' }
]

const router = new VueRouter({
  routes
})

export default router
