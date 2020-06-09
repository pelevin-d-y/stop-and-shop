<template>
   <form class="search" action="/search">
    <autocomplete 
      :search="search"
      :get-result-value="getResultValue"
      @submit="handleSubmit"
    >
      <template 
        #result="{ result, props }"
      >
        <li
          v-bind="props"
          class="autocomplete-result"
        >
          <div class="autocomplete-title">
            {{ result.type }}    
          </div>
          <div>
            {{ result.quantity }}    
          </div>
        </li>
      </template>
    </autocomplete>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Autocomplete from '@trevoreyre/autocomplete-vue'

export default {
  components: {
    Autocomplete
  },

  data: () => ({
    productsArray: []
  }),

  computed: {
    ...mapGetters([
      'getFilteredProducts'
    ])
  },

  methods: {
    ...mapMutations([
      'filterProductsByType'
    ]),

    search(input) {
      const products = this.filterArray()
      if (input.length < 1) return products
      return products.filter(product => {
        return product.type.toLowerCase()
          .startsWith(input.toLowerCase())
      })
    },

    filterArray() {
      let productTypes = [...new Set(this.getFilteredProducts.cards.map(card => card.type))]
      productTypes = productTypes.map(productType => {
        let quantity = this.getFilteredProducts.cards.filter(({type}) => productType === type).length
        return {
          type: productType,
          quantity
        }
      })
     
      return productTypes
    },

    getResultValue(result) {
      return result.type
    },

    handleSubmit(result) {
      this.filterProductsByType({type: result.type, products: this.getFilteredProducts})
    }
  }
}
</script>

<style scoped lang="scss">
.autocomplete-result {
  background: #ffffff;
}

.search {
  position: relative;
  input {
    border-radius: 10px;
    border: solid 2px #d9d9d6;
    background-color: #f4f4f4;
    box-sizing: border-box;
    width: 100%;
    padding-left: 34px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: Effra;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    color: #001919;
  }
}
.search:after {
  position: absolute;
  top: 14px;
  left: 8px;
  display: block;
  content: "";
  width: 16px;
  height: 16px;
  background: url("../assets/images/Search.svg") center no-repeat;
}
</style>