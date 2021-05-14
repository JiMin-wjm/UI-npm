<template>
  <div>
    <!--登录弹框-->
    <el-dialog
      width="28%"
      :centered="true"
      :visible="visible"
      @close="handleClose"
    >
      <!--标题:手机验证码登陆-->
      <div class="title">手机验证码登录</div>
      <!--输入框:请输入手机号-->
      <el-input
        placeholder="请输入手机号码"
        class="phone-feild"
        :maxlength="11"
        v-model="phoneNumber"
        @change="onChangeRegNumber"
        prefix-icon="el-icon-mobile-phone"
      >
      </el-input>
      <div class="error" v-if="!isSuccessPhoneNumber">请输入正确的手机号码</div>
      <!--输入框:请输入验证码-->
      <el-row type="flex" class="row-bg">
        <el-col :span="17" class="row-bg" justify="center">
          <el-input
            placeholder="请输入手机验证码"
            class="code-feild"
            :maxlength="4"
            v-model="code"
            prefix-icon="el-icon-lock"
          >
          </el-input>
          <div class="error" v-if="errorMessage">{{ errorMessage }}</div>
        </el-col>
        <el-col :span="7" class="row-bg" justify="center">
          <CountDownButton
            @countDown="onCountDown"
            :isCanClick="isCanClick"
            class="codeBtn"
          />
        </el-col>
      </el-row>
      <div style="height: 27px" />
      <!--用户协议-->
      <div>
        <el-checkbox
          v-model="isAgreeContract"
          class="checkbox-text"
        ></el-checkbox>
        <a class="agree"> 登录即注册同时表示您已同意 </a>
        <a @click="showModal = true" class="document"> 《用户注册协议》 </a>
      </div>
      <!--登录按钮-->
      <el-button
        type="primary"
        @click="loginStart()"
        :disabled="isSubmitLogin"
        class="bottom-button"
        block
      >
        立即登录
      </el-button>
    </el-dialog>
    <el-dialog
      width="940"
      :title="infoTitle"
      :visible="showModal"
      @close="closeRegisterInfo"
    >
      <div class="userRegister" v-html="registerInfo" />
      <el-button class="agreeBtn" type="danger" size="large" @click="okModal">
        同意并继续
      </el-button>
    </el-dialog>
    <el-button v-if="loginBtn" @click="visible = true">登录</el-button>
  </div>
</template>

<script>
import { Dialog, Col, Checkbox, Row, Input } from "element-ui";
import CountDownButton from "../countDownButton/countDownButton.vue";
import vue from "vue";
vue.use(Dialog);
vue.use(Col);
vue.use(Checkbox);
vue.use(Input);
vue.use(Row);
export default {
  components: {
    CountDownButton,
  },
  props: {
    //是否显示登陆按钮
    loginBtn: {
      type: Boolean,
      default: true,
    },
    //协议弹窗标题
    infoTitle: {
      type: String,
      default: "能力平台注册用户注册协议和隐私政策",
    },
    registerInfo: {
      type: String,
      default: "123",
    },
    errorMessage: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      phoneNumber: "",
      code: "", //验证码
      isSuccessPhoneNumber: true, //手机号验证
      isAgreeContract: false,
      isSuccessSmsCode: true,
      showModal: false,
      visible: false, //是否展示弹窗
      phoneReg: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/, //手机号正则验证
      clock: false,
    };
  },
  mounted() {
    this.$bus.$on("showVisible", (value) => {
      this.visible = value;
    });
  },
  methods: {
    //统一注册协议
    okModal() {
      this.showModal = false;
      this.isAgreeContract = true;
    },
    handleClose() {
      this.phoneNumber = "";
      this.code = "";
      this.isSuccessPhoneNumber = true;
      this.visible = false;
    },
    //执行登录
    loginStart() {
      this.$emit("loginStart");
    },
    //手机号输入校验
    onChangeRegNumber() {
      this.isSuccessPhoneNumber = this.phoneReg.test(this.phoneNumber);
    },
    //关闭注册协议
    closeRegisterInfo() {
      this.showModal = false;
    },
    //发送验证码
    onCountDown() {
      this.clock = true;
      this.$emit("sendCode");
    },
  },
  computed: {
    isSubmitLogin() {
      return !(
        this.phoneReg.test(this.phoneNumber) &&
        this.code &&
        this.isAgreeContract
      );
    },
    isCanClick() {
      return this.phoneReg.test(this.phoneNumber) && !this.clock;
    },
  },
};
</script>

<style scoped>
.title {
  height: 24px;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
  text-align: center;
}
.phone-feild {
  margin-top: 49px;
  border-radius: 4px;
}
.code-feild {
  margin-top: 24px;
  border-radius: 4px;
}
.placeholder {
  width: 112px;
  height: 15px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #cccccc;
  line-height: 24px;
}
.bottom-button {
  margin-top: 53px;
  height: 48px;
  background: #2883ff;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 26px;
}
.code-button {
  margin-top: 24px;
  width: 126px;
  height: 48px;
  background: #2883ff;
  border-radius: 4px;
}
.checkbox-text {
  margin-top: 0px;
  height: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #999999;
  line-height: 24px;
}
.icon-font {
  font-size: 25px;
  color: #cccccc;
}
.error-message {
  margin-top: 15px;
  width: 140px;
  height: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #f75454;
  line-height: 24px;
}
.userRegister {
  width: 100%;
  height: 550px;
  overflow: auto;
}
.agreeBtn {
  width: 400px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
}

.error {
  color: red;
}
.codeBtn {
  height: 40px;
  margin-left: 18px;
}
.document {
  text-align: left;
  cursor: pointer;
}
.agree {
  margin-left: 16px;
}
</style>
