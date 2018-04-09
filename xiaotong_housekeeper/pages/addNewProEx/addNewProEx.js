// pages/addNewProEx/addNewProEx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //项目名字
    projectName:'xx优化',
    beginDate: '请选择',
    endDate: '请选择',
    //项目地点
    ProjectSiteIndex: 0,
    ProjectSiteArray: ['项目地点1', '项目地点2', '项目地点3'],
    ProjectSite: '请选择',
    //项目角色
    ProjectRolesIndex: 0,
    ProjectRolesArray: ['项目角色1', '项目角色2', '项目角色3'],
    ProjectRoles: '请选择',
    //运行商
    OperatorIndex: 0,
    OperatorArray: ['运行商1', '运行商2', '运行商3'],
    Operator: '请选择',
    //设备厂家
    EquipmentIndex: 0,
    EquipmentArray: ['设备厂家1', '设备厂家2', '设备厂家3'],
    Equipment: '请选择',
    //网络类型
    NetworkIndex: 0,
    NetworkArray: ['网络类型1', '网络类型2', '网络类型3'],
    Network: '请选择',
    //项目职责
    responsibilities: ''
  },

  //改变时间
  bindPickerChange(e) {
    let kind = e.target.dataset.type;
    let value = e.detail.value;
    switch (kind) {
      case 'begin':
        this.setData({ beginDate: value })
        break;
      case 'end':
        this.setData({ endDate: value })
        break;
      case 'site':
        this.setData({ ProjectSite: this.data.ProjectSiteArray[value] })
        break;
      case 'Roles':
        this.setData({ ProjectRoles: this.data.ProjectRolesArray[value] })
        break;
      case 'Operator':
        this.setData({ Operator: this.data.OperatorArray[value] })
        break;
      case 'Equipment':
        this.setData({ Equipment: this.data.EquipmentArray[value] })
        break;
      case 'Network':
        this.setData({ Network: this.data.NetworkArray[value] })
        break;
    }
    console.log(kind, value)
  },
  //项目职责
  responsibilitiesBtn(e) {
    this.setData({
      responsibilities: e.detail.value
    })
  },
  //保存
  saveBtn(){
    wx.navigateBack({
      delta:1
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