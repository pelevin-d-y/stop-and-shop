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
      'Notifications',
      'Refer-a-friend',
      'Give Us Feedback',
      'Logout'
    ],
  })
}
</script>

<style scoped lang="scss">

</style>