var QQMapWX = require('./qqmap-wx-jssdk.min.js');

class Common {
  constructor() {
    this.qqmapsdk = new QQMapWX({
      key: 'ZMCBZ-CPDW6-IRUSJ-MFSHE-DABGS-HAFGR'//此处使用你自己申请的key  
    });
  }

  _getLocation() {
    wx.getLocation({
      type: 'wgs84',
      success: (suc) => {
        this.qqmapsdk.reverseGeocoder({
          location: {
            latitude: Number(suc.latitude),
            longitude: Number(suc.longitude)
          },
          success: function (res) {
            console.log(res.result.address)
            return res.result.address
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
}


const common = new Common();

export default common;