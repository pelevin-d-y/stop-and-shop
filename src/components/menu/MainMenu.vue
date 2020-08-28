<template>
  <div class="mobile_menu-wrapper">
    <div class="menu-header">
      <div class="menu-header__item">
        <img :src="require('@/assets/images/icons/store-icon.svg')" alt="store">
        <div class="menu-header__item-title">
          Pick-up
        </div>
        <div class="menu-header__item-description">
          264 E. Main Street
        </div>
      </div>
      <div class="menu-header__item">
        <img :src="require('@/assets/images/icons/clock-icon.svg')" alt="store">
        <div class="menu-header__item-title">
          Time Slot
        </div>
        <div class="menu-header__item-description">
          Reserve a Time
        </div>
      </div>
    </div>
    <PrimaryList :menuHandler="menuHandler" />
    <SubList />
    <AccountList/>
  </div>
</template>

<script>
import PrimaryList from '@/components/menu/PrimaryList'
import SubList from '@/components/menu/SubList'
import AccountList from '@/components/menu/AccountList'

export default {
  name: "MobileMenu",
  components: {
    PrimaryList,
    SubList,
    AccountList
  },

  props: {
    menuHandler: Function
  },

  data: () => ({
  }),
};
</script>

<style scoped lang="scss">
.mobile_menu-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background: #ffffff;
}

.menu-header {
  display: flex;
  flex-flow: row nowrap;
  background: #f5f5f5;
  padding: 10px 4px;
}

.menu-header__item {
  padding: 15px 8px 14px;
  width: 100%;
  background: #ffffff;
  text-align: center;

  &:first-child {
    margin-right: 5px;
  }
}

.menu-header__item img {
  display: block;
  margin: 0 auto 3px auto;
}

.menu-header__item-title {
  font-size: 14px;
  line-height: 1.36;
  text-align: center;
  font-weight: bold;
}

.menu-header__item-description {
  font-size: 14px;
  line-height: 1.36;
  text-align: center;
}
</style>
