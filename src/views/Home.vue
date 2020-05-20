<template>
  <div class="home main">
    <div class="overlay"></div>
    <Header />
    <Produce />
    <Filters />
    <Products />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Produce from "@/components/Produce";
import Filters from "@/components/Filters";
import Products from "@/components/Products";

export default {
  name: "Home",
  components: {
    Header,
    Produce,
    Filters,
    Products
  }
};
</script>

<style lang="scss">
.main {
  background: #f5f5f5;
}
</style>
