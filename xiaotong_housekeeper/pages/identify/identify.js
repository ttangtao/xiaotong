// pages/identify/identify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uploadSrc:'',
    testData: [
      { key: '姓名', value: '唐涛' },
      { key: '性别', value: '男' },
      { key: '证件号码', value: '510107199408293435' },
      { key: '出生日期', value: '19940829' },
      { key: '名族', value: '汉' },
      { key: '居住地', value: '四川省成都市武侯区武兴街2号团结社区' }
    ],
  },
  //保存按钮
  saveBtn(){
    wx.navigateBack({
      delta:1
    })
  },
  // 上传按钮
  uploadBtn(){

    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['qrCode'],
      success: (res) => {
        console.log(res)
      }
    })
    // wx.chooseImage({
    //   success: (res) => {
    //     //预览图片
    //     var tempFilePaths = res.tempFilePaths
    //     this.setData({
    //       uploadSrc:tempFilePaths[0]
    //     })

    //     canvas = wx.createCanvasContext(canvasID)
    //     // 1. 绘制图片至canvas
    //     canvas.drawImage(imgPath, 0, 0, imgWidth, imgHeight)
    //     // 绘制完成后执行回调，API 1.7.0
    //     canvas.draw(false, () => {
    //       // 2. 获取图像数据， API 1.9.0
    //       wx.canvasGetImageData({
    //         canvasId: canvasID,
    //         x: 0,
    //         y: 0,
    //         width: imgWidth,
    //         height: imgHeight,
    //         success(res) {
    //           // 3. png编码
    //           let pngData = upng.encode([res.data.buffer], res.width, res.height)
    //           // 4. base64编码
    //           let base64 = wx.arrayBufferToBase64(pngData)
    //           // ...
    //         }
    //       })
    //     })

    //     // 上传图片
    //     // wx.uploadFile({
    //     //   url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
    //     //   filePath: tempFilePaths[0],
    //     //   name: 'file',
    //     //   formData: {
    //     //     'user': 'test'
    //     //   },
    //     //   success: function (res) {
    //     //     var data = res.data
    //     //     //do something
    //     //   }
    //     // })


    //   }
    // })
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