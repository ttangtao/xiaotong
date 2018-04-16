// pages/order/addNewOrder/addNewOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'请选择',
    fillList: [
      { key: '项目名称', value: 'xxx', src: '' },
      { key: '结算方式', value: 'xxx', src: '' },
      { key: '考核得分', value: 'xxx', src: '' },
      { key: '扣款金额(元)', value: 'xxx', src: '' },
      { key: '不含税金额(元)', value: 'xxx', src: '' },
      { key: '含税金额(元)', value: 'xxx', src: '' },
      { key: '税金(元)', value: 'xxx', src: '' },
      { key: '订单照片', value: '', src: '../../img/add.png' },
      { key: '订单提交日期', value: 'xxx', src: '' }
    ],
    row2List: [
      { kind: '自动获取', price: '123', value: '2' },
      { kind: '自动获取', price: '123', value: '3' }
    ],
  },
  commitBtn(){
    wx.navigateBack({
      delta:1
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