<template>
  <view class="ad-container">
    <view class="ad-content">
      <!-- 这里可以替换为你的广告图片或内容 -->
      <image class="ad-img" src="/static/logo.png" mode="aspectFit"></image>
      <view class="ad-title">睡眠时间计算器</view>
      <view class="ad-desc">科学作息，健康生活</view>
    </view>
    <view class="timer-area">
      <view class="timer-text">{{ timer }} 秒后进入主页</view>
      <button class="skip-btn" @click="skip">跳过</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      timer: 3,
      interval: null
    }
  },
  onLoad() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      this.interval = setInterval(() => {
        if (this.timer > 1) {
          this.timer--;
        } else {
          this.goHome();
        }
      }, 1000);
    },
    goHome() {
      clearInterval(this.interval);
      uni.reLaunch({ url: '/pages/index/index' });
    },
    skip() {
      this.goHome();
    }
  },
  onUnload() {
    clearInterval(this.interval);
  }
}
</script>

<style scoped>
.ad-container {
  min-height: 100vh;
  background: #f7fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 32rpx;
}
.ad-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80rpx;
}
.ad-img {
  width: 180rpx;
  height: 180rpx;
  margin-bottom: 32rpx;
  border-radius: 24rpx;
  background: #fff;
  border: 2rpx solid #e6f4ea;
}
.ad-title {
  font-size: 40rpx;
  font-weight: 600;
  color: #2a7a6c;
  margin-bottom: 12rpx;
}
.ad-desc {
  font-size: 26rpx;
  color: #888;
}
.timer-area {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.timer-text {
  font-size: 28rpx;
  color: #2a7a6c;
  margin-bottom: 24rpx;
}
.skip-btn {
  background: #2a7a6c;
  color: #fff;
  font-size: 28rpx;
  border-radius: 32rpx;
  padding: 12rpx 48rpx;
  border: none;
}
</style> 