// pages/ProjectInformation/ProductionDetails/ProductionDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaValue: '',
    row2List: [
      { key: '归属项目', value: 'xxx项目' },
      { key: '开始时间', value: '2018-01-25' },
      { key: '结束时间', value: '2018-01-25' },
      { key: '申请天数', value: '2' },
      { key: '补偿方式', value: '加班费' }
    ]
  },
  jump() {
    wx.navigateTo({
      url: '../fillOutputValue/fillOutputValue',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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