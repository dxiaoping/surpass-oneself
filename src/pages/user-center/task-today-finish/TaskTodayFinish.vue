<!--今日已完成任务-->
<template>
  <div>
  该模块正在开发，感谢您的关注与支持
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