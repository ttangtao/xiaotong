// pages/askLeave/askLeave.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 项目类型
    projectBelongs: '请选择',
    projectBelongsAry: ['项目类型1', '项目类型2', '项目类型3'],

    // 采购类型
    procurementType: '请选择',
    procurementTypeAry: ['采购类型1', '采购类型2', '采购类型3'],

    // 采购名称
    procurementName: '',

    // 采购规格
    procurementSpe: '',

    // 采购数量
    procurementNum: '',

    // 采购单位
    procurementCom: '',

    // 采购价格
    procurementPri: '',

    // 采购金额
    money: '',

    //申请天数
    sqDays: 0,

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
      case "procurementType": {
        this.setData({
          procurementType: this.data.procurementTypeAry[value]
        }); break;
      }
    }
  },
  // 改变input函数
  bindInput(e) {
    let newValue = e.detail.value;
    let kind = e.currentTarget.dataset.kind;
    switch (kind) {
      case "procurementName": {
        this.setData({
          procurementName: newValue
        }); break;
      }
      case "procurementSpe": {
        this.setData({
          procurementSpe: newValue
        }); break;
      }
      case "procurementNum": {
        this.setData({
          procurementNum: newValue
        }); break;
      }
      case "procurementCom": {
        this.setData({
          procurementCom: newValue
        }); break;
      }
      case "procurementPri": {
        this.setData({
          procurementPri: newValue
        }); break;
      }
      case "area":
        this.setData({
          reason: newValue
        })
        break;
      default:
        break;
    }
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