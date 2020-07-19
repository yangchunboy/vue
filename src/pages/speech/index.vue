<template>
  <div class="speech">
    <div class="bg">
      <div class="container">
        <img class="startApply" src="../../assets/zhizhi/startApply.png" />
        <Form>
          <Field
            v-model="username"
            required
            name="姓名"
            label="姓名"
            placeholder="请输入姓名"
          />
          <Field
            v-model="idNumber"
            required
            name="身份证号"
            label="身份证号"
            placeholder="请输入身份证号"
          />
          <Field
            v-model="phone"
            required
            name="联系方式"
            label="联系方式"
            placeholder="请输入联系方式"
          />
          <Field
            readonly
            clickable
            required
            name="picker"
            :value="group"
            label="报名组别"
            placeholder="点击选择报名组别"
            @click="showPicker = true"
          />
          <Popup v-model="showPicker" position="bottom">
            <Picker
              show-toolbar
              :columns="columns"
              @confirm="onConfirm"
              @cancel="showPicker = false"
            />
          </Popup>
          <Field
            v-model="address"
            required
            name="联系地址"
            label="联系地址"
            placeholder="请输入联系地址"
          />
          <Field
            v-model="email"
            required
            name="邮箱"
            label="邮箱"
            placeholder="请输入邮箱"
          />
          <Field
            v-model="worksName"
            required
            name="作品名称"
            label="作品名称"
            placeholder="请输入作品名称"
          />
        </Form>
        <div class="introduction">
          <h2>参赛视频须知：</h2>
          <p>1、视频开头要求展示作品名称、参赛者姓名、组别和单位（朗诵体现）</p>
          <p>2、视频高清，不抖动、无噪音，长度不超过4分钟，大小低于500M</p>
          <p>3、团队参赛，也可个人参赛（团队赛要求5人以上组队）</p>
          <p>4、朗诵作品内容必须积极向上，题材不限，提倡原创</p>
          <p>5、视频作品需同期录音，不得后期配音（一经发现，取消比赛资格）</p>
          <p class="end">
            参赛视频需发至指定官方邮箱：727840798@qq.com（邮件主题：作品名称+参赛号+组别；抄送18702128125@163.com）
          </p>
        </div>
        <div class="submit" @click="submit">提交</div>
      </div>
    </div>
    <div class="loading" v-show="showLoading">
      <Loading color="#1989fa" />
    </div>
  </div>
</template>
<script>
import { Form, Field, Picker, Popup, Toast, Loading } from "vant";
import api from "@api";
export default {
  components: {
    Form,
    Field,
    Picker,
    Popup,
    Loading
  },
  data() {
    return {
      showPicker: false,
      username: "",
      phone: "",
      group: "",
      address: "",
      email: "",
      idNumber: "",
      columns: ["少儿组", "青年组", "成人组"],
      worksName: "",
      showLoading: false
    };
  },
  methods: {
    onConfirm(value) {
      this.showPicker = false;
      this.group = value;
    },
    validate() {
      const {
        username,
        phone,
        group,
        address,
        email,
        idNumber,
        worksName
      } = this;
      if (
        !username.trim() ||
        !phone.trim() ||
        !group ||
        !address.trim() ||
        !idNumber.trim() ||
        !email.trim() ||
        !worksName.trim()
      ) {
        Toast("请将必填信息填写完整");
        return false;
      }
      if (!/^1[3456789]\d{9}$/.test(phone.trim())) {
        Toast("请输入正确的手机号码");
        return false;
      }
      if (
        !/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(
          email.trim()
        )
      ) {
        Toast("请输入正确的邮箱");
        return false;
      }
      return true;
    },
    submit() {
      const validateResult = this.validate();
      if (validateResult) {
        const {
          username,
          phone,
          group,
          address,
          email,
          idNumber,
          worksName
        } = this;
        const params = {
          username: username.trim(),
          phone: phone.trim(),
          group,
          address: address.trim(),
          email: email.trim(),
          idNumber: idNumber.trim(),
          worksName: worksName.trim()
        };
        console.log(params);
        // 获取到所有数据后插入数据库
        // api.speech.insertSpeech(params).then((res) => {
        //   console.log(res);
        // }).catch((error) => {
        //   console.log(error);
        // })
      }
    },
    generateFormData(file, callback) {
      this.showLoading = true;
      const form = new FormData();
      form.append("file", file);
      api.oss
        .uploadImg({
          data: form,
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(res => {
          this.showLoading = false;
          const { data } = res;
          callback(data.data.url);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../style/index";
.speech {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  // display: flex;
  // justify-content: center;
  .bg {
    width: 100%;
    min-height: 100%;
    background-image: url(http://school-admin.oss-cn-beijing.aliyuncs.com/file/20200718/be82eb4d5cf9c85ef947bd60dad5a101.png);
    background-size: 100%;
    border: 1px solid transparent;
    .container {
      margin: 4rem auto 0 auto;
      width: 80%;
      .startApply {
        width: 3rem;
        vertical-align: bottom;
      }
      .van-form {
        padding: 0 0.2rem;
        background: white;
        border-bottom-left-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
        border-top-right-radius: 0.2rem;
      }
      .introduction {
        background: white;
        border-radius: 0.2rem;
        margin-top: 0.5rem;
        padding: 0.5rem 0.2rem;
        line-height: 0.35rem;
        h2 {
          margin-bottom: 0.2rem;
        }
        .end {
          margin-top: 0.2rem;
        }
      }
      .submit {
        width: 70%;
        background-image: url(../../assets/zhizhi/submit.png);
        height: 0.8rem;
        background-size: 100% 100%;
        color: white;
        text-align: center;
        line-height: 0.8rem;
        font-size: 0.3rem;
        margin: 1rem auto;
      }
    }
  }
  .loading {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
