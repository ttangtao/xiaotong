// pages/pre_info_sheet/pre_info_sheet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testData: [
      { key: '姓名', value: '唐涛' },
      { key: '性别', value: '男' },
      { key: '证件号码', value: '510107199408293435' },
      { key: '出生日期', value: '19940829' },
      { key: '名族', value: '汉' },
      { key: '居住地', value: '四川省成都市武侯区武兴街2号团结社区' }
    ],
    //政治面貌
    Political: '请选择',
    PoliticalArray: ['群众', '团员', '党员'],
    PoliticalIndex: 0,
    //婚姻状况
    marriage: '请选择',
    marriageArray: ['未婚', '已婚', '离婚', '丧偶'],
    marriageIndex: 0,
    //身高
    height: '',
    //体重
    weight: ''
  },
  //改变政治面貌函数
  bindPickerChange_Political(e) {
    this.setData({
      Political: this.data.PoliticalArray[e.detail.value]
    })
  },
  //改变婚姻状况函数
  bindPickerChange_marriage(e) {
    this.setData({
      marriage: this.data.marriageArray[e.detail.value]
    })
  },
  //身高体重
  inputEvent(e) {
    let kind = e.currentTarget.dataset.type
    let value = e.detail.value
    if (kind == 'height') {
      this.setData({
        height: value
      })
    } else if (kind == 'weight') {
      this.setData({
        weight: value
      })
    } else {
      return false;
    }
  },
  //识别按钮
  identifyEvent(){
    wx.navigateTo({
      url: '../identify/identify',
    })
  },
  //下一步按钮
  nextBtn(){
    wx.navigateTo({
      url: '../Project_ex/Project_ex',
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