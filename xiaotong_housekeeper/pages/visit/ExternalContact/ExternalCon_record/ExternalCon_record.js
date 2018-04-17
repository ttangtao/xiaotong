// pages/visit/ExternalContact/ExternalCon_record/ExternalCon_record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //全局状态,判定是从哪儿进来的
    id_status: '',
    fillList:[],
    //拜访数据
    visit: [
      { date: '2018-01-01', key1: 'xxx拜访事宜', key2: 'xx拜访方式'},
      { date: '2018-01-01', key1: 'xxx拜访事宜', key2: 'xx拜访方式'},
      { date: '2018-01-01', key1: 'xxx拜访事宜', key2: 'xx拜访方式'},
      { date: '2018-01-01', key1: 'xxx拜访事宜', key2: 'xx拜访方式'}
    ],
    //面试数据
    resume: [
      { date: '2018-01-01', key1: 'xxx面试事宜', key2: 'xx面试方式' },
      { date: '2018-01-01', key1: 'xxx面试事宜', key2: 'xx面试方式' },
      { date: '2018-01-01', key1: 'xxx面试事宜', key2: 'xx面试方式' },
      { date: '2018-01-01', key1: 'xxx面试事宜', key2: 'xx面试方式' }
    ]
  },
  // 新增拜访记录页面
  newEXRecordBtn() {
    wx.navigateTo({
      url: '../newEx_record/newEx_record?id=' + this.data.id_status,
    })
  },
  updataEXRecordBtn() {
    wx.navigateTo({
      url: '../newEx_record/newEx_record?id=' + this.data.id_status,
    })
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
          title: '面试记录'
        })
        this.setData({
          fillList: this.data.resume
        })
        break;
      case "拜访":
        wx.setNavigationBarTitle({
          title: '拜访记录'
        })
        this.setData({
          fillList: this.data.visit
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