// pages/ProjectInformation/ProductionDetails/ProductionDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    row2List: [
      { key: '项目名称', value: 'xxx项目' },
      { key: '结算方式', value: '按人头月结' },
      { key: '管理费率(%)', value: '5' },
      { key: '考核得分', value: '98' },
      { key: '扣款金额(元)', value: '0' },
      { key: '不含税金额(元)', value: '11111' },
      { key: '含税金额(元)', value: '22222' },
      { key: '税金(元)', value: '2222' },
      { key: '结算单提交日期', value: '2018-01-25' },
    ],
    row3List: [
      { key: '结算类型', value: '高级' },
      { key: '单价(不含税)', value: '15000' },
      { key: '数量', value: '2' }
    ],
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