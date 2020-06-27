<template>
  <div class="home">
    <HomeComponent />
    <div class="username">
      <span>getter的username的值为:</span>{{ username }}
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HomeComponent from "./components//HomeCompoent";
export default {
  components: {
    HomeComponent
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["username"])
  },
  created() {
    const userInfo = {
      username: "法外狂徒张三",
      age: 20,
      gender: "男"
    };
    this.$store.commit("INIT_USERINFO", userInfo);
  },
  methods: {}
};
</script>
<style lang="less" scoped>
@import "../../style/index";
.home {
  width: 100%;
  height: 100%;
  .username {
    color: @primaryColor;
  }
}
</style>
