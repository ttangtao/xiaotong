// pages/announcement/readRecord/readRecord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    list: [
      { name: '张三', value: '0', date:'2017-8-30'},
      { name: '李四', value: '1', date:'2018-8-30' },
      { name: '王五', value: '2', date:'2017-9-30'},
      { name: '唐涛', value: '3', date:'2017-8-30' },
      { name: '曾伟杰', value: '4', date:'2018-3-30'},
      { name: '老司机', value: '5', date:'2017-8-30' },
      { name: '邱霖', value: '6', date:'2018-4-30'},
      { name: '刘潘', value: '7', date:'2017-8-30' },
    ],//多选人员
    list2: [
      { name: '曾伟杰', value: '4', date: '2018-3-30' },
      { name: '老司机', value: '5', date: '2017-8-30' },
      { name: '邱霖', value: '6', date: '2018-4-30' },
      { name: '刘潘', value: '7', date: '2017-8-30' },
      { name: '张三', value: '0', date: '2017-8-30' },
      { name: '李四', value: '1', date: '2018-8-30' },
      { name: '王五', value: '2', date: '2017-9-30' },
      { name: '唐涛', value: '3', date: '2017-8-30' },
      
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