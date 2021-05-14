<!--
 * @Description: 
 * @Autor: scy😊
 * @Date: 2020-12-22 09:44:52
 * @LastEditors: scy😊
 * @LastEditTime: 2021-02-08 14:10:09
-->
<template>
  <div id="rcyj_footer">
    <div class="main">
      <div class="title_wrap">
        <div class="top"></div>

        <div class="title">
          关注我们：<i
            @click="handlerTitle(titlePath.weixin)"
            @mouseenter="mouseenter"
            @mouseleave="mouseleave"
            class="iconfont iconweixin"
          ></i
          >
          <!-- <i
            @mouseenter="mouseenterweibo"
            @mouseleave="mouseleaveweibo"
            @click="handlerTitle(titlePath.weibo)"
            class="iconfont iconweibo"
          ></i> -->
          <div class="qrCode" ref="weixin">
            <img :src="weixin" alt="" />
          </div>
          <!-- <div class="qrCode" ref="weibo">
            <img :src="weibo" alt="" />
          </div> -->
        </div>
      </div>

      <div class="center">
        <div class="left">
          <img class="logo" :src="logo" alt="" />
          <div class="about">联系我们</div>
          <div class="info" v-if="companyPhone">热线电话 {{companyPhone}}</div>
          <div class="info" v-if="companyEmail">电子邮件 {{companyEmail}}</div>
          <div class="info feedback" v-if="feedback" @click="feedbackRouter">意见反馈</div>
        </div>
        <div class="right">
          <div
            class="right_group"
            v-for="(item, index) in footerData"
            :key="index"
            :class="{active:index == footerData.length-1}"
          >
            <span class="classify">{{ item.head }}</span>
            <span class="head">{{ item.name }}</span>
            <div class="right_cell">
              <p
                v-for="(itemName, index) in item.content"
                :key="index"
                @click="handlerJump(itemName)"
              >
                {{ itemName.key }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="footer_title">
        {{ footerTitle || title }}
      </p>

      <img class="rightImg" :src="bottomImg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: Number,
    bgColor: String,
    footerTitle: String,
    footerData: Array,
    titlePath: Object,
    bottomImg: String,
    logo: String,
    weixin: String,
    weibo: String,
    companyPhone:String,
    companyEmail:String,
    feedback:String
  },
  data() {
    return {
      title:
        "Copyright © 1998 - 2020 Rencaiyoujia. All Rights Reserved. 人才有价版权所有",
    };
  },
  methods: {
    feedbackRouter(){
        this.$router.push(this.feedback);
    },
    handlerJump(info) {
      if (info.isouter) {
        window.open(info.path);
      } else {
        this.$router.push(info.path);
      }
    },
    handlerTitle(path) {
      window.location.href = path;
    },
    mouseenter() {
      this.$refs.weixin.style.opacity = 1;
    },
    mouseleave() {
      this.$refs.weixin.style.opacity = 0;
    },
    mouseenterweibo() {
      this.$refs.weibo.style.opacity = 1;
    },
    mouseleaveweibo() {
      this.$refs.weibo.style.opacity = 0;
    },
  },
};
</script>

<style scoped lang='scss'>
#rcyj_footer {
  .feedback{
    cursor: pointer;
  }
  width:100%;
  position: relative;
  display: flex;
  flex-direction: column;
  .top {
    width: 100%;
    height: 10px;
    background: linear-gradient(90deg, #95bcff 0%, #2883ff 0%, #0c5dcc 100%);
    position: absolute;
    top: -10px;
  }
  .main {
    font-family: Microsoft YaHei;
    position: relative;
    background-color: rgb(1, 1, 35);
    height: 700px;
    padding-bottom: 20px;
    .center {
      width: 100%;
      padding: 0 150px 0 150px;
      color: #fff;
      padding-top: 80px;
      display: flex;
      .left {
        height: 100%;
        .logo {
          width: 300px;
          height: 130px;
          display: inline-block;
          margin-bottom: 57px;
        }
        .about {
          font-size: 18px;
          font-weight: 400;
          color: #d4ddf6;
          line-height: 35px;
          margin-bottom: 20px;
        }
        .info {
          font-size: 14px;
          font-weight: 400;
          color: #d4ddf6;
          line-height: 35px;
        }
      }
      .right {
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: space-around;

        .head {
          margin-bottom: 15px;
          font-size: 18px;
          color: #909dcd;
          line-height: 35px;
        }
        .classify {
          font-size: 22px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #d4ddf6;
          line-height: 35px;
          margin-bottom: 25px;
          height: 35px;
          display: inline-block;
        }
        .right_cell {
          font-weight: 400;
          height: 320px;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          cursor: pointer;
          p {
            font-size: 14px;
            color: #545f9b;
            white-space: nowrap;
            margin: 13px 60px 15px 0px;
            display: inline-block;
          }
          p:hover {
            color: #909dcd;
          }
        }
        .right_group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          z-index: 90;
          &.active{
            margin: 0;
          }
        }
      }
    }
    .title {
      width: 100%;
      height: 110px;
      line-height: 110px;
      font-size: 32px;
      font-weight: 300;
      color: #909dcd;
      background-color: rgba(22, 33, 92, 1);
      padding-left: 150px;
      box-sizing: border-box;
      position: relative;
      .qrCode {
        position: absolute;
        width: 120px;
        height: 120px;
        background: #ffffff;
        border-radius: 4px;
        left: 320px;
        top: 70px;
        opacity: 0;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
          display: inline-block;
        }
      }
      .icon-weixin:hover.qrCode {
        opacity: 1;
      }
    }
    .iconfont {
      font-size: 28px;
      margin-right: 40px;
      cursor: pointer;
    }
  }
  .footer_title {
    font-size: 16px;
    font-weight: 400;
    color: #3a447e;
    line-height: 35px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
  .rightImg {
    width: 580px;
    height: 300px;
    position: absolute;
    right: 0;
    bottom: 0;
    display: inline-block;
  }
}
</style>
