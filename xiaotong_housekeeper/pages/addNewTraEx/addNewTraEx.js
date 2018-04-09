// pages/addNewEduEx/addNewEduEx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    beginDate: '请选择',
    endDate: '请选择',
    //培训名字
    trainName: '郎沃培训机构',
    //教程名称
    tutorialName: '前端课程'
  },
  //改变时间
  bindPickerChange(e) {
    let kind = e.target.dataset.type;
    let value = e.detail.value;
    switch (kind) {
      case 'begin':
        this.setData({ beginDate: value })
        break;
      case 'end':
        this.setData({ endDate: value })
        break;
      default:
        break;
    }
    console.log(kind, value)
  },
  saveBtn() {
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