// pages/ProjectInformation/ProductionDetails/ProductionDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    row1List: [
      { key: '项目总产值(元)', value: '0' },
      { key: '项目总订单(元)', value: '0' },
      { key: '总产值-总订单(元)', value: '0' }
    ],
    row2List:[
      { key: '项目名称', value: 'xxx项目' },
      { key: '所属月份', value: '2018-01' },
      { key: '结算方式', value: '按人头月结' },
      { key: '不含税金额(元)', value: '11111' },
      { key: '含税金额(元)', value: '22222' },
      { key: '税金(元)', value: '2222' },
      { key: '产值填报日期', value: '2018-01-25' },
    ],
    row3List:[
      { key: '结算类型', value: '高级' },
      { key: '单价(不含税)', value: '15000' },
      { key: '数量', value: '2' }
    ],
    // 外包
    row1List_wb: [
      { key: '该外包公司总产值(元)', value: '0' },
      { key: '该外包公司总结算单(元)', value: '0' },
      { key: '总产值-总结算单(元)', value: '0' }
    ],
    row2List_wb: [
      { key: '项目名称', value: 'xxx项目' },
      { key: '外包公司名称', value: 'xxx公司' },
      { key: '所属月份', value: '2018-01' },
      { key: '结算方式', value: '按人头月结' },
      { key: '不含税金额(元)', value: '11111' },
      { key: '含税金额(元)', value: '22222' },
      { key: '税金(元)', value: '2222' },
      { key: '产值填报日期', value: '2018-01-25' },
    ],
    row3List_wb: [
      { key: '结算类型', value: '高级' },
      { key: '单价(不含税)', value: '15000' },
      { key: '数量', value: '2' }
    ],
  },
  jump(){
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