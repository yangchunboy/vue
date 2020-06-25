<template>
  <div id="demo">
    <div class="homeData">
      {{ homeData.text }}
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import api from "@api";

export default {
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
