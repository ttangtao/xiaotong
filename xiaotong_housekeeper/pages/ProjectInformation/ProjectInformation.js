// pages/IntegralManagement/IntegralManagement.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['项目信息', '团队成员', '排行榜'],
    currentTab: 0,
    rankDate:'请选择',
    rankTypeAry: ['种类1', '种类2', '种类3'],
    rankType:'请选择'
  },
  //切换tab事件
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  gotoInfoBtn(){
    wx.navigateTo({
      url: '../customerInformation/customerInformation',
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