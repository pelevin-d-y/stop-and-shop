<template>
  <ul class="mobile_menu-list">
    <li class="dish_item">
      <a href="#">
        <div class="dish_item-img">
          <img src="../assets/images/dish-1.jpg" alt="dish" />
        </div>
        <div class="dish_item-text">Meal Solutions & Kits</div>
      </a>
    </li>

    <li class="dish_item">
      <a href="#">
        <div class="dish_item-img">
          <img src="../assets/images/dish-2.jpg" alt="dish" />
        </div>
        <div class="dish_item-text">Produce</div>
      </a>
    </li>

    <li class="dish_item">
      <a href="#">
        <div class="dish_item-img">
          <img src="../assets/images/dish-3.jpg" alt="dish" />
        </div>
        <div class="dish_item-text">Meat</div>
      </a>
    </li>

    <li class="dish_item">
      <a href="#">
        <div class="dish_item-img">
          <img src="../assets/images/seafood.png" alt="dish" />
        </div>
        <div class="dish_item-text">Seafood</div>
      </a>
    </li>

    <li class="dish_item">
      <a href="#">
        <div class="dish_item-img">
          <img src="../assets/images/dish-5.jpg" alt="dish" />
        </div>
        <div class="dish_item-text">Deli</div>
      </a>
    </li>

    <li class="dish_item">
      <a href="#">
        <div class="dish_item-img">
          <img src="../assets/images/dish-6.jpg" alt="dish" />
        </div>
        <div class="dish_item-text">Dairy</div>
      </a>
    </li>

    <li class="dish_item">
      <a href="#">
        <div class="dish_item-img">
          <img src="../assets/images/dish-7.jpg" alt="dish" />
        </div>
        <div class="dish_item-text">Beverages</div>
      </a>
    </li>

    <li class="dish_item">
      <a href="#">
        <div class="dish_item-img">
          <img src="../assets/images/dish-8.jpg" alt="dish" />
        </div>
        <div class="dish_item-text">Bread & Bakery</div>
      </a>
    </li>

    <li class="dish_item">
      <a href="#">
        <div class="dish_item-img">
          <img src="../assets/images/dish-9.jpg" alt="dish" />
        </div>
        <div class="dish_item-text">Frozen</div>
      </a>
    </li>

    <li class="dish_item">
      <a href="#">
        <div class="dish_item-img">
          <img src="../assets/images/dish-10.jpg" alt="dish" />
        </div>
        <div class="dish_item-text">Rice, Grains, Pasta, & Beans</div>
      </a>
    </li>

    <li class="dish_item">
      <a href="#">
        <div class="dish_item-img">
          <img src="../assets/images/dish-11.jpg" alt="dish" />
        </div>
        <div class="dish_item-text">Baking & Cooking Needs</div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MobileMenuList",
  components: {}
};
</script>

<style lang="scss">
.mobile_menu-list {
  padding-left: 0;
  margin-top: 0;
}
.dish_item {
  width: 100%;
  border-bottom: solid 1px #d9d9d6;
  a {
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
  }
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
  letter-spacing: normal;
  color: #001919;
}
</style>
