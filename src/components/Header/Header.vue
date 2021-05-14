<!--
 * @Description: 
 * @Autor: WJM
 * @Date: 2020-12-22 17:58:30
 * @LastEditors: WJM
 * @LastEditTime: 2021-03-02 09:28:25
-->
<template>
  <div>
    <div class="header" :style="{ background: headerInfo.Background }">
      <div class="logo-box">
        <div
          class="logo g-logo"
          v-if="headerInfo.IsGDuan === true"
          @click="goHref(headerInfo.IndexPath)"
        >
          <img :src="headerInfo.OtherLogoPath" />
        </div>
        <div class="logo" v-else @click="goHref(headerInfo.IndexPath)">
          <img
            :src="headerInfo.LightLogoPath"
            v-if="headerInfo.LogoStyle === 'light'"
          />
          <img
            :src="headerInfo.DarkLogoPath"
            v-if="headerInfo.LogoStyle === 'dark'"
          />
        </div>
        <el-button
          v-if="headerInfo.IsReveal === true"
          class="back-btn"
          @click="goHref(headerInfo.IndexPath)"
          type="text"
        >
          返回主站
        </el-button>
        <el-menu
          class="el-menu-demo branch-menu"
          mode="horizontal"
          v-if="headerInfo.IsGDuan === false"
        >
          <template v-for="item in headerInfo.BranchItem">
            <el-submenu
              :index="item.key"
              :key="item.key"
              class="nav-item"
            >
              <template slot="title" class="nav-tit">
                {{ item.title }}
              </template>
              <el-menu-item
                v-for="(items, key) in item.items"
                :key="key"
                :index="items.key"
                @click="changePage(items)"
              >
                {{ items.title }}
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </div>
      <div class="nav-list">
        <div class="menu">
          <el-menu
            :default-active="headerInfo.ActiveIndex"
            class="el-menu-demo nav-menu"
            mode="horizontal"
            v-if="headerInfo.IsIndex === true"
          >
            <el-menu-item
              v-for="(item, key) in headerInfo.IndexItem"
              :key="key"
              :index="item.key"
              @click="goPage(item)"
            >
              {{ item.title }}
            </el-menu-item>
          </el-menu>
          <el-menu
            :default-active="headerInfo.ActiveIndex"
            class="el-menu-demo nav-menu"
            mode="horizontal"
            v-if="headerInfo.IsIndex === false"
          >
            <template v-for="item in headerInfo.NavigateItem">
              <el-submenu
                v-if="item.items.length"
                :index="item.key"
                :key="item.key"
                class="nav-item"
              >
                <template slot="title" class="nav-tit">
                  {{ item.title }}
                </template>
                <el-menu-item
                  v-for="(items, key) in item.items"
                  :key="key"
                  :index="items.key"
                  @click="goPage(items)"
                >
                  {{ items.title }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item
                v-else
                :index="item.key"
                :key="item.key"
                @click="goPage(item)"
                class="nav-item"
              >
                {{ item.title }}
              </el-menu-item>
            </template>
          </el-menu>
        </div>
        <div
          v-if="headerInfo.IsIndex === true && headerInfo.ActiveIndex === '1'"
        >
          <el-button
            class="old-btn"
            @click="toBackOld(headerInfo.OldPath)"
            type="text"
          >
            返回旧版
          </el-button>
        </div>
        <div v-if="headerInfo.IsModular === true">
          <div v-if="headerInfo.IsLogin === false" class="user-login">
            <div class="login-img">
              <img :src="headerInfo.LoginImg" alt="" />
            </div>
            <el-button @click="toLogin()" class="btn-login" type="text">
              注册/登录
            </el-button>
          </div>
          <div
            v-if="headerInfo.IsLogin === true"
            class="user-avater"
            @mouseover="showBox"
            @mouseleave="hideBox"
          >
            <img :src="headerInfo.Avater" alt />
            <div class="user-box" v-if="isShow == true">
              <div class="user-img">
                <img :src="headerInfo.Avater" alt />
              </div>
              <div class="user-name">
                {{ headerInfo.UserName }}
              </div>
              <div class="user-status">
                <div
                  class="user-realname"
                  :class="headerInfo.RealStatus === '1' ? 'is-active' : ''"
                >
                  <i class="iconfont iconshiming"></i>
                  <span v-if="headerInfo.RealStatus === '0'">未实名</span>
                  <span v-if="headerInfo.RealStatus === '1'">已实名</span>
                </div>
                <div
                  class="user-assess"
                  :class="(headerInfo.AssessStatus === '1' || headerInfo.AssessStatus === '2') && headerInfo.RealStatus === '1' ? 'is-active' : ''"
                >
                  <i class="iconfont iconpinggu"></i>
                  <span v-if=" headerInfo.RealStatus === '0' || (headerInfo.AssessStatus !== '0' && headerInfo.RealStatus === '0') || headerInfo.AssessStatus === '0'">
                    未评估
                  </span>
                  <span v-if="headerInfo.AssessStatus === '1' && headerInfo.RealStatus === '1'">
                    已评估
                  </span>
                  <span v-if="headerInfo.AssessStatus === '2' && headerInfo.RealStatus === '1'">
                    审核中
                  </span>
                </div>
              </div>
              <div
                class="user-info"
                v-if="
                  headerInfo.RealStatus === '1' &&
                  headerInfo.AssessStatus === '1'
                "
              >
                <div class="user-value">
                  <div class="user-key">综合身价</div>
                  <div class="user-val comp">
                    {{ headerInfo.CompValue }}（万）
                  </div>
                </div>
                <div class="user-value">
                  <div class="user-key">岗位身价</div>
                  <div class="user-val other">
                    {{ headerInfo.PostValue }}（万）
                  </div>
                </div>
                <div class="user-value">
                  <div class="user-key">金融身价</div>
                  <div class="user-val other">
                    {{ headerInfo.FinanceValue }}（万）
                  </div>
                </div>
              </div>
              <el-button @click="toJump()" class="btn-href" type="text" v-if="headerInfo.ButtonName">
                {{ headerInfo.ButtonName }}
              </el-button>
              <el-button @click="LoginOut()" class="btn-loginout" type="text">
                退出
              </el-button>
            </div>
          </div>
        </div>
        <div v-if="headerInfo.IsGDuan === true">
          <el-button @click="toQuit()" class="old-btn" type="text">
            退出
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Button, Menu, MenuItem, Submenu } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Button);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
export default {
  name: "Header",
  props: {
    headerInfo: {
      type: Object,
      default: () => {
        return {
          ActiveIndex: "1",
          IsLogin: false,
          IsIndex: false,
          IsGDuan: false,
          IsReveal:false,
          Background: "",
          IndexItem: [],
          NavigateItem: [],
          BranchItem:[],
          IndexPath: "",
          LogoStyle: "",
          LightLogoPath: "",
          DarkLogoPath: "",
          OtherLogoPath: "",
          Avater: "",
          UserName: "",
          RealStatus: "",
          AssessStatus: "",
          CompValue: "",
          PostValue: "",
          FinanceValue: "",
          ButtonName:"",
          LoginImg: "",
          OldPath: "",
        };
      },
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  created:function(){
    let oldtitle = this.headerInfo.BranchItem[0].title
    let oldpath = this.headerInfo.BranchItem[0].path
    for(let i = 0; i <this.headerInfo.BranchItem[0].items.length;i++){
      if(this.headerInfo.SiteId == this.headerInfo.BranchItem[0].items[i].siteId){
        this.headerInfo.BranchItem[0].title = this.headerInfo.BranchItem[0].items[i].title
        this.headerInfo.BranchItem[0].path = this.headerInfo.BranchItem[0].items[i].path
        this.headerInfo.BranchItem[0].items[i].title = oldtitle
        this.headerInfo.BranchItem[0].items[i].path = oldpath
      }
    }
  },
  methods: {
    toLogin() {
      this.$emit("toLoginPath");
    },
    toQuit() {
      this.$emit("toSignOut");
    },
    LoginOut() {
      this.$emit("toLoginOut");
    },
    toJump() {
      this.$emit("toClick");
    },
    toBackOld(e) {
      window.open(e)
    },
    changePage(e) {
      let gotopath = e.path
      if(e.items === undefined){
        let oldtitle = this.headerInfo.BranchItem[0].title
        let oldpath = this.headerInfo.BranchItem[0].path
        this.headerInfo.BranchItem[0].title = e.title
        this.headerInfo.BranchItem[0].path = e.path
        this.headerInfo.BranchItem[0].items[e.key].title = oldtitle
        this.headerInfo.BranchItem[0].items[e.key].path = oldpath
      }
      if (e.isouter == false) {
        window.location.href = gotopath
      } else {
        window.open(gotopath)
      }
    },
    goPage(e) {
      this.activeIndex = e.key;
      if (e.isouter == false) {
        this.$router.push({
          path: e.path,
        });
      } else {
        window.open(e.path);
      }
    },
    goHref(e) {
      this.$router.push({
        path: e,
      });
    },
    showBox() {
      this.isShow = true;
    },
    hideBox() {
      this.isShow = false;
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: background 1s ease-out;
  box-sizing: border-box;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  .logo-box {
    display: flex;
    justify-content: flex-start; 
    .logo {
      width: 230px;
      padding: 10px 0;
      cursor: pointer;
      img {
        width: 100%;
        margin: 12px 0;
      }
    }
    .g-logo{
      width: 300px;
      padding: 10px 0;
      cursor: pointer;
      img{
        width: 100%;
        margin: 10px 0;
      }
    }
    .back-btn {
      font-size: 12px;
      padding: 8px;
      margin: 26px 20px;
      // color: #999999;
      color: #636E8E;
    }
    .branch-menu{
      padding: 0;
      height: 34px;
      border: none;
      margin: 23px 0;
      background: none;
      .nav-item{
        padding: 0 20px;
      }
    }
  }
  .nav-list {
    display: flex;
    justify-content: flex-end;
    .nav-item {
      width: 120px;
      text-align: center;
    }
    .el-menu {
      border: none;
      background: transparent;
      .el-menu-item {
        // color: #999999;
        color: #636e8e;
        border: none;
      }
      .el-menu-item:focus,
      .el-menu-item:hover,
      .el-submenu .el-submenu__title:hover {
        background: transparent !important;
      }
      .el-menu-item.is-active {
        color: #2883ff;
        // color: #f5a822;
        border: none;
      }
      .el-menu-item.is-active:before {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 35%;
        width: 30%;
        height: 6px;
        // background: #f5a822;
        background: #2883ff;
        border-radius: 3px;
      }
    }
    .old-btn {
      font-size: 12px;
      padding: 8px;
      margin: 26px 0 26px 40px;
      // color: rgba(232, 173, 173, 0.5);
      color: rgba(99, 110, 142, 0.5);
    }
    .user-login {
      display: flex;
      justify-content: flex-end;
      margin-left: 30px;
      .login-img {
        width: 48px;
        height: 48px;
        margin: 16px 0;
        img {
          width: 100%;
        }
      }
      .btn-login {
        height: 80px;
        line-height: 80px;
        padding: 0 20px;
        // color: #946565;
        color: #2883ff;
      }
    }
    .user-avater {
      width: 80px;
      height: 80px;
      padding: 20px 20px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      box-sizing: border-box;
      img {
        width: 100%;
        border-radius: 50%;
        height: 100%;
        object-fit: cover;
      }
    }
    .user-box {
      position: fixed;
      top: 80px;
      right: 50px;
      width: 240px;
      background: #fff;
      box-shadow: 0px 20px 20px 0px rgba(12, 93, 204, 0.2);
      .user-img {
        width: 72px;
        height: 72px;
        margin: 20px auto 10px;
        overflow: hidden;
        border-radius: 50%;
        img {
          width: 100%;
        }
      }
      .user-name {
        font-weight: bold;
        color: #333333;
        text-align: center;
        overflow: hidden;
        padding: 0 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 0 10px;
      }
      .user-status {
        border-bottom: 1px solid #f2f2f2;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        div {
          text-align: center;
          width: 50%;
          font-size: 12px;
          margin: 5px 0;
          color: #cccccc;
          i {
            font-size: 16px;
            margin-right: 5px;
          }
          span {
            line-height: 22px;
          }
        }
        .is-active {
          color: #2883ff;
        }
        .user-realname {
          border-right: 1px solid #f2f2f2;
        }
      }
      .user-info {
        border-bottom: 1px solid #f2f2f2;
        .user-value {
          display: flex;
          justify-content: space-between;
          padding: 0 20px;
          line-height: 40px;
          font-size: 14px;
          .user-key {
            color: #333333;
          }
          .user-val.comp {
            color: #2883ff;
            font-weight: bold;
          }
          .user-val.other {
            color: #fd9b46;
            font-weight: bold;
          }
        }
      }
      .btn-href {
        display: block;
        background: #2883ff;
        width: 80%;
        margin: 20px auto 10px;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
      }
      .btn-loginout {
        display: block;
        width: 80%;
        font-weight: bold;
        color: #cccccc;
        margin: 10px auto 10px;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .header {
    padding: 0 20px;
  }
}
.header.header-trans {
  background: rgba($color: #ffffff, $alpha: 0.3);
}
.header.header-white {
  background: rgba($color: #ffffff, $alpha: 1);
}
</style>
<style>
.el-menu--popup {
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
}
.el-menu--horizontal {
  top: 60px !important;
}
.el-menu--horizontal.el-menu {
  top: 0px !important;
}
.nav-menu > .el-menu-item,
.nav-menu > .el-submenu .el-submenu__title {
  height: 80px;
  line-height: 80px;
}
.el-menu--horizontal>.el-submenu .el-submenu__title{
  color: #999999;
}
.branch-menu>.el-submenu.is-active .el-submenu__title{
  border: none !important;
  /* color: #999999; */
  color: #636E8E;
}
.branch-menu > .el-submenu .el-submenu__title{
  height: 34px;
  line-height: 34px;
}
.branch-menu > .el-submenu .el-submenu__title:hover{
  /* background: #D2BBBB;
  color: #999999; */
  background: #0E165D;
  color: #636E8E;
  border-radius: 4px;
}
.branch-menu .el-submenu__title{
  /* background: #D2BBBB;
  color: #999999; */
  background: #0E165D;
  color: #636E8E;
  border-radius: 4px;
  width: 90px;
}
.nav-menu > .el-submenu .el-submenu__title,
.el-submenu__title i {
  /* color: #999999 !important; */
  color: #636e8e !important;
  border: none !important;
}
.nav-menu > .el-submenu.is-active .el-submenu__title,
.nav-menu > .el-submenu.is-active .el-submenu__title i {
  color: #2883ff !important;
  border: none !important;
}
.nav-menu .el-menu .el-menu-item,
.nav-menu .el-menu .el-submenu__title {
  height: 40px;
  line-height: 40px;
}
.nav-menu > .el-submenu .el-submenu__title:hover {
  background: transparent !important;
}
.nav-menu > .el-submenu.is-active .el-submenu__title:before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 35%;
  width: 30%;
  height: 6px;
  /* background: #f5a822; */
  background: #2883ff;
  border-radius: 3px;
}
.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title{
  float: none;
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  /* color: #E8ADAD; */
  background-color: #FFF;
  color: #909399;
}
.el-menu--horizontal .el-menu .el-menu-item.is-active,
.el-menu--horizontal .el-menu .el-menu-item:hover {
  /* color: #6A1D1D;
  background: #D2BBBB; */
  color: #2883ff;
  background: #d4ddf6;
  border-radius: 4px;
}
.el-menu--popup {
  min-width: 120px;
}
.el-menu--popup .el-menu-item {
  width: 120px;
}
</style>