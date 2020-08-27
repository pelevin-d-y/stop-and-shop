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

</style>