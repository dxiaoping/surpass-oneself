<!--个人中心-->
<template>
  <div>
    <text>\n</text>
    <van-row>
      <van-col span="6" offset="1">
        <van-image
          round
          width="5rem"
          height="5rem"
          src="https://i.loli.net/2017/08/21/599a521472424.jpg"
        />
      </van-col>
      <van-col span="12" offset="2">
        <van-row span="24">总收益</van-row>
        <van-row>本周收益</van-row>
      </van-col>
    </van-row>
    <i-divider height="40" color="#2d8cf0" lineColor="#2d8cf0"></i-divider>
    <!-- <van-grid gutter="{{ 10 }}">
  <van-grid-item icon="photo-o" text="文字" wx:for="{{ 8 }}" />
    </van-grid>-->
    <!-- </view> -->

    <van-cell-group title="分组" >
      <van-cell v-for="(item,index) in menuTow" :key="index"
        :title="item.title"
        :value="item.value"
        :url="item.url"
        icon="shop-o"
        size="large"
        is-link
        :link-type="item.linkType"
      />
      <!--
      <van-cell title="单元格" value="内容" size="large" label="描述信息" :border="false" is-link />
      -->
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: [20, 50],
      name: "晓平",
      menuTow: [
        {
          title: "今日完成任务",
          value: "任务数量",
          url: "/pages/user-center/task-today-finish/main",
          linkType: "navigateTo"
        },
        {
          title: "明日计划任务",
          value: "内容",
          url: "/pages/user-center/task-tomorrow-plan/main",
          linkType : "navigateTo"
        },
        {
          title: "周计划",
          value: "内容",
          url: "/pages/user-center/plan-week/main",
          linkType: "navigateTo"
        },
        {
          title: "资金管理",
          value: "内容",
          url: "/pages/user-center/capital-manage/main",
          linkType: "navigateTo"
        },
        {
          title: "人情管理",
          value: "内容",
          url: "/pages/user-center/contacts/main",
          linkType: "navigateTo"
        },
        {
          title: "时间轴",
          value: "内容",
          url: "/pages/user-center/time-axis/main",
          linkType: "navigateTo"
        },
        {
          title: "摄影",
          value: "内容",
          url: "/pages/user-center/photography/main",
          linkType: "navigateTo"
        }
      ]
    };
  }
};
</script>
<style scoped>
._van-row{
  background-color: blue;
}
</style>