<!--资金管理-->
<template>
  <div>
    <button @click="change">按钮</button>
    <view></view>
    <view class="cu-form-group">
      <view class="title">日期选择</view>
      <picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
        <view class="picker">{{date}}</view>
      </picker>
    </view>

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
    <!--
  
    <view class="padding bg-white">
      <view class="flex p-xs margin-bottom-sm mb-sm">
        <view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
        <view class="flex-twice bg-grey padding-sm margin-xs radius">2</view>
      </view>
      <view class="flex p-xs margin-bottom-sm mb-sm">
        <view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
        <view class="flex-twice bg-grey padding-sm margin-xs radius">2</view>
        <view class="flex-treble bg-grey padding-sm margin-xs radius">3</view>
      </view>

      <view class="flex flex-wrap">
        <view class="basis-xs bg-grey margin-xs padding-sm radius">xs(20%)</view>
        <view class="basis-df"></view>
        <view class="basis-sm bg-grey margin-xs padding-sm radius">sm(40%)</view>
        <view class="basis-df"></view>
        <view class="basis-df bg-grey margin-xs padding-sm radius">sub(50%)</view>
        <view class="basis-lg bg-grey margin-xs padding-sm radius">lg(60%)</view>
        <view class="basis-xl bg-grey margin-xs padding-sm radius">xl(80%)</view>
      </view>
    </view>
    -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: {
        basic: false,
        
      },
      date: '2018-12-25',
    };
  },
  methods: {
    DateChange(e) {
      console.log("变更时间",e)
      this.date = e.target.value
    },
    change(e){
      console.log("变更时间",e)
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