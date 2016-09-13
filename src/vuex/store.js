
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  menuShown: false
}

const mutations = {
  TOGGLE_MENU (state) {
    state.menuShown = !state.menuShown
  },
  SET_MENU (state, { status }) {
    state.menuShown = status
  }
}

const actions = {
  toggleMenu ({ commit }) {
    commit('TOGGLE_MENU')
  },
  hideMenu ({ commit }) {
    commit('SET_MENU', { status: false })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
