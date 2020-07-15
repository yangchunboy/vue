<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style lang="less">
@import "./style/index";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  font-size: 0.2rem;
}
</style>
