// pages/askLeave/askLeave.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 项目类型
    projectBelongs: '请选择',
    projectBelongsAry: ['项目类型1', '项目类型2', '项目类型3'],
    // 费用类型
    moneyType: '请选择',
    moneyTypeAry: ['费用类型1', '费用类型2', '费用类型3'],

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

    // 费用金额
    money: '',

    //剩余天数
    syDays: 0,

    // 经过计算获得的天数
    jsDays: 0,

    // 事由
    reason: "",

    // 上传图片的地址
    uploadSrc: ''
  },
  //改变金额
  moneyEvent(e) {
    let newValue = e.detail.value;
    this.setData({
      money: newValue
    })
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
      case "moneyType": {
        this.setData({
          moneyType: this.data.moneyTypeAry[value]
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
  //area
  areaEvent(e) {
    let newValue = e.detail.value;
    this.setData({
      reason: newValue
    })
  },
  // 提交按钮
  saveBtn() {
    if (true) {
      wx.navigateBack({
        delta: 1
      })
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