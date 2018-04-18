// pages/home/home.js
const app_global = getApp().globalData;
const { formatTime, formatHours } = require("../../utils/util.js")
const { upWorkTime, downWorkTime, scope } = require("../../utils/config.js")
import clock from "../../utils/Clock.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {

    //当前改打卡的状态
    cur_state: null,

    test_statu: '',

    // 上班时间
    upWork_time: null,
    // 上班地址
    upAddress: '点击按钮获取地址',
    //上班确定时间
    downTime_sure: null,
    //上班确定地点
    upAddress_sure: null,
    // 上班时间有效状态
    upWork_time_state: null,
    // 上班地点有效状态
    upWork_place_state: null,
    // 上班地点有效距离
    upWork_place_distance: 300,



    // 下班时间
    downWork_time: null,
    // 下班地址
    downAddress: '点击按钮获取地址',
    //下班确定时间
    downTime_sure: null,
    //下班确定地点
    downAddress_sure: null,
    // 下班时间有效状态
    downWork_time_state: null,
    // 下班地点有效状态
    downWork_place_state: null,
    // 下班地点有效距离
    downWork_place_distance: 300,

  },
  // 跳转按钮
  jump(e) {
    let kind = e.currentTarget.dataset.kind;
    let url = '';
    switch (kind) {
      case 'notice':
        url = '../announcement/announcement'
        break;
      case 'work':
        url = '../todoWork/todoWork'
        break;
      case 'apply':
        url = '../myApply/myApply'
        break;
      default:
        break;
    }
    if (url) {
      wx.navigateTo({
        url: url
      })
    }
  },
  // 打卡按钮
  clockBtn(e) {
    //重新获取时间和地点
    clock.getLocation();

    let kind = e.currentTarget.dataset.kind;

    clock.getState(upWorkTime, downWorkTime,scope);

    //获取地理位置
    clock.getLocation();
    wx.showLoading({
      title: '加载中',
    })

    //1秒后打卡
    setTimeout(() => {
      if (clock.address) {
        wx.hideLoading()
        switch (kind) {
          case 'up':
            this.setData({
              upTime_sure: clock.time,
              upAddress_sure: clock.address.address
            })
            break;
          case 'down':
            this.setData({
              downTime_sure: clock.time,
              downAddress_sure: clock.address.address
            })
            break;
          default:
            break;
        }
      }
    }, 1000)

    //3秒后是否获取到位置都取消等待框
    setTimeout(() => {
      wx.hideLoading()
      if (!clock.address) {
        wx.showToast({
          title: '获取失败',
          icon: 'none',
          duration: 1000
        })
      }
    }, 3000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app_global)
    //加载页面时,获取地点并显示在上面                  
    clock.getLocation();
    //获取到全局的时间和星期
    this.setData({
      time: app_global.time,
      week: app_global.week,
      upWork_time: formatHours(),
      downWork_time: formatHours(),
      userInfo: app_global.userInfo,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  //加载动态时间
  onShow: function () {
    setInterval(() => {
      this.setData({
        time: formatTime(),
        upWork_time: formatHours(),
        downWork_time: formatHours(),
        upAddress: clock.address.address ? clock.address.address : '点击按钮获取地址',
        downAddress: clock.address.address ? clock.address.address : '点击按钮获取地址'
      })
    }, 1000)
    //每隔10分钟重新获取一边地点
    setInterval(() => {
      clock.getLocation();
    }, 600000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})