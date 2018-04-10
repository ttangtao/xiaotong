// pages/EntryRegistration/EntryRegistration.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //开户行
    openAccountIndex: 0,
    openAccountArray: ['中国银行', '成都银行'],
    openAccount: '请选择',
    //开户地
    openAccountSiteIndex: 0,
    openAccountSiteArray: ['地点1', '地点2'],
    openAccountSite: '请选择',
    //联系人关系
    EmergencyContactIndex: 0,
    EmergencyContactArray: ['关系1', '关系2'],
    EmergencyContact: '请选择',
  },
  bindPickerChange(e) {
    let kind = e.target.dataset.type;
    let value = e.detail.value;
    switch (kind) {
      case 'openAccount':
        this.setData({ openAccount: this.data.openAccountArray[value] })
        break;
      case 'EmergencyContact':
        this.setData({ EmergencyContact: this.data.EmergencyContactArray[value] })
        break;
      default:
        break;
    }
    console.log(kind, value)
  },
  //上一步
  preBtn() {
    wx.navigateBack({
      delta: 1
    })
  },
  nextBtn() {
    //提交
    wx.navigateTo({
      // url: '../Education_ex/Education_ex',
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