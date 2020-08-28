<template>
  <ul class="list">
    <li v-for="item in list" :key="item.text" @click="menuHandler(item.id)" class="item">
      <span class="item-text">
        {{item.text}}
      </span> 
      <span v-if="item.icon" class="item-icon" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    menuHandler: Function
  },

  data: () => ({
    list: [
      {
        text: 'Browse Aisles',
        icon: true,
        id: 'AislesMenu'
      },
      {
        text: 'My Shop',
        icon: true,
        id: 'MainMenu'
      },
      {
        text: 'Account',
        icon: false,
        id: 'MainMenu'
      }
    ],
  })
}
</script>

<style scoped lang="scss">
  .list {
    width: 100%;
    border-top: solid 1px #e6e6e6;
  }

  .item {
    position: relative;

    padding: 25px 35px 25px 19px;
    font-size: 26px;
    font-weight: bold;
    letter-spacing: 0.3px;
    color: #001919;
    border-bottom: solid 1px #e6e6e6;
    cursor: pointer;
  }

  .item-icon {
    position: absolute;
    right: 20px;
    top: 29px;

    display: block;
    width: 11px;
    height: 20px;

    background: url('~@/assets/images/icons/side-arrow.svg') no-repeat center/contain;
  }
</style>