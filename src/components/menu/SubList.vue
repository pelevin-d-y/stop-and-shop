<template>
  <ul class="list">
    <li v-for="item in list" :key="item" class="item">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  data: () => ({
    list: [
      'Home',
      'Weekly Ad',
      'Coupons',
      'Recipes',
      'Rewards',
      'Past Purchases',
      'Pharmacy'
    ],
  })
}
</script>

<style scoped lang="scss">
  .list {
    padding: 0 20px 0 20px;
    background: #f5f5f5;

    border-bottom: solid 5px #d9d9d6;
  }

  .item {
    padding: 20px 0;

    font-size: 16px;
    font-weight: bold;
    line-height: 1.31;
    color: #e0004d;

    border-bottom: solid 1px #d9d9d6;
    cursor: pointer;

    &:last-child {
      border-bottom: none;
    }
  }
</style>