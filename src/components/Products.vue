<template>
  <div class="products">
    <div class="container">
      <div :class="getWrapperClass(product.key)" v-for="product in getCurrentProducts" :key="product.key">
        <div class="product-type__header">
          <div class="product-type__name">
            {{ product.name }}
          </div>
          <div class="product-type__view" @click="itemSelect(product.key, product.name)">
            View All
          </div>
        </div>
        <div class="cards">
          <div class="card-item" v-for="card in product.cards" :key="card.name">
            <Card :card="card" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "Products",
  components: {
    Card
  },

  computed: {
    ...mapGetters([
      'getCurrentProducts',
      'getTopFilter'
    ])
  },

  methods: {
    ...mapMutations([
      'filterProducts',
      'setCurrentFilter'
    ]),

    getWrapperClass(key) {
      return key === 'Sponsored Produce' ? "product-type__wrapper sponsored" : "product-type__wrapper"
    },

    itemSelect(key, name) {
      const topFilter = this.getTopFilter

      this.setCurrentFilter(key)
      this.filterProducts({name, topFilter})
      this.activeItem = key
    }
  }

}
</script>

<style lang="scss" scoped>
.products {
  padding: 29px 0;
}

.product-type__wrapper {
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
}

.product-type__header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;

  font-family: Effra;
  font-weight: bold;
}

.product-type__name {
  font-size: 18px;
}

.product-type__view {
  font-size: 16px;
  color: #e0004d;
  cursor: pointer;
}

.cards {
  display: flex;
  flex-flow: row nowrap;
  padding-left: 20px;
  overflow: auto;

  &:after {
    content: '';
    flex: 0 0 20px;
  }
}

.card-item {
  display: flex;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
}

.product-type__wrapper.sponsored {
  padding-top: 30px;
  padding-bottom: 35px;

  background: url('../assets/images/sponsored-bg.jpg') no-repeat center/cover;

  .product-type__name {
    color: #ffffff;
  }

  .product-type__view {
    display: none;
  }
}
</style>
