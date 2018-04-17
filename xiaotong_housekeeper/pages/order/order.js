// pages/ProjectInformation/OutputValue/OutputValue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankDate: '请选择',
    rankTypeAry: ['种类1', '种类2', '种类3'],
    rankType: '请选择',
  },
  jump(e) {
    let kind = e.currentTarget.dataset.kind;
    switch (kind) {
      case "btn":
        wx.navigateTo({
          url: './addNewOrder/addNewOrder'
        })
        break;
      case "row":
        wx.navigateTo({
          url: './orderInfo/orderInfo'
        })
        break;
    }
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