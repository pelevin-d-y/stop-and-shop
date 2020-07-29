<template>
  <div class="wrapper">
    <button class="minus" @click="addToCart">
      <img src="../assets/images/btn-minus.svg" alt="minus" />
    </button>
    <div class="digit">
      {{ quantity }}  
    </div>
    <button class="plus" @click="removeFromCart">
      <img src="../assets/images/btn-plus.svg" alt="plis" />
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    quantity: 0
  }),

  methods: {
    addToCart() {
      this.quantity = this.quantity <= 0 ? 0 : --this.quantity
    },

    removeFromCart() {
      this.quantity = ++this.quantity
    }
  }
}
</script>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-flow: row nowrap;
  }

  .minus,
  .plus {
    width: 44px;
    height: 44px;
    border: 2px solid #D9D9D6;
    background: #ffffff;
    cursor: pointer;
    outline: none;
  }

  .minus {
    border-radius: 10px 0 0 10px;
  }

  .plus {
    border-radius: 0 10px 10px 0;
  }

  .digit {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    width: 44px;

    border-top: 2px solid #D9D9D6;
    border-bottom: 2px solid #D9D9D6;

    font-size: 16px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    font-weight: bold;
  }

  img {
    display: block;
    margin: 0 auto;
  }
</style>