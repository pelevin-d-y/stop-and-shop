<template>
  <div class="products">
    <div class="container">
      <div class="products-header">
        <div class="search">
          <div class="search-icon">
          </div>
          <div class="search-text">
            Search <span>(149)</span>
          </div>
        </div>
        <div class="sort">
          Sort / Filter
        </div>
      </div>
      <div class="products-wrapper">
        <div class="card-item" v-for="product in getFilteredProducts" :key="product.name" >
          <CardFilter />
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

  background-color: #f5f5f5;
  border-top: solid 1px #d9d9d9;
  border-bottom: solid 1px #d9d9d9;
}
</style>