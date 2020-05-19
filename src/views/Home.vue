<template>
  <div class="home main">
    <Header />
    <Produce />
    <Filters />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Produce from "@/components/Produce";
import Filters from "@/components/Filters";

export default {
  name: "Home",
  components: {
    Header,
    Produce,
    Filters
  }
};
</script>

<style lang="scss">
.main {
  background: #f5f5f5;
}
</style>
