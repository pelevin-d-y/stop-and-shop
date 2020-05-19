<template>
  <header>
    <div class="container">
      <div class="header_wrapper">
        <a href="#" class="menu-btn">
          <span></span>
        </a>
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
          <button type="submit" class="search-btn"></button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style lang="scss">
header {
  padding-left: 25px;
  padding-right: 25px;
  background: white;
}
.menu-btn {
  position: relative;
  left: -14px;
  cursor: pointer;
  display: block;
  z-index: 1;
  width: 50px;
  height: 50px;
}

.menu_active {
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
}

.header_basket-price {
  color: white;
  font-weight: 900;
}

.header_search {
  border: 2px solid #d9d9d6;
  border-radius: 10px;
  .search {
    position: relative;
    input {
      border: none;
      width: 100%;
      padding-left: 20px;
    }
    button {
      width: 1%;
      height: 96%;
      position: absolute;
      right: 0;
      border: none;
    }
  }
  .search:after {
    position: absolute;
    top: 2px;
    left: 2px;
    display: block;
    content: "";
    width: 15px;
    height: 15px;
    background: url("../assets/images/Search.svg") center no-repeat;
  }
}
</style>
