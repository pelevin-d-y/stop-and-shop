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
  .list {
    padding: 0 20px;
  }

  .item {
    padding: 16px 0;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.2px;
    color: #63666a;

    cursor: pointer;
  }
</style>