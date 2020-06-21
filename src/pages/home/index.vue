<template>
  <div class="home">
    <div>getter的username的值为:{{ username }}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data () {
    return {};
  },
  computed: {
    ...mapGetters(["username"])
  },
  created () {
    const userInfo = {
      username: "法外狂徒张三",
      age: 20,
      gender: "男"
    };
    this.$store.commit("INIT_USERINFO", userInfo);
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
</style>