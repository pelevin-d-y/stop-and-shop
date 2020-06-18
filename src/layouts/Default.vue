<template>
  <div :class="{'default-layout': true, 'min-padding': getIsMiniHeader }">
    <slot />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getIsMiniHeader'
    ])
  },

}
</script>

<style lang="scss">
  .default-layout {
    padding-top: 143px;
  }

  .default-layout.min-padding .filters {
    position: fixed;
    z-index: 3;
    top: 70px;
    left: 0;
    width: 100%;
  }

  .default-layout.min-padding .produce {
    margin-bottom: 74px;
  }
</style>