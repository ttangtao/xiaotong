// pages/announcement/announcement.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    content: "",//搜索内容
    checkboxItems: [
      { name: '研发部', value: '0', num: 12, checked: true },
      { name: '综合部', value: '1', num: 10 },
      { name: '研发部', value: '2', num: 12, checked: true },
      { name: '综合部', value: '3', num: 10 },
      { name: '研发部', value: '4', num: 12, checked: true },
      { name: '综合部', value: '5', num: 10 },
      { name: '研发部', value: '6', num: 12, checked: true },
      { name: '综合部', value: '7', num: 10 },
      { name: '研发部', value: '8', num: 12, checked: true },
      { name: '综合部', value: '9', num: 10 },
      { name: '研发部', value: '10', num: 12, checked: true },
      { name: '综合部', value: '11', num: 10 },
    ],//多选人员
  },
  tabClick1: function (e) {
    console.log(e.currentTarget)
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  tabClick2: function (e) {
    console.log(e.currentTarget)
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  // 搜索Btn
  searchBtn() {
    console.log(this.data.content)

  },
  // 获取搜索内容
  searchInput(e) {
    this.setData({
      content: e.detail.value
    })
  },
  checkboxChanges() {
    console.log("ss")
  },
  // 显示搜索
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  // 隐藏搜索
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  // 清空搜索框
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    console.log(e.detail)
    this.setData({
      inputVal: e.detail.value
    });
  },
  // 跳转具体的人员
  jump() {
    wx.navigateTo({
      url: '../sselect/sselect',
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
