<template>
  <div>
    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="1000">
      <block v-for="(item, index) in movies" :key="index">
        <swiper-item>
          <van-image
            width="100%"
            height="10rem"
            fit="fill"
            :src="item.url"
            class="slide-image"
            mode="aspectFill"
          />
        </swiper-item>
      </block>
    </swiper>

    <van-grid gutter="10" column-num="3">
      <van-grid-item
        :icon="item.img"
        :text="item.title"
        v-for="(item,index) in menuList"
        :key="index"
        link-type="navigateTo"
        url="/pages/dashboard/index"
      >
        <!-- <image style="width: 60px; height: 60px;"
        :src="item.img"/>-->
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
    data(){
        return {
            showLeft1: false,
            showLeft2: false,
            showRight1: false,
            showRight2: false,
            menuList:[
                {title: '四级单词库',img:'https://i.loli.net/2017/08/21/599a521472424.jpg',url:''},
                {title: '日常任务库',img:'https://i.loli.net/2017/08/21/599a521472424.jpg',url:''},
                {title: '四级单词库',img:'https://i.loli.net/2017/08/21/599a521472424.jpg',url:''},
                {title: '四级单词库',img:'https://i.loli.net/2017/08/21/599a521472424.jpg',url:''},
                {title: '四级单词库',img:'https://i.loli.net/2017/08/21/599a521472424.jpg',url:''},
                {title: '四级单词库',img:'https://i.loli.net/2017/08/21/599a521472424.jpg',url:''},
                {title: '四级单词库',img:'https://i.loli.net/2017/08/21/599a521472424.jpg',url:''},
                {title: '四级单词库',img:'https://i.loli.net/2017/08/21/599a521472424.jpg',url:''},
                {title: '四级单词库',img:'https://i.loli.net/2017/08/21/599a521472424.jpg',url:''},
                ],
                movies:[
                    {url:'https://i.loli.net/2017/08/21/599a521472424.jpg'},
                    {url:'https://i.loli.net/2017/08/21/599a521472424.jpg'},
                    {url:'https://i.loli.net/2017/08/21/599a521472424.jpg'},
                    {url:'https://i.loli.net/2017/08/21/599a521472424.jpg'},
                ]
        }
    },
    
    methods:{
        toggleLeft1() {
            console.log("测试")
            this.setData({
                showLeft1: !this.data.showLeft1
            });
        },
        toggleLeft2() {
            console.log("测试2")
            this.setData({
                showLeft2: !this.data.showLeft2
            });
        },
        toggleRight1() {
            this.setData({
                showRight1: !this.data.showRight1
            });
        },
        toggleRight2() {
            this.setData({
                showRight2: !this.data.showRight2
            });
        }
    }
}
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>