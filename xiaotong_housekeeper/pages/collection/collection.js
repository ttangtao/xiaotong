// pages/todoWork/todoWork.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id_status: '',
    array: ['1', '2', '3', '4'],
    index: 0,
    date: '2016-09-01',
    fillList: [],
    fk_list: [
      { type: "应付款追踪", description: "移动终端优化2018年1月", status: "代开票", date: "2018年1月24日", key1: "xxx元", key2: "由xx提交" },
      { type: "应付款追踪", description: "移动终端优化2018年1月", status: "代开票", date: "2018年1月24日", key1: "xxx元", key2: "由xx提交" }
    ],
    sk_list: [
      { type: "应收款追踪", description: "移动终端优化2018年1月", status: "代开票", date: "2018年1月24日", key1: "xxx元", key2: "由xx提交" },
      { type: "应收款追踪", description: "移动终端优化2018年1月", status: "代开票", date: "2018年1月24日", key1: "xxx元", key2: "由xx提交" },
      { type: "应收款追踪", description: "移动终端优化2018年1月", status: "代开票", date: "2018年1月24日", key1: "xxx元", key2: "由xx提交" }
    ],
  },
  toDetail() {
    console.log(this.data.id_status)
    if (this.data.id_status === '应收款跟踪') {
      wx.navigateTo({
        url: './collectionInfo/collectionInfo'
      })
    } else if (this.data.id_status === '应付款跟踪') {
      wx.navigateTo({
        url: './paymentInfo/paymentInfo'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    let id_status = options.id;
    this.setData({
      id_status
    })

    // 更改BarTitle
    wx.setNavigationBarTitle({
      title: id_status
    })

    switch (id_status) {
      case "应收款跟踪":
        this.setData({
          fillList: this.data.sk_list
        })
        break;
      case "应付款跟踪":
        this.setData({
          fillList: this.data.fk_list
        })
        break;
      default:
        break;
    }

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
