<template>
  <ul class="mobile_menu-list">
    <li class="dish_item" 
      v-for="item in getAllProductsInfo" 
      :key="item.key" 
      @click="itemSelect(item.key)">
      <a :href="`#${item.key}`">
        <div class="dish_item-img">
          <img :src="require('../assets/images/' +
            item.icon)" alt="dish" />
        </div>
        <div class="dish_item-text">{{ item.name }}</div>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "MobileMenuList",
  props: {
    menuHandler: Function
  },

  components: {},
   computed: {
   ...mapGetters([
      'getCurrentProducts',
      'getTopFilter',
      'getAllProductsInfo'
    ])
  },

  methods: {
    ...mapMutations([
      'setCurrentFilter',
      'setCurrentTopFilter'
    ]),

    itemSelect(key) {
      window.scrollTo(0, 0)
      this.setCurrentTopFilter(key)
      this.setCurrentFilter('all')
      this.menuHandler()
    },
  }
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
