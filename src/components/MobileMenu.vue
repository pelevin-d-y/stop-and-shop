<template>
  <div class="mobile_menu-wrapper" :class="{ menu_active: isOpen }">
    <button class="cross-btn">
      <img src="../assets/images/cross.svg" class="" alt="cross">
    </button>
    <div class="menu-header">
      <div class="menu-header__item">
        <img src="../assets/images/store-icon.svg" alt="store">
        <div class="menu-header__item-title">
          Pick-up
        </div>
        <div class="menu-header__item-description">
          264 E. Main Street
        </div>
      </div>
      <div class="menu-header__item">
        <img src="../assets/images/clock-icon.svg" alt="store">
        <div class="menu-header__item-title">
          Time Slot
        </div>
        <div class="menu-header__item-description">
          Reserve a Time
        </div>
      </div>
    </div>
    <PrimaryList />
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
  props: {
    isOpen: Boolean,
    menuHandler: Function
  },
  components: {
    PrimaryList,
    SubList,
    AccountList
  },

  data: () => ({
  })
};
</script>

<style scoped lang="scss">
.mobile_menu-wrapper {
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;

  width: 90%;
  max-width: 315px;
  height: 100vh;

  background: white;
  transform: translateX(-100%);
  transition: all 0.3s ease-in-out;
}

.cross-btn {
  position: absolute;
  right: -46px;
  top: 11px;

  width: 36px;
  height: 36px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

.cross-btn img {
  display: block;
  width: 100%;
  height: 100%;
}


</style>
