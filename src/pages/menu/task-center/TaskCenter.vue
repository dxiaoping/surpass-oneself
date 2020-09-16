<!--任务中心-->
<template>
  <div>
    <van-cell-group title="学习任务">
      <van-cell
        v-for="(item,index) in studyTask"
        :key="index"
        :title="item.title"
        :value="item.value"
        :url="item.url"
        icon="shop-o"
        size="large"
        is-link
        :link-type="item.linkType"
      />
      <van-cell v-for="(item,index) in studyTask"
        :key="index"
        :title="item.title"
        :value="item.value" @click="showTaskDetail">
        <van-icon slot="right-icon" name="plus" class="custom-icon" @click="addToRecentTask" />
      </van-cell>
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
      recentTask:[],
      studyTask: [
        {
          title: "算法",
          value: "",
          url: "#",
          linkType: "navigateTo"
        },
        {
          title: "阅读",
          value: "",
          url: "#",
          linkType: "navigateTo"
        },
        {
          title: "java技术栈",
          value: "",
          url: "#",
          linkType: "navigateTo"
        }
      ]
    };
  },
  methods: {
    toggle(type, show) {
      this.show[type] = show;
      console.log(this.show.left);
    },
    addToRecentTask(){
      console.log("从任务库添加任务到最近任务");
    },
    showTaskDetail(){
      console.log("展示任务详情，可修改");
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