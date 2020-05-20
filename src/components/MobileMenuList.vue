<template>
  <ul class="mobile_menu-list">
    <a href="#">
      <li class="dish_item">
        <div class="dish_item-img">
          <img src="../assets/images/dish-1.svg" alt="dish" />
        </div>
        <div class="dish_item-text">Meal Solutions & Kits</div>
      </li>
    </a>
    <a href="#">
      <li class="dish_item">
        <div class="dish_item-img">
          <img src="../assets/images/dish-2.svg" alt="dish" />
        </div>
        <div class="dish_item-text">Produce</div>
      </li>
    </a>
    <a href="#">
      <li class="dish_item">
        <div class="dish_item-img">
          <img src="../assets/images/dish-3.svg" alt="dish" />
        </div>
        <div class="dish_item-text">Meat</div>
      </li>
    </a>
    <a href="#">
      <li class="dish_item">
        <div class="dish_item-img">
          <img src="../assets/images/dish-4.svg" alt="dish" />
        </div>
        <div class="dish_item-text">Seafood</div>
      </li>
    </a>
    <a href="#">
      <li class="dish_item">
        <div class="dish_item-img">
          <img src="../assets/images/dish-5.svg" alt="dish" />
        </div>
        <div class="dish_item-text">Deli</div>
      </li>
    </a>
    <a href="#">
      <li class="dish_item">
        <div class="dish_item-img">
          <img src="../assets/images/dish-6.svg" alt="dish" />
        </div>
        <div class="dish_item-text">Dairy</div>
      </li>
    </a>
    <a href="#">
      <li class="dish_item">
        <div class="dish_item-img">
          <img src="../assets/images/dish-7.svg" alt="dish" />
        </div>
        <div class="dish_item-text">Beverages</div>
      </li>
    </a>
    <a href="#">
      <li class="dish_item">
        <div class="dish_item-img">
          <img src="../assets/images/dish-8.svg" alt="dish" />
        </div>
        <div class="dish_item-text">Bread & Bakery</div>
      </li>
    </a>
    <a href="#">
      <li class="dish_item">
        <div class="dish_item-img">
          <img src="../assets/images/dish-9.svg" alt="dish" />
        </div>
        <div class="dish_item-text">Frozen</div>
      </li>
    </a>
    <a href="#">
      <li class="dish_item">
        <div class="dish_item-img">
          <img src="../assets/images/dish-10.svg" alt="dish" />
        </div>
        <div class="dish_item-text">Rice, Grains, Pasta, & Beans</div>
      </li>
    </a>
    <a href="#">
      <li class="dish_item">
        <div class="dish_item-img">
          <img src="../assets/images/dish-11.svg" alt="dish" />
        </div>
        <div class="dish_item-text">Baking & Cooking Needs</div>
      </li>
    </a>
  </ul>
</template>

<script>
export default {
  name: "MobileMenuList",
  components: {},
};
</script>

<style lang="scss">
.mobile_menu-list {
  padding-left: 0;
  margin-top: 0;
}
.dish_item {
  display: flex;
  align-items: center;
  border-bottom: solid 1px #d9d9d6;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
}

.dish_item-img {
  width: 40px;
  img {
    width: 100%;
  }
}

.dish_item-text {
  margin-left: 25px;
  font-family: Effra;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.44;
  letter-spacing: normal;
  color: #001919;
}
</style>
