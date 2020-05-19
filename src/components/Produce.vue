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
        <ul class="produce-list">
          <li v-for="item in items" :key="item.key" class="item">
            <div class="item-wrapper">
              <div class="item-content">
                <span class="item-icon">
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
export default {
  name: "Produce",
  data: () => ({
    items: [
      {
        name: 'Organic',
        icon: 'organic',
        key: 'Organic'
      },
      {
        name: 'Produce',
        icon: 'organic',
        key: 'Produce'
      },
      {
        name: 'Meat',
        icon: 'organic',
        key: 'Meat'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>

</style>