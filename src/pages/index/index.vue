<template>
  <div>
    <view class="cu-bar bg-white margin-top">
      <view class="action">
        <text class="cuIcon-title text-pink"></text>卡片式轮播
      </view>
    </view>

    <swiper
      :class="{'card-swiper square-dot':DotStyle,'card-swiper round-dot':!DotStyle}"
      indicator-dots="true"
      circular="true"
      autoplay="true"
      interval="5000"
      duration="500"
      @change="cardSwiper"
      indicator-color="#8799a3"
      indicator-active-color="#0081ff"
    >

  <swiper-item v-for="(item,index) in swiperList" :key="index" :class="{'cur':(cardCur==index),'':!(cardCur==index)}">
    <view class="swiper-item">
      <image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
      <video :src="item.url" autoplay loop muted show-play-btn="false" controls="false" objectFit="cover" v-if="item.type=='video'"></video>
    </view>
  </swiper-item>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardCur: 0,
      swiperList: [
        {
          id: 0,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"
        },
        {
          id: 1,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg"
        },
        {
          id: 2,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"
        },
        {
          id: 3,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
        },
        {
          id: 4,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"
        },
        {
          id: 5,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"
        },
        {
          id: 6,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"
        }
      ]
    };
  },
  methods: {
    DotStyle(e) {
        this.DotStyle= e.target.value
    },
    cardSwiper(e) {
        this.cardCur = e.target.current
    }
  }
};
</script>

<style scoped>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
</style>