<template>
  <div id="demo">
    <div class="homeData">
      {{ homeData.text }}
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("home/", ["homeData"])
  }
}
</script>
<style lang="less" scoped>
</style>
