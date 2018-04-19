var QQMapWX = require('./qqmap-wx-jssdk.min.js');

class Clock {
  constructor() {

    //腾讯地图对象
    this.qqmapsdk = new QQMapWX({
      key: 'ZMCBZ-CPDW6-IRUSJ-MFSHE-DABGS-HAFGR'//此处使用你自己申请的key  
    });

    //  距离
    this.distance = null;
    // 上班有效时间
    this.up_time = null;
    // 上班有效时间
    this.up_time = null;
    // 地址
    this.address = null;
    // 时间
    this.time = new Date().toTimeString().split(' ')[0];
    //打卡状态
    this.work_state = [];
  }


  //重置时间
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
          coord_type: 1,
          get_poi: 1,
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

  //判断当前位置到目标地点的距离
  getDistance(latitude, longitude) {
    this.qqmapsdk.calculateDistance({
      to: [{
        latitude: latitude,
        longitude: longitude
      }],
      success: (res) => {
        this.distance = res.result.elements[0].distance
      }
    });
  }

  //状态判定
  getState(cur_state, upWorkTime, upTime_sure, distance, scope) {
    console.log(cur_state, upWorkTime, upTime_sure, distance, scope)

    //重置状态数组
    this.work_state = [];

    //判断时间状态(true为正常,false为迟到)
    let time_state = this.checkTime(upTime_sure, upWorkTime);
    //判断距离状态(true为正常,false为外勤)
    let distance_state = this.checkDistance(distance, scope)

    switch (cur_state) {
      case '上班': {
        if (upWorkTime) {
          if (!time_state) {
            this.work_state.push({ key: '迟到', value: 'late_tag' })
          }
          if (!distance_state) {
            this.work_state.push({ key: '外勤', value: 'warn_tag' })
          }
          if (distance_state && time_state){
            this.work_state.push({ key: '正常', value: 'nomal_tag' })
          }
        }
        break;
      }
      case '下班': {
        if (upWorkTime) {
          if (time_state) {
            this.work_state.push({ key: '早退', value: 'late_tag' })
          }
          if (!distance_state) {
            this.work_state.push({ key: '外勤', value: 'warn_tag' })
          }
          if (distance_state && !time_state) {
            this.work_state.push({ key: '正常', value: 'nomal_tag' })
          }
        }
        break;
      }
      default:
        break;
    }
  }

  //时间判断是否迟到函数
  checkTime(startDate, endDate) {
    let startDateAry = startDate.split(':');
    let endDateAry = endDate.split(':');
    for (let i = 0; i < startDateAry.length; i++) {
      if (startDateAry[i] > endDateAry[i]) {
        return false
      } else if (startDateAry[i] < endDateAry[i]) {
        return true
      } else {
        continue
      }
    }
  }

  // 根据距离判断外勤还是正常
  checkDistance(distance, scope) {
    console.log(parseInt(distance), parseInt(scope))
    if (parseInt(distance) <= parseInt(scope)) {
      return true
    } else {
      return false
    }
  }


}

const clock = new Clock();

export default clock