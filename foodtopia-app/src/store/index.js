// vuex 模块
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 当 new Vuex.Store() 时，需要读取 localStorage 中的数据，将读取的结果作为 state 的初始值
// 初始的 state 对象
let initState = {
  // 用来存储 token 信息的对象，将来这个对象中会包含两个属性 { token, refresh_token }
  // token 的信息对象
  tokenInfo: {}
}

// 读取 localStorage 中本地存储的 state 字符串：
const stateStr = localStorage.getItem('state')

// 如果 stateStr 的值存在，则证明本地存储中有之前存储的 state 数据，需要转换后赋值给 initState：
if (stateStr) {
  // 加载本地的数据
  initState = JSON.parse(stateStr)
}

export default new Vuex.Store({
  state: initState,
  mutations: {
    // 更新 tokenInfo 数据的方法
    updateTokenInfo(state, payload) {
      // 把提交过来的 payload 对象，作为 tokenInfo 的值
      state.tokenInfo = payload

      // 测试 state 中是否有数据
      console.log(state)

      // 如果希望在 Mutation A 中调用 Mutation B，需要通过 this.commit() 方法来实现
      // this 表示当前的 new 出来的 store 实例对象
      this.commit('saveStateToStorage')
    },
    // 将 state 持久化存储到本地
    saveStateToStorage(state) {
      localStorage.setItem('state', JSON.stringify(state))
    }
  }
})
