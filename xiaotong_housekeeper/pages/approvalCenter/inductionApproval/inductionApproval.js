// pages/IntegralManagement/IntegralManagement.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['简历信息', '其他信息', '个人材料'],
    currentTab: 0,
    testData: [
      { key: '姓名', value: '唐涛' },
      { key: '性别', value: '男' },
      { key: '证件号码', value: '510107199408293435' },
      { key: '出生日期', value: '19940829' },
      { key: '名族', value: '汉' },
      { key: '居住地', value: '四川省成都市武侯区武兴街2号团结社区' }
    ],
  },
  //切换tab事件
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  // 切换其他页面
  jump(e) {
    let kind = e.currentTarget.dataset.kind;
    console.log(kind)
    switch (kind) {
      case "结算项": {
        wx.navigateTo({
          url: '../ClearingItem/ClearingItem',
        })
        break;
      }
      case "产值填报": {
        wx.navigateTo({
          url: './OutputValue/OutputValue',
        })
        break;
      }
    }

  },
  gotoInfoBtn() {
    wx.navigateTo({
      url: '../customerInformation/customerInformation',
    })
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