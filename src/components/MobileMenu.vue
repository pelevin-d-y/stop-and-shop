<template>
  <div class="mobile_menu-wrapper" :class="{ menu_active: isOpen }">
    <a href="#" class="mobile_menu-backlink" @click.prevent="menuHandler">
      <img src="../assets/images/arrow-red.svg" alt="arrow" />
      <div class="backlink-text">Back to Main Menu</div>
    </a>
    <div class="mobile_menu-title">Browse Aisles</div>
    <MobileMenuList />
  </div>
</template>

<script>
import MobileMenuList from "@/components/MobileMenuList";
export default {
  props: {
    isOpen: Boolean,
    menuHandler: Function
  },
  name: "MobileMenu",
  components: {
    MobileMenuList
  }
};
</script>

<style lang="scss">
.mobile_menu-wrapper {
  opacity: 0;
  width: 90%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  background: white;
  transform: translateX(-100%);
  transition: all 0.3s ease-in-out;
}
.mobile_menu-backlink {
  display: flex;
  align-items: center;
  background: #f0f0f0;
  padding-top: 26px;
  padding-bottom: 26px;
  padding-left: 20px;
}
.backlink-text {
  font-family: Effra;
  margin-left: 15px;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: normal;
  color: #464646;
}

.mobile_menu-title {
  font-family: Effra;
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #001919;
  border-bottom: solid 1px #d9d9d6;
  padding-top: 26px;
  padding-bottom: 22px;
  padding-left: 20px;
}
</style>
