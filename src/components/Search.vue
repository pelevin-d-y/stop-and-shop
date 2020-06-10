<template>
  <form class="search" action="/search">
    <input type="search" placeholder="Search" />
  </form>
</template>
<script>
export default {

}
</script>

<style scoped lang="scss">

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