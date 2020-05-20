import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    products: [
      {
        name: 'Fresh Fruit',
        key: 'Fresh Fruit',
        cards: [
          {
            name: "Dricoll's Strawberries asdasd ada sda s",
            cost: "$2.99",
            description: '16 oz pkg | $0.25 / oz',
            image: "strawberry.jpg"
          },
          {
            name: "Oranges Navel",
            cost: "$4.99",
            description: '8 oz bag | $4.00 / lb',
            image: "strawberry.jpg"
          },
          {
            name: "Oranges",
            cost: "$4.99",
            description: '8 oz bag | $4.00 / lb',
            image: "strawberry.jpg"
          },
        ]
      },
      {
        name: 'Fresh Vegetables',
        key: 'Fresh Vegetables',
        cards: [
          {
            name: "Asparagus",
            cost: "$2.99",
            description: '16 oz pkg | $0.25 / oz',
            image: "asparagus.jpg"
          },
          {
            name: "Oranges Navel",
            cost: "$4.99",
            description: '8 oz bag | $4.00 / lb',
            image: "asparagus.jpg"
          },
          {
            name: "Dricoll's Strawberries",
            cost: "$4.99",
            description: '8 oz bag | $4.00 / lb',
            image: "asparagus.jpg"
          },
        ]
      },
      {
        name: 'Sponsored Produce',
        key: 'Sponsored Produce',
        cards: [
          {
            name: "Driscoll's Blueberries Organic",
            cost: "$2.99",
            description: '16 oz pkg | $0.25 / oz',
            image: "blueberries.jpg"
          },
          {
            name: "Oranges Navel",
            cost: "$4.99",
            description: '8 oz bag | $4.00 / lb',
            image: "blueberries.jpg"
          },
          {
            name: "Dricoll's Strawberries",
            cost: "$4.99",
            description: '8 oz bag | $4.00 / lb',
            image: "blueberries.jpg"
          },
        ]
      },
      {
        name: 'Fresh Herbs',
        key: 'Fresh Herbs',
        cards: [
          {
            name: "Cilantro",
            cost: "$2.99",
            description: '16 oz pkg | $0.25 / oz',
            image: "cilantro.jpg"
          },
          {
            name: "Oranges Navel",
            cost: "$4.99",
            description: '8 oz bag | $4.00 / lb',
            image: "cilantro.jpg"
          },
          {
            name: "Dricoll's Strawberries",
            cost: "$4.99",
            description: '8 oz bag | $4.00 / lb',
            image: "cilantro.jpg"
          },
        ]
      },
      {
        name: 'Fresh Juice & Juice Blends',
        key: 'Fresh Juice & Juice Blends',
        cards: [
          {
            name: "Cilantro",
            cost: "$2.99",
            description: '16 oz pkg | $0.25 / oz',
            image: "parcley.jpg"
          },
          {
            name: "Oranges Navel",
            cost: "$4.99",
            description: '8 oz bag | $4.00 / lb',
            image: "parcley.jpg"
          },
          {
            name: "Dricoll's Strawberries",
            cost: "$4.99",
            description: '8 oz bag | $4.00 / lb',
            image: "parcley.jpg"
          },
        ]
      }
    ],
    currentFilter: 'all',
    filteredProducts: []
  },

  getters: {
    getProducts: (state) => state.products,
    getFilteredProducts: (state) => state.filteredProducts,
    getFilter: (state) => state.currentFilter
  },


  mutations: {
    filterProducts(state, name) {
      const filteredProducts = state.products.find(product => product.name === name)
      state.filteredProducts = filteredProducts
    },

    setCurrentFilter(state, name) {
      state.currentFilter = name
      console.log('state.currentFilter', state.currentFilter )
    }
  },

  actions: {},

})