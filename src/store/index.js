import Vue from 'vue'
import Vuex from 'vuex'
import products from './products'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    products: products,
    currentTopFilter: 'produce',
    currentFilter: 'all',
    filteredProducts: []
  },

  getters: {
    getAllProductsInfo: (state) => Object.keys(state.products).map(product => state.products[product].__info),
    getCurrentProducts: (state, getters) => state.products[getters.getTopFilter].data,
    getFilteredProducts: (state) => state.filteredProducts,
    getFilter: (state) => state.currentFilter,
    getTopFilter: (state) => state.currentTopFilter
  },


  mutations: {
    filterProducts(state, {name, topFilter}) {
      const filteredProducts = state.products[topFilter].data.find(product => product.name === name)
      state.filteredProducts = filteredProducts
    },

    setCurrentTopFilter(state, name) {
      state.currentTopFilter = name
    },

    setCurrentFilter(state, name) {
      state.currentFilter = name
    },

    filterProductsBySubfilter(state, {name, filteredProducts}) {
      
      return state.filteredProducts = {
        ...state.filteredProducts,
        cards: filteredProducts.cards.filter(card => card.category === name)
      } 
    }
  },

  actions: {},

})
