/*
 * @Description: 
 * @Autor: WJM
 * @Date: 2020-12-24 16:34:47
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-18 16:11:07
 */
import Vue from "vue";
import Header from "./Header/Header.vue";
import Footer from "./Footer/Footer.vue";
// import CardItem from "./Card/CardItem.vue";
// import CardGroup from "./Card/CardGroup.vue";
// import Alert from "./Alert/Alert.vue";

const Components = {
  Header, Footer
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default { Header, Footer };