<!--
 * @Description: 
 * @Autor: WJM
 * @Date: 2020-12-22 17:58:30
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-15 15:12:08
-->
<template>
  <div>
    <div 
      class="card-item"
      :class="addClass(cardData.CardStyle)"
    >
      <div class="card-img">
        <img :src="cardData.CardImg" />
      </div>
      <div class="card-txt">
        <div class="card-title">{{ cardData.CardTitle }}</div>
        <div class="card-cont">
          {{ cardData.CardContent }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    cardData: {
      type: Object,
      default: () => {
        return {
          CardStyle:"",
          CardImg: "",
          CardTitle: "",
          CardContent: "",
        };
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    addClass(i) {
      switch (i) {
        case "row":
          return "card-row";
        case "column":
          return "card-column";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.card-item {
  box-shadow: 0px 0px 8px 2px #ddd;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
}
.card-item.card-row{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  .card-img {
    width: 30%;
    border-radius: 5px;
    text-align: center;
    margin-right: 10px;
    img {
      width: 100%;
    }
  }
  .card-txt {
    .card-title {
      font-size: 18px;
      font-weight: bold;
      color: #636e8e;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 5px 0;
    }
    .card-cont {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
.card-item.card-column {
  width: 300px;
  .card-img {
    display: block;
    border-radius: 5px;
    text-align: center;
    img {
      width: 100%;
    }
  }
  .card-txt {
    .card-title {
      font-size: 18px;
      font-weight: bold;
      color: #636e8e;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 5px 0;
    }
    .card-cont {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
</style>