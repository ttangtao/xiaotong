// pages/ProjectInformation/fillOutputValue/fillOutputValue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    row1List: [
      { key: '项目名称', value: 'xxx项目' },
      { key: '所属月份', value: '2018-01' },
      { key: '结算方式', value: '按人头月结' },
      { key: '不含税金额(元)', value: '11111' },
      { key: '含税金额(元)', value: '22222' },
      { key: '税金(元)', value: '2222' },
      { key: '订单提交日期', value: '2018-01-25' },
    ],
    row2List: [
      { kind: '自动获取', price: '123', value: '' },
      { kind: '自动获取', price: '123', value: '' }
    ],
    // 外包
    row1List_wb: [
      { key: '项目名称', value: 'xxx项目' },
      { key: '外包公司名称', value: 'xxx公司' },
      { key: '所属月份', value: '2018-01' },
      { key: '结算方式', value: '按人头月结' },
      { key: '不含税金额(元)', value: '11111' },
      { key: '含税金额(元)', value: '22222' },
      { key: '税金(元)', value: '2222' },
      { key: '订单提交日期', value: '2018-01-25' },
    ],
    row2List_wb: [
      { kind: '自动获取', price: '123', value: '' },
      { kind: '自动获取', price: '123', value: '' }
    ],
  },
  //提交按钮
  commitBtn() {
    wx.navigateBack({
      delta: 1
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