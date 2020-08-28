<template>
  <div class="mobile_menu-wrapper">
    <a href="#" class="mobile_menu-backlink" @click.prevent="menuHandler('MainMenu')">
      <img :src="require('@/assets/images/icons/arrow-red.svg')" alt="arrow" />
      <div class="backlink-text">Back to Main Menu</div>
    </a>
    <div class="mobile_menu-title">Browse Aisles</div>
    <AislesMenuList :menuHandler="menuHandler" :isOpenMenu="isOpenMenu"/>
  </div>
</template>

<script>
import AislesMenuList from "@/components/AislesMenuList";
export default {
  props: {
    menuHandler: Function,
    isOpenMenu: Function
  },
  name: "AislesMenu",
  components: {
    AislesMenuList
  }
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
