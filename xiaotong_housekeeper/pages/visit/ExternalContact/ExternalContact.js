// pages/MemberInformation/MemberInformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testData: [
      { key: '公司', value: 'xxx客户公司' },
      { key: '职位', value: 'xx经理' },
      { key: '地址', value: 'xxx省xx市xx路xx号' },
      { key: '生日', value: 'xx月xx日' },
      { key: '性别', value: '男' }
    ],
  },
  //跳转到拜访记录
  VisitRecordBtn(e) {
    wx.navigateTo({
      url: './ExternalCon_record/ExternalCon_record?id='+'拜访'
    })
  },
  //跳转到编辑界面
  EditBtn(){
    wx.navigateTo({
      url: './ExternalCon_edit/ExternalCon_edit',
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