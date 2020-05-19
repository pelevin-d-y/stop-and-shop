import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  getters: {
    getTest: (state) => state.test
  },

  state: {
    test: 'Testaaaa'
  },

  mutations: {},

  actions: {},

})