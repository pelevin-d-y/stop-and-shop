<template>
  <div class="filters">
    <div class="container">
      <ul class="list">
        <li :class="classItem('all')" key="all" @click="itemSelect('all')">
          <router-link to="/">
            All
          </router-link>
        <li>
        <li v-for="(product) in getProducts" :class="classItem(product.key)" :key="product.key" @click="itemSelect(product.key, product.name)">
          <router-link to="/filter">
            {{ product.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "Filters",
  data: () => ({
    activeItem: '' 
  }),

  computed: {
    ...mapGetters([
      'getProducts',
      'getFilter'
    ])
  },

  mounted() {
    this.activeItem = this.getFilter
  },

  methods: {
    ...mapMutations([
      'filterProducts',
      'setCurrentFilter'
    ]),

    itemSelect(key, name) {
      // this.activeItem = key
      this.setCurrentFilter(key)
      this.filterProducts(name)
    },

    classItem(key) {
      console.log('classItem', this.activeItem, key)
      return this.activeItem === key ? 'item active' : 'item'
    }
  }
}
</script>

<style lang="scss" scoped>
.filters {
  background: #ffffff;
}

.list {
  overflow: auto;
  display: flex;
  flex-flow: row nowrap;
  padding: 20px ;

  &::after {
    content: '';
    flex: 0 0 20px; 
  }
}

.item {
  padding: 7px 19px;
  margin-right: 5px;

  border-radius: 15px;
  border: solid 2px #d9d9d9;
  background-color: #f5f5f5;

  font-family: Effra;
  font-size: 14px;
  color: #001919;
  white-space: nowrap;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
}

.item a {
  color: #001919;
  text-decoration: none;
}

.item.active {
  border-color: #e0004d;
  color: #e0004d;
}

.item.active a {
  color: #e0004d;
}
</style>