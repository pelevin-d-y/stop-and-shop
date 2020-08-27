<template>
  <ul class="list">
    <li v-for="item in list" :key="item.text" class="item">
      <span class="item-text">
        {{item.text}}
      </span> 
      <span v-if="item.icon" class="item-icon" />
    </li>
  </ul>
</template>

<script>
export default {
  data: () => ({
    list: [
      {
        text: 'Browse Aisles',
        icon: true
      },
      {
        text: 'My Shop',
        icon: true
      },
      {
        text: 'Account',
        icon: false
      }
    ],
  })
}
</script>

<style scoped lang="scss">

</style>