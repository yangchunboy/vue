<template>
  <div id="app">
    <router-view />
    <Loading v-show="showLoading" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import Loading from "./components/Loading/Loading";
export default {
  components: { Loading },
  computed: {
    ...mapState(["showLoading"])
  }
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
