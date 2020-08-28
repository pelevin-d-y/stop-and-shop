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
        <ul class="produce-list" ref="categories" :style="getProduceBackground()">
          <li
            v-for="item in getAllProductsInfo"
            :key="item.key"
            :class="classItem(item.key)"
            @click="itemSelect(item.key)"
          >
            <a :href="`#${item.key}`" class="item-wrapper">
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
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import scrollElementToCenter from '@/helpers/scrollElementToCenter'

export default {
  name: "Produce",
  data: () => ({
    activeItem: "",
  }),

  watch:{
    $route() {
      this.$nextTick(() => scrollElementToCenter(this.$refs.categories))
    }
  }, 

  computed: {
    ...mapGetters([
      'getCurrentProducts',
      'getTopFilter',
      'getAllProductsInfo'
    ])
  },

  mounted() {
    this.activeItem = this.getAllProductsInfo[0].key;
    scrollElementToCenter(this.$refs.categories)
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
      return this.getTopFilter === key ? "item active" : "item";
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
  display: block;
  padding: 2px;
  border: solid 3px transparent;
  border-radius: 24px;
  color: #001919;
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
  background: url("../assets/images/icons/back-icon.svg") no-repeat center/contain;
}
</style>
