<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />-->
    <Main />
    <!-- добавление компонента в app -->
  </div>
</template>

<script>
import Main from "@/components/Main";

export default {
  name: "app",
  components: {
    // добавление компонента в компоненты
    Main
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
}

img {
  display: block;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
