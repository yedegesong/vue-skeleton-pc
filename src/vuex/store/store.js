import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import AppMutation from '../mutations/AppMutation';
const state = {
  token: null,
  globalTitle: '全局数据'
}
const actions = {
  rootIncrement({ commit, state }, params) {
    console.log('全局数据进来'+params)
  }
}

const  mutations = {
  [`SCR0LL_BEHAVIOR`](state, path) {
      state.scrollBehavior.path = path;
  },
  [`SET_SCR0LL_BEHAVIOR`](state, scrollTop) {
    state.scrollBehavior.scrollTop = scrollTop;
  },
  [`SET_SCR0LL_PAGE`](state, page) {
    state.scrollBehavior.page = page;
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    App: {
      namespaced: true,
      ...AppMutation
    }
  }
})
