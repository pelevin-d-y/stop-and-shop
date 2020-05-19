<template>
  <div class="main">
    <Header />
  </div>
</template>


<script>
import Header from "@/components/Header"; // импорт компонента
export default {
  name: "Main",
  components: {
    Header
  }
};
</script>

<style lang="scss">
.main {
  width: 375px;
  margin: auto;
  background: #f5f5f5;
}
</style>