import CardScanner from '../../cardscanner/cardscanner.js'
Page({
  onLoad(options) {
    let that = this
    this.imgPath = options.imgPath
    this.cardScanner = new CardScanner(this)
      .on('ImageChanged', (imgPath) => {
        that.imgPath = imgPath
      })
      .on('DecodeStart', (imgPath) => {
        wx.showLoading({
          title: '解析中',
          mask: true
        })
      })
      .on('DecodeComplete', (res) => {
        wx.hideLoading()
        if (res.code == 0) {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 1000
          })
          wx.redirectTo({
            url: '../identify/identify',
          })
          try {
            wx.setStorageSync('ocrObj', res.data)
          } catch (e) {
            console.log(e)
          }
        } else {
          wx.showToast({
            title: '失败',
            icon: 'none',
            duration: 1000
          })
          wx.redirectTo({
            url: '../identify/identify',
          })
        }
       
      })
  },

  onReady() {
    this.cardScanner.setImage(this.imgPath)
  }
})