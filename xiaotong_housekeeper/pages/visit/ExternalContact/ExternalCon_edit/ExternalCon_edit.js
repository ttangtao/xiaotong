// pages/visit/ExternalContact/ExternalCon_edit/ExternalCon_edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testData: [
      { key: '姓名', value: 'xxx' },
      { key: '手机号码', value: 'xxx' },
      { key: '邮箱', value: '472625987@qq.com' },
      { key: '职位', value: 'xxx经理' },
      { key: '地址', value: 'xx省xx市xx路xx号' },
    ],
    companyAry: ["其他输入", "公司1", "公司2", "公司3", "公司4"],
    company: '请选择',
    companyShow: true,
    genderAry: ["男", "女"],
    gender: '请选择',
    brithday:"请选择",
    share:"请输入",
    shareAry:[1,2,3,4,5,6,7,8,9]
  },
  //改变pick
  bindPickerChange(e) {
    let kind = e.currentTarget.dataset.kind;
    let value = e.detail.value;
    if (this.data.companyAry[value] === "其他输入" && kind === 'company') {
      this.setData({
        companyShow: false,
        company: ''
      })
    } else {
      switch (kind) {
        case "gender": {
          this.setData({
            gender: this.data.genderAry[value]
          })
          break;
        }
        case "company": {
          this.setData({
            company: this.data.companyAry[value]
          })
          break;
        }
        case "brithday": {
          this.setData({
            brithday: value
          })
          break;
        }
        case "share": {
          this.setData({
            share: this.data.shareAry[value]
          })
          break;
        }
      }
    }
    console.log(kind, value)
  },
  // 改变input
  changInput(e) {
    let value = e.detail.value;
    this.setData({
      company: e.detail.value
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