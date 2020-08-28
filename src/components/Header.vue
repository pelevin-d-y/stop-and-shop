<template>
  <header class="sticky">
    <div class="container">
      <div :class="{ visible: isOpen, overlay: true}" ref="overlay" @click="overlayClick">        
        <MobileMenu :isOpen="isOpen" :menuHandler="menuHandler" />
      </div>
      <div class="header_wrapper">
        <a href="#" class="menu-btn" @click.prevent="menuHandler">
          <span><img src="../assets/images/icons/menu-button.svg" alt="cross" /></span>
        </a>
        <div class="header-logo__wrapper">
          <div v-if="isScrolled" class="header_search header_logo-search">
            <search />
          </div>
          <div v-else class="header_logo">
            <img src="../assets/images/icons/Logo.svg" alt="logo" />
          </div>
        </div>
        <div class="header_basket">
          <div class="header_basket-price">$12.97</div>
          <div class="header_basket-img">
            <img src="../assets/images/icons/Cart.svg" alt="basket-img" />
          </div>
        </div>
      </div>
      <div v-if="!isScrolled" class="header_search">
        <search />
      </div>
    </div>
  </header>
</template>

<script>
import MobileMenu from "@/components/menu/MobileMenu";
import Search from "@/components/Search";
import { mapMutations } from 'vuex';

export default {
  name: "Header",

  data: () => ({
    isOpen: true,
    isScrolled: false
  }),

  components: {
    MobileMenu,
    Search
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },

  methods: {
    ...mapMutations([
      'changeIsMiniHeader'
    ]),

    menuHandler() {
      this.isOpen = !this.isOpen
    },

    overlayClick(evt) {
      if (evt.target === this.$refs.overlay) {
        this.menuHandler()
      }
    },

    onScroll() {
      this.isScrolled = pageYOffset >= 210 ? true : false 
      this.changeIsMiniHeader(this.isScrolled)
    },
  }
};
</script>

<style lang="scss" scoped>
header {
  background: white;
  padding: 20px;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;

  width: 100%;
}

.menu-btn {
  position: relative;
  left: -14px;
  cursor: pointer;
  display: block;
  z-index: 0;
  width: 50px;
  height: 50px;
}

.menu_active {
  opacity: 1;
  transform: translateX(0%) !important;
}

.menu-btn span,
.menu-btn span::before,
.menu-btn span::after {
  position: absolute;
  top: 50%;
  margin-top: -9px;
  left: 50%;
  margin-left: -10px;
  width: 20px;
  height: 2px;
}

.menu-btn span::before,
.menu-btn span::after {
  content: "";
  display: block;
  transition: 0.5s;
}

.menu-btn span::before {
  transform: translateY(-5px);
}

.menu-btn span::after {
  transform: translateY(5px);
}

.menu-btn_active span {
  height: 0;
}

.menu-btn_active span:before {
  transform: rotate(45deg);
}

.menu-btn_active span:after {
  transform: rotate(-45deg);
}

.header_wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.header_logo {
  margin-left: -10px;
}

.header-logo__wrapper {
  width: 100%;
  padding-right: 10px;
}

.header_basket {
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  width: 99px;
  height: 35px;
  align-items: center;
  background: #e0004d;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  cursor: pointer;
}

.header_basket-price {
  color: white;
  font-weight: 900;
}

.header_search {
  margin-top: 10px;
}

.header_logo-search {
  margin-top: 0;
}
</style>
