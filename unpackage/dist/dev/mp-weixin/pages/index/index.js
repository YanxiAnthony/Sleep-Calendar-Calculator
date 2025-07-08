"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      wakeTime: "07:00",
      // 默认醒来时间
      sleepCycles: [6, 5, 4, 3],
      // 推荐周期数
      sleepTimes: []
    };
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
      this.sleepTimes = this.sleepCycles.map((cycle) => {
        const sleepMinutes = wakeTotalMinutes - cycle * 90;
        let hour = Math.floor((sleepMinutes + 1440) % 1440 / 60);
        let minute = (sleepMinutes + 1440) % 60;
        hour = hour < 10 ? "0" + hour : "" + hour;
        minute = minute < 10 ? "0" + minute : "" + minute;
        return `${hour}:${minute}`;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.wakeTime),
    b: $data.wakeTime,
    c: common_vendor.o((...args) => $options.onTimeChange && $options.onTimeChange(...args)),
    d: $data.sleepTimes.length
  }, $data.sleepTimes.length ? {
    e: common_vendor.f($data.sleepTimes, (time, idx, i0) => {
      return {
        a: common_vendor.t(time),
        b: idx
      };
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
