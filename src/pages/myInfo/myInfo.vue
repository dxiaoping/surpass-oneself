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

    <van-cell-group title="分组">
      <van-cell icon="shop-o" title="今日完成任务" size="large" value="任务数量" is-link />
      <van-cell icon="shop-o" title="明日计划任务" size="large" value="内容" is-link />
      <van-cell icon="shop-o" title="周计划管理" size="large" value="内容" is-link />
      <van-cell icon="shop-o" title="资金管理" size="large" value="内容" is-link />
      <van-cell icon="shop-o" title="人情管理" size="large" value="内容" is-link />
      <van-cell is-link icon="shop-o" title="时间轴" size="large" value="时间轴" link-type="navigateTo" url="/pages/timeAxis/main"/>
      <van-cell icon="shop-o" title="摄影" size="large" value="内容" is-link />
      <van-cell title="单元格" value="内容" size="large" label="描述信息" :border="false" is-link />
    </van-cell-group>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                value: [20, 50],
                name :"晓平"

            }
        }
    }
</script>