<template>
  <div class="search-page">
    <div class="search-input">
      <div class="container search__container">
        <input class="input" type="text">
        <router-link to="/" class="close"></router-link>
      </div>
    </div>
    <Subfilters />
  </div>
</template>

<script>
import Subfilters from '@/components/Subfilters'

export default {
  name: 'searchPage',

  components: {
    Subfilters
  }
}
</script>

<style lang="scss" scoped>
.search-input {
  padding: 10px 20px;
  background: #f5f5f5;
}

.input {
  position: relative;
  padding-left: 40px;
  width: 100%;
  height: 44px;

  font-size: 16px;
  border: 2px solid #63666A;
  border-radius: 10px;
}

.search__container {
  display: flex;
  flex-flow: row nowrap;
}

.search__container:after {
  content: "";
  position: absolute;
  top: 14px;
  left: 13px;

  display: block;
  width: 16px;
  height: 16px;
  background: url("../assets/images/Search.svg") center no-repeat;
}

.close {
  display: block;
  width: 35px;
  height: 35px;
  margin-top: 3px;
  margin-left: 10px;

  background: url("../assets/images/cross-b.svg") center no-repeat;
}
</style>