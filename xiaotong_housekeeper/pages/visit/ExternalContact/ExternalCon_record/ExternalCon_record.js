// pages/visit/ExternalContact/ExternalCon_record/ExternalCon_record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 新增拜访记录页面
  newEXRecordBtn() {
    wx.navigateTo({
      url: '../newEx_record/newEx_record',
    })
  },
  updataEXRecordBtn() {
    wx.navigateTo({
      url: '../newEx_record/newEx_record',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //动态修改BarTitle
    wx.setNavigationBarTitle({
      title: '面试记录'
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
  onShow: function () {

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