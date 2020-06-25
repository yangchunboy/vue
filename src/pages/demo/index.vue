<template>
  <div id="demo">
    <div class="homeData">
      {{ homeData.text }}
      <div>当前时间是:{{ currentDateStr }}</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import api from "@api";
import utils from "@utils/common.js";

export default {
  data() {
    return {
      currentDateStr: utils.getDate(new Date())
    };
  },
  computed: {
    ...mapState("home/", ["homeData"])
  },
  created() {
    api.user
      .getUserInfo()
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {}
};
</script>
<style lang="less" scoped></style>
