//app.js
const netWork = require("./utils/requestService.js")
const { formatTime, formatWeek } = require("./utils/util.js")
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        netWork.sendRequest("Controller/BrokerAction.ashx?type=GetOpenid&code=" + res.code,
          "GET", {}, {})
          .then((suc) => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            this.globalData.session_key = JSON.parse(suc.data.Result).session_key;
            this.globalData.openid = JSON.parse(suc.data.Result).openid;
            //根据opendID查询是否加入我们团队
            //r如果没有加入
            if (false) {

            }
          }, (fail) => (fail) => { console.log(fail) })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
        else {
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    //获取当前时间并设为全局变量
    time: formatTime(),
    //星期几
    week: formatWeek(),
  }
})


