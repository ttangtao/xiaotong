// pages/order/addNewOrder/addNewOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '请选择',
    fillList: [
      { key: '项目名称', value: 'xxx', src: '' },
      { key: '订单日期', value: 'xxx', src: '' },
      { key: '订单不含税金额(元)', value: 'xxx', src: '' },
      { key: '订单含税金额(元)', value: 'xxx', src: '' },
      { key: '订单税金(元)', value: 'xxx', src: '' },
      { key: '订单详情', value: 'xxx', src: '../../img/right.png' },
    ],
    row2List: [
      { key: '管理费率(%)', value: 'xxx', src: '' },
      { key: '应收款不含税金额(元)', value: 'xxx', src: '' },
      { key: '应收款含税金额(元)', value: 'xxx', src: '' },
      { key: '开票日期', value: 'xxx', src: '' },
      { key: '收款日期', value: 'xxx', src: '' }
    ],
  },
  commitBtn() {
    wx.navigateBack({
      delta: 1
    })
  },
  // 查看时间轴页面
  jump(){
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