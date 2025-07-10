<template>
  <view class="container">
    <view class="title">睡眠时间计算器</view>
    <view class="desc">请选择您要进行的计算：</view>
    <view class="btn-list">
      <button class="main-btn" @click="goToSleepToWake">
        <text class="btn-main">计算入睡时间</text>
        <text class="btn-sub">根据醒来时间推荐最佳入睡点</text>
      </button>
      <button class="main-btn" @click="goToWakeToSleep">
        <text class="btn-main">计算睡醒时间</text>
        <text class="btn-sub">根据入睡时间推荐最佳醒来点</text>
      </button>
    </view>
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
    }
  }
}
</script>

<style scoped>
.container {
  padding: 48rpx 24rpx 32rpx 24rpx;
  background: #f7fafc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.title {
  font-size: 44rpx;
  font-weight: 600;
  color: #2a7a6c;
  margin-bottom: 24rpx;
  text-align: center;
  letter-spacing: 2rpx;
}
.desc {
  font-size: 28rpx;
  color: #666;
  margin-bottom: 38rpx;
  text-align: center;
}
.btn-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32rpx;
  align-items: center;
}
.main-btn {
  width: 90%;
  background: #fff;
  border-radius: 18rpx;
  box-shadow: 0 4rpx 16rpx #e0e7ef;
  padding: 36rpx 0 28rpx 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  margin: 0;
}
.btn-main {
  font-size: 36rpx;
  color: #2a7a6c;
  font-weight: 600;
  margin-bottom: 8rpx;
}
.btn-sub {
  font-size: 22rpx;
  color: #b0b8c1;
  font-weight: 400;
}
</style>
  