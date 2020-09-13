<!--资金管理-->
<template>
  <div>
    <view class="cu-form-group">
      <view class="title">日期选择</view>
      <picker
        mode="date"
        :value="date"
        start="2015-09-01"
        end="2020-09-01"
        bindchange="DateChange"
      >
        <view class="picker" text>{{date}}</view>
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
        basic: false
      }
    };
  },
  methods: {
    toggle(type, show) {
      this.show[type] = show;
      console.log(this.show.left);
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