
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  menuShown: false
}

const mutations = {
  TOGGLE_MENU (state) {
    state.menuShown = !state.menuShown
  }
}

const actions = {
  toggleMenu ({ commit }) {
    commit('TOGGLE_MENU')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
