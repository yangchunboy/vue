<template>
  <div class="speech">
    <div class="title">
      <h4>“助普杯”红河州“声动红河”朗诵大赛</h4>
    </div>
    <div class="container">
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
          v-model="phone"
          required
          name="联系方式"
          label="联系方式"
          placeholder="请输入联系方式"
        />
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
        <!-- <Field name="uploader"
               label="报名表照片"
               required>
          <template #input>
            <Uploader v-model="signPhoto"
                      max-count="1"
                      image-fit="fill"
                      :after-read="afterSignPhotoRead"
                      :before-delete="deletePicture('signPhoto')" />
          </template>
        </Field> -->
        <Field name="uploader" label="参赛人照片" required>
          <template #input>
            <Uploader
              v-model="photo"
              max-count="1"
              image-fit="fill"
              :after-read="afterPhotoRead"
              :before-delete="deletePicture('photo')"
            />
          </template>
        </Field>
        <Field name="uploader" label="音频文件" required>
          <template #input>
            <div class="uploadFile">
              点击上传音频<input type="file" @change="audioChange" />
            </div>
          </template>
        </Field>
        <div class="submit">
          <Button round block type="info" native-type="submit" @click="submit">
            提交
          </Button>
        </div>
      </Form>
    </div>
    <div class="empty"></div>
    <div class="logo">
      <img src="../../assets/logo.jpeg" />
      <div>助普科技</div>
    </div>
    <div class="loading" v-show="showLoading">
      <Loading color="#1989fa" />
    </div>
  </div>
</template>
<script>
import {
  Form,
  Field,
  Uploader,
  Picker,
  Popup,
  Button,
  Toast,
  Loading
} from "vant";
import api from "@api";
export default {
  components: {
    Form,
    Field,
    Uploader,
    Picker,
    Popup,
    Button,
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
      photo: [],
      photoUrl: "",
      audioUrl: "",
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
        // signPhotoUrl,
        photoUrl,
        audioUrl
      } = this;
      if (
        !username.trim() ||
        !phone.trim() ||
        !group ||
        !address ||
        !idNumber.trim() ||
        !email ||
        !photoUrl ||
        !audioUrl
      ) {
        Toast("请将必填信息填写完整");
        return false;
      }
      if (!/^1[3456789]\d{9}$/.test(phone)) {
        Toast("请输入正确的手机号码");
        return false;
      }
      if (
        !/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(
          email
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
          photoUrl,
          audioUrl
        } = this;
        const params = {
          username,
          phone,
          group,
          address,
          email,
          idNumber,
          photoUrl,
          audioUrl
        };
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
    },
    deletePicture() {
      this.photoUrl = "";
    },
    // afterSignPhotoRead (e) {
    //   const file = e.file;
    //   this.generateFormData(file, (url) => {
    //     this.photoUrl = url;
    //   })
    // },
    audioChange(e) {
      const file = e.target.files[0];
      this.generateFormData(file, url => {
        this.audioUrl = url;
      });
    },
    afterPhotoRead(e) {
      const file = e.file;
      e.status = "uploading";
      e.message = "上传中...";

      this.generateFormData(file, url => {
        this.photoUrl = url;
        e.status = "done";
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
  // overflow: hidden;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  background: @bgColor;
  .title {
    width: 100%;
    height: 1rem;
    font-size: 0.3rem;
    text-align: center;
    line-height: 1rem;
    background: white;
    margin-bottom: 0.2rem;
  }
  .container {
    padding: 0.2rem;
    background: white;
    border-radius: 0.2rem;
    /deep/ .uploadFile {
      width: 60%;
      height: 0.6rem;
      text-align: center;
      line-height: 0.6rem;
      border: 1px solid #1989fa;
      input {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 0;
      }
    }
    .submit {
      width: 50%;
      margin: 0.16rem auto;
    }
  }
  .empty {
    width: 100%;
    height: 1.7rem;
  }
  .logo {
    width: 100%;
    height: 1.5rem;
    background: white;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
      margin-bottom: 0.1rem;
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
