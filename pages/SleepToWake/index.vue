<template>
  <view class="container">
    <view class="title">计算入睡时间</view>
    <view class="desc">请选择您希望醒来的时间：</view>
    <picker mode="time" :value="wakeTime" @change="onTimeChange">
      <view class="picker">
        {{ wakeTime }}
      </view>
    </picker>
    <view class="result" v-if="sleepTimes.length">
      <view class="result-title">推荐入睡时间：</view>
      <view class="sleep-time-list">
        <view class="sleep-time" v-for="(item, idx) in sleepTimes" :key="idx">
          {{ item.time }}<text class="duration">（{{ item.duration }}小时）</text>
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
  padding: 40rpx 20rpx;
}
.title {
  font-size: 40rpx;
  font-weight: bold;
  margin-bottom: 30rpx;
  text-align: center;
}
.desc {
  font-size: 28rpx;
  margin-bottom: 20rpx;
}
.picker {
  background: #f5f5f5;
  padding: 20rpx;
  border-radius: 10rpx;
  text-align: center;
  font-size: 32rpx;
  margin-bottom: 30rpx;
}
.result-title {
  font-size: 30rpx;
  font-weight: bold;
  margin-bottom: 10rpx;
}
.sleep-time-list {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
  margin-bottom: 20rpx;
}
.sleep-time {
  background: #e0f7fa;
  padding: 16rpx;
  border-radius: 8rpx;
  text-align: center;
  font-size: 30rpx;
  color: #888;
}
.duration {
  font-size: 20rpx;
  color: #b0b8c1;
}
.tips {
  color: #888;
  font-size: 24rpx;
  margin-top: 30rpx;
  text-align: center;
}
</style> 