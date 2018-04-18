// pages/home/home.js
const app_global = getApp().globalData;
const { formatTime } = require("../../utils/util.js")
import common from "../../utils/common.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

    console.log(app_global)
    //获取到全局的时间和星期
    this.setData({
      time: app_global.time,
      week: app_global.week,
      userInfo: app_global.userInfo,
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setTimeout(()=>{
      console.log(common._getLocation())
    },2000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  //加载动态时间
  onShow: function () {
    setInterval(() => {
      this.setData({
        time: formatTime()
      })
    }, 1000)
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