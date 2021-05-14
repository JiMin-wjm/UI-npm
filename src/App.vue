<!--
 * @Description: 
 * @Autor: WJM
 * @Date: 2020-12-22 17:58:30
 * @LastEditors: WJM
 * @LastEditTime: 2021-03-10 17:11:19
-->

<template>
  <div id="app">
    <Header
      :headerInfo="headerInfo"
      @toLoginPath="toLoginPath"
      @toLoginOut="toLoginOut"
      @toClick="toClick"
      @toSignOut="toSignOut"
    />
    <router-view />
    <Alert :alertData="alertData" @toBtnClick1="toBtnClick1" @toBtnClick2="toBtnClick2"/>
    <!-- <CardItem :cardData="cardData"></CardItem> -->
    <!-- <countDownButton @countDown=countDown></countDownButton> -->
    <!-- <loginModal @loginStart=loginStart  @sendCode=sendCode></loginModal> -->
    <rcyjFooter :footerData="footerData" feedback='/123'> </rcyjFooter>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import footer from "@/components/Footer/Footer.vue"
import Alert from "@/components/Alert/Alert.vue"
// import CardItem from "@/components/Card/CardItem.vue"
// import countDownButton from '@/components/countDownButton/countDownButton.vue'
// import loginModal from './components/loginModal/loginModal.vue'
export default {
  name: "App",
  components: {
    rcyjFooter: footer, Header, Alert
    // CardItem,countDownButton,loginModal
  },
  data() {
    return {
      headerInfo: {
        ActiveIndex: "1",
        IsLogin: true,
        IsIndex: false,
        IsGDuan: true,
        IsReveal:false,
        IsModular:false,
        Background: "rgba(0,0,0,.3)",
        IndexItem: [
          {
            title: "首页111",
            key: "1",
            path: "/",
            isouter: false, //是否为外部链接
          },
          {
            title: "企业端赋能",
            key: "2",
            path: "/Home",
            isouter: false, //是否为外部链接
          },
          {
            title: "人才端赋能",
            key: "3",
            path: "/About",
            isouter: false, //是否为外部链接
          },
          {
            title: "公共端赋能",
            key: "4",
            path: "/About",
            isouter: false, //是否为外部链接
          },
          {
            title: "开放平台",
            key: "5",
            path: "/About",
            isouter: false, //是否为外部链接
          },
        ],
        NavigateItem: [
          {
            title: "首页11",
            key: "1",
            path: "/About",
            isouter: false, //是否为外部链接
            items: [
              {
                title: "东营站",
                key: "1-1",
                path: "/Home",
                isouter: false, //是否为外部链接
              }
            ],
          },
          {
            title: "公共端赋能",
            key: "2",
            path: "",
            isouter: false, //是否为外部链接
            items: [
              {
                title: "选项1",
                key: "2-1",
                path: "https://www.rencaiyoujia.com",
                isouter: true, //是否为外部链接
              },
              {
                title: "选项2",
                key: "2-2",
                path: "/About",
                isouter: false, //是否为外部链接
              },
            ],
          },
          {
            title: "开放平台",
            key: "3",
            path: "/About",
            isouter: false, //是否为外部链接
            items: [],
          },
        ],
        BranchItem: [
          {
            title: "总站",
            key: "1",
            siteId:"1",
            path: "/",
            isouter: false, //是否为外部链接
            items: [
              {
                title: "东营站",
                key: "0",
                siteId:"3705",
                path: "/Home",
                isouter: true, //是否为外部链接
              },
            ],
          },
        ],
        SiteId:"1",
        IndexPath: "/",
        LogoStyle: "dark",
        LightLogoPath: "",
        DarkLogoPath: "https://www.rencaiyoujia.com/static/image/nav-logo.png",
        OtherLogoPath: "https://www.rencaiyoujia.com/static/image/nav-logo.png",
        Avater: "https://www.rencaiyoujia.com/static/img/avatar.14adf71.png",
        UserName: "王继民",
        RealStatus: "1",
        AssessStatus: "1",
        ButtonName: "",
        CompValue: "445",
        PostValue: "115~220",
        FinanceValue: "354~456",
        LoginImg: "https://www.rencaiyoujia.com/static/image/avater.png",
        OldPath: "https://www.rencaiyoujia.com"
      },
      alertData:{
        AlertStatus: false,
        Type: "IconAlert",
        ImgPath: "https://www.rencaiyoujia.com/static/image/avater.png",
        Title: "Alert 组件",
        Content: "请耐心等待工作人员与您联系",
        ButtonName1:"重新提交",
        ButtonName2:"取消",
      },
      cardData: {
        // CardStyle: "column",
        // CardImg:
        //   "http://rcyj-article.oss-cn-beijing.aliyuncs.com/team-logo/20201226145713436bcc9.png",
        // CardTitle: "卡片名称",
        // CardContent: "卡片内容",
      },
      footerData: [
        {
          head: "产品服务",
          name: "面向企业",
          content: [
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
          ],
        },
        {
          head: "",
          name: "面向企业",
          content: [
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
          ],
        },
        {
          head: "",
          name: "面向企业",
          content: [
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
          ],
        },
        {
          head: "面向核弹",
          name: "面向企业",
          content: [
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
            {
              path: "/123",
              key: "人岗位匹配",
              isouter: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    toLoginPath() {
      window.location.href = "https://www.rencaiyoujia.com/";
    },
    toLoginOut() {
      console.log("tuchu");
    },
    toClick() {
      console.log("toClick");
    },
    toSignOut() {
      console.log("toSignOut");
      this.alertData.AlertStatus = true
    },
    toBtnClick1() {
      console.log("toBtnClick1");
    },
    toBtnClick2() {
      console.log("toBtnClick2");
    },
    qwe(){
      console.log('000')
    },
    countDown(){
      console.log('验证码请求已发送')
    },
    loginStart(){
      this.$on('loginStart',()=>{
        console.log('开始登陆')

        setTimeout(() => {
          console.log('登录成功')
        }, 2000);
      })

      console.log('發送登錄請求')
    },
    sendCode(){
      console.log('验证码已发送')
    }
  }
};
</script>

<style lang="scss">
html,
body {
  box-sizing: border-box;
  font-size: 18px;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  // background: #222222;
}
*,
::before,
::after {
  box-sizing: inherit;
  font-size: inherit;
  font-family: inherit;
}
.h1 {
  font-size: 12px;
}
</style>
