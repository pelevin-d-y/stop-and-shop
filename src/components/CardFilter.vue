<template>
  <div class="card">
    <div class="column-left">
      <img class="image" :src="getImage(card.image)" :alt="card.name">
      <div class="cost">
        {{ card.cost }}
      </div>
    </div>
    <div class="column-right">
      <div class="description">
        {{ card.description }}
      </div>
      <div class="name">
        {{ card.name }}
      </div>
      <button class="btn">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object
  },

  methods: {
    getImage(name) {
      return require(`@/assets/images/${name}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-flow: row nowrap;

  padding: 25px 30px 16px 17px;
  background: #ffffff;
  border-bottom: solid 1px #d9d9d6;
}

.column-left {
  margin-right: 12px;
}

.column-right {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}

.image {
  display: block;
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 34px;
}

.cost {
  font-size: 26px;
  text-align: center;
  color: #001919;
}

.name {
  margin-bottom: 10px;

  font-family: Effra;
  font-size: 16px;
  line-height: 1.21;
  letter-spacing: 0.18px;
  color: #001919;
}

.description {
  margin-bottom: 4px;

  font-family: Effra;
  font-size: 14px;
  line-height: 1.36;
  color: #63666a;
}

.btn {
  margin-top: auto;
}
</style>