<template>
  <div class="filters">
    <div class="container">
      <ul class="list" ref="filters">
        <li :class="classItem('all')" key="all" @click="itemSelect('all', 'all')">
            All
        <li>
        <li v-for="(product) in getCurrentProducts" 
          :class="classItem(product.key)" 
          :key="product.key" 
          @click="itemSelect(product.key, product.name, $event)"
        >
            {{ product.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import scrollElementToCenter from '@/helpers/scrollElementToCenter'

export default {
  name: "Filters",
  data: () => ({
    activeItem: ''
  }),

  watch: {
    $route(to, from) {
      scrollElementToCenter(this.$refs.filters)
    }
  },

  computed: {
    ...mapGetters([
      'getCurrentProducts',
      'getTopFilter',
      'getFilter',
      ''
    ])
  },

  mounted() {
    this.activeItem = this.getFilter
    scrollElementToCenter(this.$refs.filters)
  },

  methods: {
    ...mapMutations([
      'filterProducts',
      'setCurrentFilter',
      'setCurrentSubfilter'
    ]),

    itemSelect(key, name) {
      window.scrollTo(0,0)
      this.activeItem = key

      const topFilter = this.getTopFilter
      this.setCurrentFilter(key)
      this.filterProducts({name, topFilter})
      this.setCurrentSubfilter('')
      this.$nextTick(() => scrollElementToCenter(this.$refs.filters))
    },

    classItem(key) {
      return key === this.getFilter ? 'item active' : 'item'
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

  border-radius: 20px;
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
