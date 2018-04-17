// pages/visit/ExternalContact/newEx_record/newEx_record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id_status: '',
    // 拜访
    VisitWay: '请选择',
    VisitWayAry: ["拜访方式一", "拜访方式一", "拜访方式一"],
    Visit_sy: '',
    VisitMatters: '',
    // 面试
    resWay: '请选择',
    resWayAry: ["面试方式一", "面试方式二", "面试方式三"],
    resMatters: '',
    //面试结论
    resRul: '请选择',
    resRulAry: ["面试结论一", "面试结论二", "面试结论三"],
    // 离职
    leaveDate: '请选择',
    leavetters: '',

  },
  //提交按钮
  commitBtn() {
    wx.navigateBack({
      delta: 1
    })
  },
  // pick
  bindPickerChange(e) {
    let id_status = this.data.id_status;
    let newValue = e.detail.value;
    let kind = e.currentTarget.dataset.kind;
    console.log(id_status, newValue, kind)

    switch (id_status) {
      case "拜访": {
        switch (kind) {
          case "VisitWay": {
            this.setData({
              VisitWay: this.data.VisitWayAry[newValue]
            })
            break;
          }
          case "Visit_sy": {
            this.setData({
              Visit_sy: newValue
            })
            break;
          }
          case "area": {
            this.setData({
              VisitMatters: newValue
            })
            break;
          }
          default:
            break;
        }
        break;
      }
      case "面试": {
        switch (kind) {
          case "resRul": {
            this.setData({
              resRul: this.data.resRulAry[newValue]
            })
            break;
          }
          case "resWay": {
            this.setData({
              resWay: this.data.resWayAry[newValue]
            })
            break;
          }
          case "area": {
            this.setData({
              resMatters: newValue
            })
            break;
          }
          default:
            break;
        }
        break;
      }
      case "离职": {
        switch (kind) {
          case "leaveDate": {
            this.setData({
              leaveDate: newValue
            })
            break;
          }
          case "area": {
            this.setData({
              leavetters: newValue
            })
            break;
          }
          default:
            break;
        }
        break;
      }
      default:
        break;
    }



  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id_status = options.id
    this.setData({
      id_status
    })
    switch (id_status) {
      case "面试":
        wx.setNavigationBarTitle({
          title: '面试明细'
        })
        break;
      case "拜访":
        wx.setNavigationBarTitle({
          title: '拜访明细'
        })
        break;
      case "离职":
        wx.setNavigationBarTitle({
          title: '离职'
        })
        break;
      default:
        break;
    }
    console.log(id_status)
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