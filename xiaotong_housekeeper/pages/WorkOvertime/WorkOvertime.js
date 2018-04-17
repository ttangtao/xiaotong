// pages/askLeave/askLeave.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 项目类型
    projectBelongs: '请选择',
    projectBelongsAry: ['项目类型1', '项目类型2', '项目类型3'],

    // 开始
    beginDate: '日期',
    beginType: '全天',
    beginTypeAry: ['全天', '半天'],

    // 结束
    endDate: '日期',
    endType: '全天',
    endTypeAry: ['全天', '半天'],

    //申请天数
    sqDays: 0,

    // 经过计算获得的天数
    jsDays: 0,

    // 事由
    reason: "",

    // 上传图片的地址
    uploadSrc: ''
  },
  //上传图片函数
  uploadPic() {
    wx.chooseImage({
      success: (res) => {
        var tempFilePaths = res.tempFilePaths
        this.setData({
          uploadSrc: tempFilePaths[0]
        })
      }
    })
  },
  //改变pick函数
  bindPickerChange(e) {
    let value = e.detail.value
    let kind = e.currentTarget.dataset.kind;
    console.log(kind, value);
    switch (kind) {
      case "projectBelongs": {
        this.setData({
          projectBelongs: this.data.projectBelongsAry[value]
        }); break;
      }
      case "askDayType": {
        this.setData({
          askDayType: this.data.askDayTypeAry[value]
        }); break;
      }
      case "beginDate": {
        this.setData({
          beginDate: value
        }); break;
      }
      case "beginType": {
        this.setData({
          beginType: this.data.beginTypeAry[value]
        }); break;
      }
      case "endDate": {
        this.setData({
          endDate: value
        }); break;
      }
      case "endType": {
        this.setData({
          endType: this.data.endTypeAry[value]
        }); break;
      }

    }
  },
  // area值改变
  changeEvent(e) {
    let newValue = e.detail.value;
    this.setData({
      reason: newValue
    })
  },
  // 提交按钮
  saveBtn() {
    //todo 检查所有信息是否填写完整
    if (true) {
      wx.navigateBack({
        delta: 1,
      })
    } else {

    }
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