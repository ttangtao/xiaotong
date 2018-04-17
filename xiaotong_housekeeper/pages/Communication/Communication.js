// pages/announcement/announcement.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    currentTab: 0,//当前swiper
    content: "",//搜索内容
    checkboxItems: [
      { name: '研发部', value: '0', num: 12, checked: true },
      { name: '综合部', value: '1', num: 10 },
      { name: '研发部', value: '2', num: 12, checked: true },
      { name: '综合部', value: '3', num: 10 },
      { name: '研发部', value: '4', num: 12, checked: true },
      { name: '综合部', value: '5', num: 10 },
      { name: '研发部', value: '6', num: 12, checked: true }
    ],
    checkboxItems2: [
      { name: '项目1', value: '0', num: 12, checked: true },
      { name: '项目2', value: '1', num: 10 },
      { name: '项目3', value: '2', num: 12, checked: true },
      { name: '项目4', value: '3', num: 10 },
      { name: '项目5', value: '4', num: 12, checked: true },
    ],
  },
  swichNav: function (e) {
    console.log(e.target.dataset.current);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  swiperChange: function (e) {
    // console.log(e);
    this.setData({
      currentTab: e.detail.current,
    })
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
  //跳转到详情人员
  checkboxChange(e){
    let row = e.currentTarget.dataset.row;
    console.log(row)
    if (row){
      wx.navigateTo({
        url: './contactsList/contactsList',
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
