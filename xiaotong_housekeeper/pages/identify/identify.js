// pages/identify/identify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testData: [
      { key: '姓名', value: '唐涛' },
      { key: '性别', value: '男' },
      { key: '证件号码', value: '510107199408293435' },
      { key: '出生日期', value: '19940829' },
      { key: '名族', value: '汉' },
      { key: '居住地', value: '四川省成都市武侯区武兴街2号团结社区' }
    ],
  },
  //保存按钮
  saveBtn(){
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