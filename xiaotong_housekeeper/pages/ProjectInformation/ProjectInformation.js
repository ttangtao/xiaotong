// pages/IntegralManagement/IntegralManagement.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    who: '经理',
    navbar: ['项目信息', '团队成员', '排行榜'],
    currentTab: 0,
    rankDate: '请选择',
    rankTypeAry: ['种类1', '种类2', '种类3'],
    rankType: '请选择',
    //经理渲染列表
    managerList: [
      { key: '客户名称', value: 'xxx公司', src: '../img/right.png' },
      { key: '项目名称', value: 'xxx项目', src: '' },
      { key: '立项日期', value: '2018-01-01', src: '' },
      { key: '税率(%)', value: '6', src: '' },
      { key: '含框架金额不含税(元)', value: '1000000', src: '' },
      { key: '含框架金额含税(元)', value: '1000000', src: '' },
      { key: '结算项', value: '', src: '../img/right.png' },
      { key: '管理费率(%)', value: '5', src: '' },
      { key: '利润指标(%)', value: '30', src: '' },
    ],
    managerProSchedule: [
      { key: '产值填报', value: '', src: '../img/right.png' },
      { key: '订单跟踪', value: '', src: '../img/right.png' },
      { key: '外包产值填报', value: '', src: '../img/right.png' },
      { key: '结算单跟踪', value: '', src: '../img/right.png' },
    ]
  },
  //切换tab事件
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  // 切换其他页面
  jump(e){
    let kind = e.currentTarget.dataset.kind;
    console.log(kind)
    switch (kind){
      case "结算项":{
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