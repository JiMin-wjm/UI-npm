<!--
 * @Description: 
 * @Autor: scy😊
 * @Date: 2021-01-09 10:03:01
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-11 09:02:24
-->

<template>
   <el-button
    type="primary"
    class="code-button"
    @click="handleCountDown"
    :disabled=!isCanClick
  >
    {{ codeContent }}
   </el-button>
</template>

<script>
import { Button } from "element-ui";
import vue from 'vue'
vue.use(Button)
export default {
  props: {
    // 父类控制按钮是否可以点击
    isCanClick: {
      default: false,
      type: Boolean,
    }
  },
  data() {
    return {
      defaultTime: 59,
      codeContent: "发送验证码",
      // 倒计时数字
      totalTime: 59,
      // 是否已经点击过、处于倒计时中
      canClick: true,
      clock:''
    };
  },

  methods: {
    success() {

      this.canClick = false;
      this.$emit("countDown");

      // 每秒处理一次
       this.clock = window.setInterval(() => {
        this.totalTime--;
        this.codeContent = this.totalTime + " S";
        if (this.totalTime <= 0) {
          // 当倒计时小于0时清除定时器
          window.clearInterval(this.clock);
          // 重置信息
          this.codeContent = "重新发送验证码";
          this.totalTime = this.defaultTime;
          this.canClick = true;
        }
      }, 1000);
    },
    handleCountDown(){
        this.$emit('countDown',true)
        this.success()
    }
  }
};
</script>

<style scoped>
</style>
