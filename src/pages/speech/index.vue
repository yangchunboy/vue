<template>
  <div class="speech">
    <div class="container">
      <el-form ref="form" :model="form">
        <el-form-item label="姓名">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="报名组别">
          <el-select v-model="form.region" placeholder="请选择报名组别">
            <el-option label="专业组" value="profession" />
            <el-option label="业余组" value="hobby" />
            <el-option label="少儿组" value="children" />
          </el-select>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="form.contact" />
        </el-form-item>
        <el-form-item label="联系地址">
          <el-input v-model="form.address" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: ""
      }
    };
  }
};
</script>
<style lang="less" scoped>
.speech {
  width: 100%;
  height: 100%;
  /deep/ .el-select {
    width: 100%;
  }
}
</style>
