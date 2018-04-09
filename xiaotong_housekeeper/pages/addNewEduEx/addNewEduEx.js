// pages/addNewEduEx/addNewEduEx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    beginDate: '请选择',
    endDate: '请选择',
    //学校名字
    schoolName: '北京大学',
    //学位
    schooling: '请选择',
    schoolingArray: ['中学', '专科', '本科', '硕士', '博士'],
    ProjectSiteIndex: 0,
    //专业名称
    professionalName: '自动化'
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
      case 'schooling':
        this.setData({ schooling: this.data.schoolingArray[value] })
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