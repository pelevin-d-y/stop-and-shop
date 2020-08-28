<template>
  <div class="mobile_menu-container" :class="{ menu_active: isOpen }">
    <button class="cross-btn" @click="menuHandler">
      <img :src="require('@/assets/images/icons/cross.svg')" alt="cross">
    </button>
    <div class="transition-wrapper">
      <transition name="slide-main">
        <MainMenu :menuHandler="changeMenu" v-show="currentMenu==='MainMenu'" key='1' />
      </transition>
      <transition name="slide-aisles">
        <AislesMenu :menuHandler="changeMenu" :isOpenMenu="menuHandler" v-show="currentMenu==='AislesMenu'" key='2' />
      </transition>
    </div>
  </div>
</template>

<script>
import MainMenu from '@/components/menu/MainMenu'
import AislesMenu from '@/components/menu/AislesMenu'

export default {
  name: "MobileMenu",
  props: {
    isOpen: Boolean,
    menuHandler: Function
  },
  components: {
    MainMenu,
    AislesMenu
  },

  data: () => ({
    currentMenu: 'AislesMenu'
  }),

  methods: {
    changeMenu(id) {
      if (id) {
        return this.currentMenu = id
      }

      this.currentMenu = this.currentMenu === 'AislesMenu' ? 'MainMenu' : 'AislesMenu'
    },
  }
};
</script>

<style scoped lang="scss">
.mobile_menu-container {
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;

  width: 90%;
  max-width: 315px;
  height: 100vh;
  overflow: visible;

  background: white;
  transform: translateX(-100%);
  transition: all 0.3s ease-in-out;
}

.transition-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100%;
}

.cross-btn {
  position: absolute;
  right: -40px;
  top: 11px;

  width: 33px;
  height: 33px;
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

.slide-main-enter {
  transform: translateX(100%) !important;
}

.slide-main-enter-active {
  transition: all .3s linear;
  transform: translateX(0);
}

.slide-main-leave-active {
  transition: all .3s linear;
  transform: translateX(-100%);
}

.slide-aisles-enter {
  transform: translateX(100%) !important;
}

.slide-aisles-enter-active {
  transition: all .3s linear;
  transform: translateX(0);
}


.slide-aisles-leave-active {
  transition: all .3s linear;
  transform: translateX(-100%);
}
</style>
