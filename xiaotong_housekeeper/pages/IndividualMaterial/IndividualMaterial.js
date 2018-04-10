// pages/IndividualMaterial/IndividualMaterial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fillList: [
      { id: '1', title: '身份证（人像面）', src: '../img/add.png', previewSrc: '1', isShow: false },
      { id: '2', title: '身份证（国徽面）', src: '../img/add.png', previewSrc: '1', isShow: false },
      { id: '3', title: '学历证书', src: '../img/add.png', previewSrc: '1', isShow: false },
      { id: '4', title: '前公司离职证明', src: '../img/add.png', previewSrc: '1', isShow: false },
      { id: '5', title: '证件照', src: '../img/add.png', previewSrc: '1', isShow: false }
    ]
  },
  showPreview(e) {
    let id = e.currentTarget.id;
    let ary = this.data.fillList;
    ary.forEach((e) => {
      if (e.id == id) { e.isShow = !e.isShow }
    })
    this.setData({
      fillList: ary
    })
    console.log(ary)
  },
  //上传图片
  uploadPic(e) {
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: '', 
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            //do something
          }
        })
      }
    })
  },
  //上一步下一步
  preBtn() { 
    wx.navigateBack({
      delta:1
    })
  },
  nextBtn(){
    wx.navigateTo({
      url: '',
    })
  },
  //其他证件
  addOtherZJ(){
    wx.navigateTo({
      url: '../OtherCertificates/OtherCertificates',
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