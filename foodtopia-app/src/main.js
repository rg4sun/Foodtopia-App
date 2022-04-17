import Vue from 'vue'
import App from './App.vue'
// 导入路由组件
import router from './router'

// 导入所有 Vant 组件
import Vant from 'vant'
import 'vant/lib/index.css'

// 导入自己写的 theme 样式表，css/less均可
import './theme.css'

// rem 布局适配
// lib-flexible 用于动态设置 rem 基准值
import 'amfe-flexible'

Vue.config.productionTip = false

// 挂载 Vant
Vue.use(Vant)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
