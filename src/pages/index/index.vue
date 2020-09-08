<template>
  <div>
    <van-row>
      <!-- <van-col span='16'></van-col> -->
      <van-col span="3" offset="20">
        <van-icon name="wap-nav" size="30px" @click="showLeft" />
      </van-col>
    </van-row>
    <van-popup
      :show="show.left"
      position="left"
      custom-style="width: 40%; height: 90%"
      @close="hideLeft"
    >
      <van-cell icon="shop-o" title="周计划管理" size="large" is-link />
      <van-cell icon="shop-o" title="资金管理" size="large" is-link />
      <van-cell icon="shop-o" title="人情管理" size="large" is-link />
    </van-popup>

    
  </div>
</template>

<script>
export default {
    data(){
        return {
             show: {
                basic: false,
                top: false,
                bottom: false,
                left: false,
                right: false,
                round: false,
                closeIcon: false,
                customCloseIcon: false,
                customIconPosition: false
                }
        }
    },
    methods:{
       toggle(type, show) {

           this.show[type] = show
           console.log(this.show.left)
        },

        showBasic() {
            this.toggle('basic', true);
        },

        hideBasic() {
            this.toggle('basic', false);
        },

        showTop() {
            this.toggle('top', true);
        },

        hideTop() {
            this.toggle('top', false);
        },

        showLeft() {
            this.toggle('left', true);
            console.log("#############")
            console.log(this)
        },

        hideLeft() {
            this.toggle('left', false);
        },

        showRight() {
            this.toggle('right', true);
        },

        hideRight() {
            this.toggle('right', false);
        },

        showBottom() {
            this.toggle('bottom', true);
        },

        hideBottom() {
            this.toggle('bottom', false);
        },

        showRound() {
            this.toggle('round', true);
        },

        hideRound() {
            this.toggle('round', false);
        },

        showCloseIcon() {
            this.toggle('closeIcon', true);
        },

        hideCloseIcon() {
            this.toggle('closeIcon', false);
        },

        showCustomCloseIcon() {
            this.toggle('customCloseIcon', true);
        },

        hideCustomCloseIcon() {
            this.toggle('customCloseIcon', false);
        },

        showCustomIconPosition() {
            this.toggle('customIconPosition', true);
        },

        hideCustomIconPosition() {
            this.toggle('customIconPosition', false);
        }
    }
}
</script>

<style scoped>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
</style>