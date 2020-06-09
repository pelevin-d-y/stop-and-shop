<template>
  <header>
    <div class="container">
      <div :class="{ visible: isOpen, overlay: true}" ref="overlay" @click="overlayClick">
        <div class="dialog">
          <MobileMenu :isOpen="isOpen" :menuHandler="menuHandler" />
        </div>
      </div>
      <div class="header_wrapper">
        <a href="#" class="menu-btn" @click.prevent="menuHandler">
          <span><img src="../assets/images/menu-button.svg" alt="cross" /></span>
        </a>
        <div @click="menuHandler" :class="{ visible: isOpen, cross: true}">
          <div class="cross-img">
            <img src="../assets/images/cross.svg" alt="cross" />
          </div>
        </div>
        <div class="header_logo">
          <img src="../assets/images/Logo.svg" alt="logo" />
        </div>
        <div class="header_basket">
          <div class="header_basket-price">$12.97</div>
          <div class="header_basket-img">
            <img src="../assets/images/Cart.svg" alt="basket-img" />
          </div>
        </div>
      </div>
      <div class="header_search">
        <search />
      </div>
    </div>
  </header>
</template>

<script>
import MobileMenu from "@/components/MobileMenu";
import Search from "@/components/Search";

export default {
  name: "Header",

  data: () => ({
    isOpen: false
  }),

  components: {
    MobileMenu,
    Search
  },

  methods: {
    menuHandler() {
      this.isOpen = !this.isOpen
    },

    overlayClick(evt) {
      if (evt.target === this.$refs.overlay) {
        this.menuHandler()
      }
    },
  }
};
</script>

<style lang="scss">
header {
  background: white;
  padding: 20px;
}
.dialog {
  position: relative;
  margin: 0 auto;
  top: 0%;
  left: 0%;
  transform: translate(0, 0);
}
.cross {
  opacity: 0;
  position: absolute;
  right: -14px;
  z-index: 0;
  cursor: pointer;
  transition: 0.3s;
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
</style>