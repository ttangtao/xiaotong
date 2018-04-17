// pages/ProjectInformation/ProductionDetails/ProductionDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaValue: '',
    row2List: [
      { key: '合作企业名称', value: 'xxx', src: '../../img/right.png',color:'' },
      { key: '合同名称', value: 'xxx', src: '', color: ''  },
      { key: '项目名称', value: 'xxx', src: '', color: ''  },
      { key: '框架金额不含税(元)', value: 'xxx', src: '', color: '1' },
      { key: '总产值不含税(元)', value: 'xxx', src: '', color: '1' },
      { key: '总订单不含税(元)', value: 'xxx', src: '', color: '1' },
      { key: '总成本(元)', value: 'xxx', src: '', color: '1'  },
      { key: '毛利润(元)', value: 'xxx', src: '', color: '1'  },
      { key: '毛利率(%)', value: 'xxx', src: '', color: '2'  },
      { key: '利润指标', value: 'xxx', src: '', color: '2'  },
      { key: '项目详情', value: '', src: '../../img/right.png', color: ''  },
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