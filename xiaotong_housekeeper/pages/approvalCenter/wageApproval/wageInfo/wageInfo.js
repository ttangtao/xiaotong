// pages/myApply/myApply.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['按部门', '按项目'],
    currentTab: 0,
    array: ['1', '2', '3', '4'],
    index: 0,
    date: '2016-09-01',
    list: [
      { type: "订单跟踪", description: "移动终端优化2018年1月", status: "代开票", date: "2018年1月24日", name: "张三" }
    ]
  },
  //切换tab事件
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
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