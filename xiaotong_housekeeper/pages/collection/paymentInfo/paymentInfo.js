// pages/order/addNewOrder/addNewOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '请选择',
    fillList: [
      { key: '项目名称', value: 'xxx', src: '' },
      { key: '外包公司名称', value: 'xxx', src: '' },
      { key: '结算单日期', value: 'xxx', src: '' },
      { key: '结算单详情', value: '', src: '../../img/right.png' },
      { key: '应付款不含税金额(元)', value: 'xxx', src: '' },
      { key: '应付款含税金额(元)', value: 'xxx', src: '' },
      { key: '收票日期', value: 'xxx', src: '' },
      { key: '付款日期', value: 'xxx', src: '' }
    ],
  },
  commitBtn() {
    wx.navigateBack({
      delta: 1
    })
  },
  // 查看时间轴页面
  jump() {
    wx.navigateTo({
      url: '../collectionTime/collectionTime',
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