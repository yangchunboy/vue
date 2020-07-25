<template>
  <div class="loading">
    <Loading type="spinner" />
    <div class="text">加载中...</div>
  </div>
</template>
<script>
import { Loading } from "vant";
export default {
  components: {
    Loading
  }
};
</script>
<style lang="less" scoped>
.loading {
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
