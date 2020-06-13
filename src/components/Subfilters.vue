<template>
  <div class="subfilters">
    <div class="title">
      {{getFilteredProducts.name}}
    </div>
    <ul class="subfilters__list">
      <li class="subfilters__item" 
        v-for="(quantity, name, index) in categories" 
        :key="name+index"
        @click="categoryClick(name)">
        <div class="name">
          {{ name }}
        </div>
        <div class="quantity">
          {{ quantity }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  props: {
    searchValue: String
  },

  computed: {
    ...mapGetters([
      'getSubFilter',
      'getTopFilter',
      'getFilter',
      'getFilteredProducts'
    ]),

    categories: function () {
      let categories = this.getFilteredProducts.cards.reduce((counts, card) => {
        counts[card.category] = counts[card.category] ? ++counts[card.category] : 1;
        return counts
      }, {})

      let searchCategories = {}

      Object.entries(categories).map(([key, value]) => {
        if (key.toLowerCase().includes(this.searchValue.toLowerCase())) {
          searchCategories[key] = value
        }
      })
      
      return searchCategories
    }
  },

  methods: {
    ...mapMutations([
      'filterProductsBySubfilter',
    ]),

    categoryClick(name) {
      this.filterProductsBySubfilter({
        name, 
        topFilter: this.getTopFilter,
        middleFilter: this.getFilter
      })
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.subfilters {
  padding: 20px;
}

.title {
  padding-bottom: 10px;

  border-bottom: 1px solid #D9D9D9;
  font-size: 14px;
  color: #63666A;
  text-align: left;
}

.subfilters__item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  padding-top: 12px;
  padding-bottom: 12px;

  border-bottom: 1px solid #D9D9D9;
  font-size: 16px;
  color: #333333;
  cursor: pointer;
}

.quantity {
  color: #F50049;
}
</style>