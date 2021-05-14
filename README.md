<!--
 * @Description: 
 * @Autor: WJM
 * @Date: 2020-12-25 08:51:56
 * @LastEditors: WJM
 * @LastEditTime: 2021-03-10 15:59:13
 * @LastEditTime: 2021-01-25 09:53:54

-->
# rcyj-ui
### 安装rcyj-ui
```
npm i rcyj-ui
```
### 再main.js中引入rcyj-ui
```
import rcyj from 'rcyj-ui' 
import 'rcyj-ui/dist/rcyj-ui.css';
Vue.use(rcyj);
```
### 在需要的页面直接使用
```
<Header :headerInfo="headerInfo" @toLoginPath="toLoginPath" @toLoginOut="toLoginOut" @toClick="toClick" @toSignOut="toSignOut"></Header>
//  @toLoginPath="自定义方法名" 登录自定义方法
//  @toLoginOut="自定义方法名" 退出登录自定义方法
//  @toClick="自定义方法名" 按钮点击自定义方法
//  @toSignOut="自定义方法名" G端退出自定义方法
<Footer :footerData="footerData"  :titlePath='titlePath ></Footer>
<Alert :alertData="alertData" @toBtnClick1="toBtnClick1" @toBtnClick2="toBtnClick2"></Alert>
//  @toBtnClick1="自定义方法名" 按钮1点击自定义方法
//  @toBtnClick2="自定义方法名" 按钮2点击自定义方法
```
### 在script标签中传入 headerInfo 格式如下：
```
headerInfo: {
  ActiveIndex:"1" // 默认选中第几个导航栏
  IsLogin: false, // 判断是否登录
  IsIndex: false, // 判断是否是首页
  IsGDuan: false, // 判断是否是G端
  IsReveal: false,// 判断是否展示返回主站按钮
  IsModular: false, // 判断是否展示登录或登录信息模块
  Background: "rgba(0,0,0,.4)" // 根据传值显示顶部导航栏背景
  BranchItem:[ // 主站分站选择
    {
      title: "主站",
      key: "1",
      path: "",
      items: [
        {
          title: "东营站",
          key: "1-1",
          path: "",
          isouter:false //是否为外部链接
        },
        {
          title: "青岛站",
          key: "1-2",
          path: "",
          isouter:false //是否为外部链接
        },
      ],
    }
  ],
  IndexItem: [    // 首页地址配置
    {
      title: "首页",    // 标题
      key: "1",        // index
      path: "/About",  // 链接 
      isouter:false    //是否为外部链接
    },
  ],
  NavigateItem: [ // 二级菜单地址配置
    {
      title: "首页",
      key: "1",
      path: "/About",
      isouter:false //是否为外部链接
      items: [], // 是否有子菜单
    },
    {
      title: "找人才",
      key: "2",
      path: "",
      items: [
        {
          title: "选项1",
          key: "2-1",
          path: "",
          isouter:false //是否为外部链接
        },
        {
          title: "选项2",
          key: "2-2",
          path: "",
          isouter:false //是否为外部链接
        },
      ],
    }
  ],
  SiteId: "1",             // 默认选中
  IndexPath:""             // 总平台首页地址
  LogoStyle:"dark"         // logo颜色  dark为深色 light为浅色
  LightLogoPath:"",        // 浅色logo地址
  DarkLogoPath:"",         // 深色logo地址
  OtherLogoPath:"",        // G端logo地址
  Avater:"",               // 头像地址
  UserName:"用户名",        // 用户名
  RealStatus:"1",          // 实名状态 0未实名 1已实名
  AssessStatus:"0",        // 评估状态 0未评估 1已评估 2审核中
  ButtonName:"企业中心",    // 按钮名称
  CompValue:"445",         // 综合身价
  PostValue:"115~220",     // 岗位价值
  FinanceValue:"354~456"   // 金融价值
  LoginImg:"",             // 登录图片
  OldPath:""               // 返回旧版
}
```
```
alertData:[
  AlertStatus:"false"    //弹出框展示状态
  Type: "IconAlert"      //类型
  Title: ""              //弹框标题
  Content: ""            //弹框内容
  ImgPath: ""            //弹框图片
  ButtonName1: ""        //按钮名称
  ButtonName2: ""        //按钮名称
]
```
```
footerData:[
  {
    head:'产品服务'
    name:'面向企业'，
    content:[
      {
          isouter:false //是否为外部链接
          path:''//路由或链接
          key:'' //跳转的页面名称
      },
       {
          isouter:false //是否为外部链接
          path:''//路由或链接
          key:'' //跳转的页面名称
      },
       {
          isouter:false //是否为外部链接
          path:''//路由或链接
          key:'' //跳转的页面名称
      }
     
    ]
  },
  {
    name:'产品服务2'，
    content:[
        {
          isouter:false //是否为外部链接
          path:''//路由或链接
          key:'' //跳转的页面名称
      },
       {
          isouter:false //是否为外部链接
          path:''//路由或链接
          key:'' //跳转的页面名称
      },
       {
          isouter:false //是否为外部链接
          path:''//路由或链接
          key:'' //跳转的页面名称
      }
    ]
  },
]
//二维码 :weixin=weixin
//logo  :logo=logo

底部图片  :bottomImg=bottomImg

关注我们链接
titlePath:{
  weixin:'',
  weibo:''
}

//联系我们电话号码   ：companyPhone=companyPhone
//电子邮箱           ：companyEmail = ：companyEmail


//倒计时按钮
<countDownButton @countDown=countDown></countDownButton>3
事件 countDown 按钮按下进行倒计时并触发发送验证码方法


//登录模块弹窗
<loginModal @loginStart=loginStart  @sendCode=sendCode></loginModal>
      visible  弹框的显示与隐藏
事件 sendCode 点击发送验证码触发
     loginStart  触发登录流程
```
