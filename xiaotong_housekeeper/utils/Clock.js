var QQMapWX = require('./qqmap-wx-jssdk.min.js');

class Clock {
  constructor() {
    this.qqmapsdk = new QQMapWX({
      key: 'ZMCBZ-CPDW6-IRUSJ-MFSHE-DABGS-HAFGR'//此处使用你自己申请的key  
    });
    // 上班有效时间
    this.up_time = null;
    // 上班有效时间
    this.up_time = null;
    // 地址
    this.address = null;
    // 时间
    this.time = new Date().toTimeString().split(' ')[0]
  }
  resetTime() {
    this.time = new Date().toTimeString().split(' ')[0]
  }

  //获取地点
  getLocation() {
    this.resetTime();
    wx.getLocation({
      type: 'wgs84',
      success: (suc) => {
        this.qqmapsdk.reverseGeocoder({
          location: {
            latitude: Number(suc.latitude),
            longitude: Number(suc.longitude)
          },
          success: (res) => {
            this.address = res.result
          }, fail: function (res) {
            console.log("定位失败", res);
          }
        });
      },
      fail: (fail) => {
        console.log(fail)
      }
    })
  }

  //状态判定
  getState(upWork_time, downWork_time, scope) {
    
    console.log(upWork_time, downWork_time, downWork_time)
  }


}

const clock = new Clock();

export default clock