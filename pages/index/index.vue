<template>
  <view class="container">
    <view class="title">睡眠时间计算器</view>
    <button class="main-btn" @click="goToSleepToWake">睡醒时间计算入睡时间</button>
    <button class="main-btn" @click="goToWakeToSleep">入睡时间计算睡醒时间</button>
  </view>
</template>

<script>
export default {
  methods: {
    goToSleepToWake() {
      uni.navigateTo({ url: '/pages/SleepToWake/index' });
    },
    goToWakeToSleep() {
      uni.navigateTo({ url: '/pages/WakeToSleep/index' });
    },
    goToOldCalculator() {
      uni.navigateTo({ url: '/pages/OldSleepCalculator/index' });
    }
  }
}
</script>

<style scoped>
.container {
  padding: 40rpx 20rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.title {
  font-size: 40rpx;
  font-weight: bold;
  margin-bottom: 60rpx;
  text-align: center;
}
.main-btn {
  width: 80%;
  margin: 20rpx 0;
  font-size: 32rpx;
  padding: 30rpx 0;
  border-radius: 12rpx;
  background: #4fc08d;
  color: #fff;
  border: none;
}
</style>
  