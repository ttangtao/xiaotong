// pages/ProjectInformation/ProductionDetails/ProductionDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaValue: '',
    row2List: [
      { key: '合作企业名称', value: 'xxx', src: '../../img/right.png' },
      { key: '合同名称', value: 'xxx', src: '' },
      { key: '所属部门', value: 'xxx', src: '' },
      { key: '项目经理', value: 'xxx', src: '' },
      { key: '项目名称', value: 'xxx', src: '' },
      { key: '框架金额不含税(元)', value: 'xxx', src: '' },
      { key: '框架金额含税(元)', value: 'xxx', src: '' },
      { key: '利润指标(%)', value: 'xxx', src: '' },
      { key: '立项日期', value: 'xxx', src: '' },
      { key: '结算项', value: '', src: '../../img/right.png' },
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