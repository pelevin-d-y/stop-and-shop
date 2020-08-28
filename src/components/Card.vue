<template>
  <div class="card">
    <div class="options" />
    <img class="image" :src="getImage(card.image)" alt="#">
    <div class="card-text">
      <div class="cost">
        {{ card.cost }}
      </div>
      <div class="name">
        {{ card.name }}
      </div>
      <div class="description">
        {{ card.description }}
      </div>
      <div class="btn-wrapper">
        <Button />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  props: {
    card: Object
  },

  components: {
    Button
  },

  methods: {
    getImage(name) {
      return require(`@/assets/images/${name}`)
    }
  }

}
</script>

<style lang='scss' scoped>
.card {
  position: relative;

  display: flex;
  flex-flow: column nowrap;
  padding: 15px 15px 20px 15px;

  border-radius: 10px;
  border: solid 1px #d9d9d9;
  background: #ffffff;
}

.options {
  position: absolute;
  top: 13px;
  right: 13px;

  width: 20px;
  height: 13px;
  background: url('../assets/images/icons/options.svg') no-repeat center/cover;
  cursor: pointer;
}

.image {
  display: block;
  width: 140px;
  height: 140px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;

  object-fit: contain;
}

.card-text {
  display: flex;
  flex-flow: column nowrap;
  flex: 1 0 auto;
  width: 180px;
}

.cost {
  margin-bottom: 10px;


  font-size: 18px;
  font-weight: bold;
  font-family: "Effra";
  text-align: center;
  color: #333333;
  line-height: 1.06;
}

.name {
  margin-bottom: 2px;

  font-family: "Effra";
  font-size: 16px;
  line-height: 1.21;
  letter-spacing: 0.2px;
  text-align: center;
  color: #001919;
}

.description {
  margin-bottom: 38px;

  font-family: Effra;
  font-size: 14px;
  line-height: 1.36;
  text-align: center;
  color: #63666a;
}

.btn-wrapper {
  display: flex;
  justify-content: center;

  margin-top: auto;
}
</style>
