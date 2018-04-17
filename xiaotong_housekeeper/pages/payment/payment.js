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

    // 费用
    money: '',

    //支付日期
    paymentDate: '请选择',

    // 支付对象
    PayObject: '请选择',
    PayObjectAry: ["手动输入", "支付对象1", "支付对象2", "支付对象3"],
    PayObjectMethod: 'picker',
    // 开户行
    account: '',
    // 银行账号
    bankNum: '',
    // 开户地
    bankPle: '',
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
      case "moneyType": {
        this.setData({
          moneyType: this.data.moneyTypeAry[value]
        }); break;
      }

      case "paymentDate": {
        this.setData({
          paymentDate: value
        }); break;
      }
      case "PayObject": {
        if (this.data.PayObjectAry[value] === '手动输入') {
          this.setData({
            PayObject: '',
            PayObjectMethod: 'input'
          });
        } else {
          this.setData({
            PayObject: this.data.PayObjectAry[value]
          });
        }
        break;
      }
    }
  },
  // 改变input函数
  bindInput(e) {
    let newValue = e.detail.value;
    let kind = e.currentTarget.dataset.kind;
    switch (kind) {
      case "money":
        this.setData({
          money: newValue
        })
        break;
      case "PayObject":
        this.setData({
          PayObject: newValue
        })
        break;
      case "account":
        this.setData({
          account: newValue
        })
        break;
      case "bankNum":
        this.setData({
          bankNum: newValue
        })
        break;
      case "bankPle":
        this.setData({
          bankPle: newValue
        })
        break;
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