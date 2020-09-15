<!--资金管理-->
<template>
  <div>
    <van-cell title="统计日期" :value="dateDisplay" @click="onDisplay" />
    <!-- <van-calendar :show="show" @close="onClose" @confirm="onConfirm" /> -->
    <van-calendar :show="show" :show-confirm="false" @close="onClose" @confirm="onConfirm" color="#07c160"/>
    <!--     
    <view class="cu-form-group">
      <view class="title">日期选择</view>
      <picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
        <view class="picker">{{date}}</view>
      </picker>
    </view> 
    
    -->

    <view class="cu-bar bg-white margin-top solid-bottom">
      <view class="action">
        <text class="cuIcon-title text-blue"></text>资金统计
      </view>
    </view>
    <view class="padding bg-white">
      <view class="flex">
        <view class="flex-sub bg-grey padding-sm margin-xs radius text-center">薪资收入</view>
        <view class="flex-treble bg-grey padding-sm margin-xs radius">3</view>
      </view>
      <view class="flex">
        <view class="flex-sub bg-grey padding-sm margin-xs radius text-center">本月支出</view>
        <view class="flex-treble bg-grey padding-sm margin-xs radius">3</view>
      </view>
      <view class="flex">
        <view class="flex-sub bg-grey padding-sm margin-xs radius text-center">本月存储</view>
        <view class="flex-treble bg-grey padding-sm margin-xs radius">3</view>
      </view>
    </view>

    <view class="cu-bar bg-white margin-top solid-bottom">
      <view class="action">
        <text class="cuIcon-title text-blue"></text>资金规划
      </view>
    </view>
    <view class="padding bg-white">
      <view class="flex">
        <view class="flex-sub bg-grey padding-sm margin-xs radius text-center">饮食</view>
        <view class="flex-treble bg-grey padding-sm margin-xs radius">3</view>
      </view>
      <view class="flex">
        <view class="flex-sub bg-grey padding-sm margin-xs radius text-center">人情</view>
        <view class="flex-treble bg-grey padding-sm margin-xs radius">3</view>
      </view>
      <view class="flex">
        <view class="flex-sub bg-grey padding-sm margin-xs radius text-center">购物</view>
        <view class="flex-treble bg-grey padding-sm margin-xs radius">3</view>
      </view>
      <view class="flex">
        <view class="flex-sub bg-grey padding-sm margin-xs radius text-center">临时</view>
        <view class="flex-treble bg-grey padding-sm margin-xs radius">3</view>
      </view>
    </view>

    <view class="cu-bar bg-white margin-top solid-bottom">
      <view class="action">
        <text class="cuIcon-title text-blue"></text>预算差异
      </view>
    </view>
    <view class="padding bg-white">
      <view class="flex">
        <view class="flex-sub bg-grey padding-sm margin-xs radius text-center">薪资收入</view>
        <view class="flex-treble bg-grey padding-sm margin-xs radius">3</view>
      </view>
      <view class="flex">
        <view class="flex-sub bg-grey padding-sm margin-xs radius text-center">本月支出</view>
        <view class="flex-treble bg-grey padding-sm margin-xs radius">3</view>
      </view>
      <view class="flex">
        <view class="flex-sub bg-grey padding-sm margin-xs radius text-center">本月存储</view>
        <view class="flex-treble bg-grey padding-sm margin-xs radius">3</view>
      </view>
    </view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      dateDisplay: "",
      show: false
    };
  },
  methods: {
    DateChange(e) {
      console.log("变更时间", e);
      this.date = e.target.value;
    },
    onDisplay() {
      this.show = true;
    },
    onClose() {
      this.show = false;
    },
    formatDate(date) {
      date = new Date(date);
      console.log("date",date)
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      // return '${date.getMonth() + 1}/${date.getDate()}';
    },
    onConfirm(event) {
      this.show = false;
      console.log("event",event)
      this.data = event.mp.detail
      this.dateDisplay = this.formatDate(event.mp.detail);
    }
  }
};
</script>

<style>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
</style>