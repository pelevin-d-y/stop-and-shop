<template>
  <div class="filters">
    <div class="container">
      <ul class="list">
        <li v-for="(filter) in filters" :class="classItem(filter.key)" :key="filter.key" @click="itemSelect(filter.key)">
          {{ filter.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data: () => ({
    filters: [
      {
        name: 'Fresh Fruit',
        key: 'Fresh Fruit'
      },
      {
        name: 'Fresh Vegetables',
        key: 'Fresh Vegetables'
      },
      {
        name: 'Sponsored Produce',
        key: 'Sponsored'
      },
      {
        name: 'Fresh Herbs',
        key: 'Fresh Herbs'
      },
      {
        name: 'Fresh Juice & Juice Blends',
        key: 'Fresh Juice & Juice Blends'
      },
    ],
    activeItem: '' 
  }),

  mounted() {
    this.activeItem = this.filters[0].key
  },

  methods: {
    itemSelect(key) {
      this.activeItem = key
    },

    classItem(key) {
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

.item.active {
  border-color: #e0004d;
  color: #e0004d;
}
</style>