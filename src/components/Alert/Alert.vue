<!--
 * @Description: 
 * @Autor: WJM
 * @Date: 2020-12-22 17:58:30
 * @LastEditors: WJM
 * @LastEditTime: 2021-03-10 17:12:31
-->
<template>
  <div class="alert-body" v-if="alertData.AlertStatus === true">
    <div class="alert-box" v-if="alertData.Type === 'IconAlert'">
      <div class="close-btn" @click="closeBox()">×</div>
      <div class="img-box" v-if="alertData.ImgPath">
        <img :src="alertData.ImgPath" alt="">
      </div>
      <div class="alert-title">
        {{alertData.Title}}
      </div>
      <div class="alert-content">
        {{alertData.Content}}
      </div>
      <button class="alert-btn" @click="btnClick1()" v-if="alertData.ButtonName1">
        {{alertData.ButtonName1}}
      </button>
      <button class="alert-btn" @click="btnClick2()" v-if="alertData.ButtonName2">
        {{alertData.ButtonName2}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    alertData: {
      type: Object,
      default: () => {
        return {
          AlertStatus:"",
          Type:"",
          Title:"",
          Content: "",
          ImgPath:"",
          ButtonName1:"",
          ButtonName2:"",
        };
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    btnClick1() {
      this.$emit("toBtnClick1");
    },
    btnClick2() {
      this.$emit("toBtnClick2");
    },
    closeBox(){
      this.alertData.AlertStatus = false;
    }
  },
};
</script>

<style scoped lang="scss">
.alert-body{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(0,0,0,.6);
}
.alert-box{
  position: fixed;
  top:20%;
  z-index: 9;
  margin: 50px auto;
  padding: 20px 10px 40px;
  left: 45%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 2px #ddd;
  min-width: 320px;
  .close-btn{
    position:absolute;
    right: 5px;
    top: 0px;
    cursor: pointer;
    font-size: 30px;
    color: #CCCCCC;
  }
  .img-box{
    width: 80px;
    height: 80px;
    margin: 20px auto;
    img{
      width: 100%;
    }
  }
  .alert-title{
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #333333;
    margin: 10px 0;
  }
  .alert-content{
    color: #666666;
    font-size: 14px;
    text-align: center;
  }
  .alert-btn{
    border: none;
    background: #2883FF;
    color: #fff;
    font-size: 16px;
    text-align: center;
    width: 200px;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    margin: 10px auto;
    display: block;
    outline: none;
    cursor: pointer;
  }
}
</style>