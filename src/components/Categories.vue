<template>
  <div class="produce">
    <div class="container">
      <div class="produce-header">
        <a href="#" class="back"></a>
        Browse Aisles
      </div>
    </div>
    <div class="produce-wrapper">
      <div class="container">
        <ul class="produce-list" :style="getProduceBackground()">
          <li
            v-for="item in getAllProductsInfo"
            :key="item.key"
            :class="classItem(item.key)"
            @click="itemSelect(item.key)"
          >
            <div class="item-wrapper">
              <div class="item-content">
                <span
                  :style="{
                    backgroundImage: `url(${require('../assets/images/' +
                      item.icon)})`,
                  }"
                  class="item-icon"
                >
                </span>
                <span class="item-name">
                  {{ item.name }}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "Produce",
  data: () => ({
    items: [
      {
        name: "Produce",
        icon: "produce.png",
        key: "produce",
      },
      {
        name: "Meat",
        icon: "meat.png",
        key: "meat",
      },
      {
        name: "Seafood",
        icon: "seafood.png",
        key: "Seafood",
      },
      {
        name: "Meal Kits",
        icon: "dish-1.jpg",
        key: "Meal Kits",
      },
      {
        name: "Deli",
        icon: "dish-5.jpg",
        key: "Deli",
      },
      {
        name: "Dairy",
        icon: "dish-6.jpg",
        key: "Dairy",
      },
      {
        name: "Beverages",
        icon: "dish-7.jpg",
        key: "Beverages",
      },
      {
        name: "Bread & Bakery",
        icon: "dish-8.jpg",
        key: "Bread & Bakery",
      },
      {
        name: "Frozen",
        icon: "dish-9.jpg",
        key: "Frozen",
      },
      {
        name: "Rice, Grain, Pasta, & Beans",
        icon: "dish-10.jpg",
        key: "ricegrainpastabeans",
      },
      {
        name: "Baking Cooking Needs",
        icon: "dish-11.jpg",
        key: "bakingcookingneeds",
      },
    ],
    activeItem: "",
  }),

  computed: {
    ...mapGetters([
      'getCurrentProducts',
      'getTopFilter',
      'getAllProductsInfo'
    ])
  },

  mounted() {
    this.activeItem = this.items[0].key;
  },

  methods: {
     ...mapMutations([
      'setCurrentFilter',
      'setCurrentTopFilter'
    ]),

    itemSelect(key) {
      window.scrollTo(0, 0)
      this.activeItem = key;
      this.setCurrentTopFilter(key)
      this.setCurrentFilter('all')
    },

    getProduceBackground() {
      const currentProduct = this.getAllProductsInfo.find(product => product.key === this.getTopFilter)
      return {
        backgroundImage: `url(${require('../assets/images/' +
          currentProduct.background)})`,
      }
    },

    classItem(key) {
      return this.activeItem === key ? "item active" : "item";
    },
  },
};
</script>

<style lang="scss" scoped>
.produce-header {
  position: relative;

  padding-top: 11px;
  padding-bottom: 11px;

  background-color: #333333;
  letter-spacing: 0.3px;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
}

.item {
  cursor: pointer;
}

.item.active .item-wrapper {
  border-color: #ffffff;
}

.item-wrapper {
  padding: 2px;
  border: solid 3px transparent;
  border-radius: 24px;
}

.produce-list {
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 10px;
  padding-right: 10px;
  overflow: auto;
  display: flex;
  flex-flow: row nowrap;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.item-content {
  position: relative;
  padding: 13px 20px 13px 50px;
  border-radius: 22px;

  cursor: pointer;
  background-color: #ffffff;
}

.item-icon {
  position: absolute;
  left: 9px;
  top: 6px;

  display: block;
  width: 32px;
  height: 32px;
  background-repeat: no-repeat;
  background-size: contain;
}

.item-name {
  white-space: nowrap;
  font-weight: 600;
}

.back {
  position: absolute;
  left: 26px;
  top: 12px;

  display: block;
  width: 8px;
  height: 14px;
  background: url("../assets/images/back-icon.svg") no-repeat center/contain;
}
</style>
