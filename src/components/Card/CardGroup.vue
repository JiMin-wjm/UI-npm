<!--
 * @Description: 
 * @Autor: WJM
 * @Date: 2020-12-22 17:58:30
 * @LastEditors: WJM
 * @LastEditTime: 2020-12-31 11:24:43
-->
<template>
  <div>
    <div class="card-box">
      <div class="card-item">
        <div class="card-img">
          <img :src="cardData.cardImg" />
        </div>
        <div class="card-txt">
          <div class="card-title">
            {{ cardData.cardTitle }}
          </div>
          <div class="card-cont">
            {{ cardData.cardContent }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardGroup",
  props: {
    cardData: {
      type: Object,
      default: () => {
        return {
          cardImg: "",
          cardTitle: "",
          cardContent: "",
        };
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    /*addClass(i) {
      switch (i) {
        case "transparent":
          return "header-trans";
        case "white":
          return "header-white";
      }
    },*/
  },
};
</script>

<style scoped lang="scss">
.card-box {
  box-shadow: 0px 0px 8px 2px #ddd;
  border-radius: 5px;
  margin: 20px;
}
</style>