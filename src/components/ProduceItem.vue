<template>
 <div class="item-wrapper">
    <div class="item-content">
      <span :style="{ backgroundImage: `url(${require('../assets/images/' + icon)})` }" class="item-icon">
      </span>
      <span class="item-name">
        {{ name }}
      </span>
    </div>
  </div> 
</template>

<script>
export default {
  props: {
    name: String,
    icon: String,
    index: Number
  },

  data: () => ({
    isActive: false 
  })
}
</script>

<style lang="scss" scoped>
.item-wrapper {
  padding: 2px;
  border: solid 3px transparent;
  border-radius: 24px;
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
</style>