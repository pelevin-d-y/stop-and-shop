<template>
  <div class="home main">
    <div class="overlay"></div>
    <Header />
    <Produce />
    <Filters />
    <Products v-if="isAll" />
    <FilteredProducts v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Produce from "@/components/Produce";
import Filters from "@/components/Filters";
import Products from "@/components/Products";
import FilteredProducts from "@/components/FilteredProducts";

export default {
  name: "Home",
  components: {
    Header,
    Produce,
    Filters,
    Products,
    FilteredProducts
  },

  computed: {
    isAll() {
      return this.$store.state.currentFilter === 'all';
    }
  }
};
</script>

<style lang="scss">
.main {
  background: #f5f5f5;
}
</style>
