<!--
 * @Description: 
 * @Autor: WJM
 * @Date: 2020-12-22 17:00:11
 * @LastEditors: WJM
 * @LastEditTime: 2020-12-28 13:46:51
-->
<template>
  <div class="home">
    <h1>This is an hOME page</h1>
    <h1>This is an hOME page</h1>
    <h1>This is an hOME page</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      headerInfo: {
        IsLogin: false,
        IsIndex: false,
        Background: "rgba(0,0,0,.3)",
        IndexItem: [
          {
            title: "首页111",
            key: "1",
            path: "/",
            isouter:false //是否为外部链接
          },
          {
            title: "企业端赋能",
            key: "2",
            path: "/About",
            isouter:false //是否为外部链接
          },
          {
            title: "人才端赋能",
            key: "3",
            path: "/About",
            isouter:false //是否为外部链接
          },
          {
            title: "公共端赋能",
            key: "4",
            path: "/About",
            isouter:false //是否为外部链接
          },
          {
            title: "开放平台",
            key: "5",
            path: "/About",
            isouter:false //是否为外部链接
          },
        ],
        NavigateItem: [
          {
            title: "首页11",
            key: "1",
            path: "/About",
            isouter:false, //是否为外部链接
            items: [],
          },
          {
            title: "找人才",
            key: "2",
            path: "",
            url: "",
            items: [
              {
                title: "选项1",
                key: "2-1",
                path: "https://www.rencaiyoujia.com/",
                isouter:true //是否为外部链接
              },
              {
                title: "选项2",
                key: "2-2",
                path: "https://www.rencaiyoujia.com/",
                isouter:true //是否为外部链接
              },
            ],
          },
          {
            title: "找资金",
            key: "3",
            path: "",
            url: "",
            items: [
              {
                title: "选项1",
                key: "3-1",
                path: "https://www.rencaiyoujia.com/",
                isouter:true //是否为外部链接
              },
              {
                title: "选项2",
                key: "3-2",
                path: "/About",
                isouter:false //是否为外部链接
              },
            ],
          },
          {
            title: "提身价",
            key: "4",
            path: "",
            url: "",
            items: [
              {
                title: "选项1",
                key: "4-1",
                path: "https://www.rencaiyoujia.com/",
                isouter:true //是否为外部链接
              },
              {
                title: "选项2",
                key: "4-2",
                path: "https://www.rencaiyoujia.com/",
                isouter:true //是否为外部链接
              },
            ],
          },
        ],
        LogoStyle: "dark",
        LightLogoPath:"",
        DarkLogoPath: "https://www.rencaiyoujia.com/static/img/logo@2x.d2b78b0.png",
        LoginPath:"/About",
        Avater:"https://www.rencaiyoujia.com/static/img/avatar.14adf71.png",
        PersonalCenter:"/About"
      },
    }
  }
}
</script>
