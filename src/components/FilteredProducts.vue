<template>
  <div class="products">
    <div class="container">
      <div class="products-header">
        <div class="search">
          <div class="search-icon">
          </div>
          <div class="search-text">
            Search <span>({{getFilteredProducts.cards.length}})</span>
          </div>
        </div>
        <div class="sort">
          Sort / Filter
        </div>
      </div>
      <div class="products-wrapper">
        <div class="card-item" v-for="(product, index) in getFilteredProducts.cards" :key="product.name + index" >
          <CardFilter :card="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardFilter from "@/components/CardFilter";
import { mapGetters } from 'vuex';

export default {
  name: "FilteredProducts",

  components: {
    CardFilter
  },

  computed: {
    ...mapGetters([
      'getFilteredProducts'
    ])
  },
}
</script>

<style lang="scss" scoped>
.products-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #f5f5f5;
  border-top: solid 1px #d9d9d9;
  border-bottom: solid 1px #d9d9d9;
}

.search-text {
  color: #666666;
  font-family: Effra;
  font-size: 14px;
}

.sort {
  font-size: 16px;
  color: #f50049;
  font-family: Effra;
  font-weight: bold;
}

.search {
  position: relative;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-left: 20px;
}

.search-icon {
  position: absolute;
  top: 0px;
  left: -5px;

  display: block;
  width: 16px;
  height: 16px;
  background: url("../assets/images/Search.svg") center no-repeat;
}
</style>