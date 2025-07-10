<template>
  <view class="container">
    <view class="title">计算入睡时间</view>
    <view class="desc">请选择您希望醒来的时间：</view>
    <picker mode="time" :value="wakeTime" @change="onTimeChange">
      <view class="picker-area">
        <view class="picker-time">{{ wakeTime }}</view>
      </view>
    </picker>
    <view class="result" v-if="sleepTimes.length">
      <view class="result-title">推荐入睡时间</view>
      <view class="sleep-time-list">
        <view class="sleep-time-card" v-for="(item, idx) in sleepTimes" :key="idx">
          <text class="sleep-time-main">{{ item.time }}</text>
          <text class="duration">（{{ item.duration }}小时）</text>
        </view>
      </view>
    </view>
    <view class="tips">
      <text>每个睡眠周期为90分钟，建议成年人保证5-6个周期（7.5-9小时）。</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      wakeTime: '07:00',
      sleepCycles: [6, 5, 4, 3],
      sleepTimes: []
    }
  },
  onLoad() {
    // 获取当前时间并加9小时
    const now = new Date();
    now.setHours(now.getHours() + 9);
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    this.wakeTime = `${h}:${m}`;
    this.calcSleepTimes();
  },
  methods: {
    onTimeChange(e) {
      this.wakeTime = e.detail.value;
      this.calcSleepTimes();
    },
    calcSleepTimes() {
      const [wakeHour, wakeMinute] = this.wakeTime.split(":").map(Number);
      const wakeTotalMinutes = wakeHour * 60 + wakeMinute;
      this.sleepTimes = this.sleepCycles.map(cycle => {
        const sleepMinutes = wakeTotalMinutes - cycle * 90;
        let hour = Math.floor((sleepMinutes + 1440) % 1440 / 60);
        let minute = (sleepMinutes + 1440) % 60;
        hour = hour < 10 ? '0' + hour : '' + hour;
        minute = minute < 10 ? '0' + minute : '' + minute;
        return {
          time: `${hour}:${minute}`,
          duration: (cycle * 1.5).toFixed(1)
        };
      });
    }
  }
}
</script>

<style scoped>
.container {
  padding: 48rpx 24rpx 32rpx 24rpx;
  background: #f7fafc;
  min-height: 100vh;
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
  margin-bottom: 18rpx;
  text-align: center;
}
.picker-area {
  background: #e6f4ea;
  border-radius: 16rpx;
  padding: 24rpx 0;
  margin: 0 auto 32rpx auto;
  width: 60%;
  box-shadow: 0 2rpx 8rpx #d2e6de;
  display: flex;
  justify-content: center;
  align-items: center;
}
.picker-time {
  font-size: 38rpx;
  color: #2a7a6c;
  font-weight: 500;
  letter-spacing: 1rpx;
}
.result-title {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
  margin-bottom: 18rpx;
  text-align: center;
}
.sleep-time-list {
  display: flex;
  flex-direction: column;
  gap: 18rpx;
  margin-bottom: 20rpx;
  align-items: center;
}
.sleep-time-card {
  background: #fff;
  border-radius: 18rpx;
  box-shadow: 0 4rpx 16rpx #e0e7ef;
  padding: 22rpx 48rpx;
  display: flex;
  align-items: baseline;
  font-size: 0;
  min-width: 220rpx;
  justify-content: center;
}
.sleep-time-main {
  font-size: 36rpx;
  color: #2a7a6c;
  font-weight: 600;
  margin-right: 10rpx;
}
.duration {
  font-size: 22rpx;
  color: #b0b8c1;
  font-weight: 400;
}
.tips {
  color: #aaa;
  font-size: 24rpx;
  margin-top: 40rpx;
  text-align: center;
  letter-spacing: 1rpx;
}
</style> 