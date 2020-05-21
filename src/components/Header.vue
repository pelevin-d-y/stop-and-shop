<template>
  <header>
    <div class="container">
      <div :class="{ visible: isOpen, overlay: true}">
        <div class="dialog">
          <MobileMenu :isOpen="isOpen" />
        </div>
      </div>
      <div class="header_wrapper">
        <a href="#" class="menu-btn" @click.prevent="isOpen = !isOpen">
          <span></span>
        </a>
        <div @click="isOpen = !isOpen" :class="{ visible: isOpen, cross: true}">
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
        <form class="search" action="/search">
          <input type="search" placeholder="Search" />
        </form>
      </div>
    </div>
  </header>
</template>

<script>
import MobileMenu from "@/components/MobileMenu";
export default {
  data: () => ({
    isOpen: false
  }),
  name: "Header",
  components: {
    MobileMenu
  }
};
</script>

<style lang="scss">
header {
  background: white;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.dialog {
  position: relative;
  max-width: 375px;
  height: 100%;
  margin: 0 auto;
  width: auto;
  top: 0%;
  left: 0%;
  transform: translate(0, 0);
}
.cross {
  opacity: 0;
  position: fixed;
  right: 37%;
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
  margin-top: -1px;
  left: 50%;
  margin-left: -10px;
  width: 20px;
  height: 2px;
  background-color: #222;
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
  display: flex;
  align-items: center;
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
  padding-left: 3px;
  padding-right: 5px;
  cursor: pointer;
}

.header_basket-price {
  color: white;
  font-weight: 900;
}

.header_search {
  margin-top: 10px;
  .search {
    position: relative;
    input {
      border-radius: 10px;
      border: solid 2px #d9d9d6;
      background-color: #f4f4f4;
      box-sizing: border-box;
      width: 100%;
      padding-left: 34px;
      padding-top: 10px;
      padding-bottom: 10px;
      font-family: Effra;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.36;
      letter-spacing: normal;
      color: #001919;
    }
  }
  .search:after {
    position: absolute;
    top: 14px;
    left: 8px;
    display: block;
    content: "";
    width: 16px;
    height: 16px;
    background: url("../assets/images/Search.svg") center no-repeat;
  }
}
</style>
