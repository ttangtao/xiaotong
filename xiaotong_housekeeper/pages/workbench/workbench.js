// pages/workbench/workbench.js
const app_global = getApp().globalData;
const { formatTime } = require("../../utils/util.js")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    //公司领导列表
    companyLeaderList: [
      { title: '应收账款', src: '../img/receiving.png' },
      { title: '应付账款', src: '../img/payment.png' },
      { title: '工资审批', src: '../img/approval4.png' },
      { title: '报销审批', src: '../img/approval4.png' },
      { title: '付款审批', src: '../img/approval4.png' }
    ],
    //财务列表
    financialList: [
      { title: '应收款跟踪', src: '../img/genzhong.png' },
      { title: '应付款跟踪', src: '../img/genzhong.png' },
      { title: '报销审批', src: '../img/approval3.png' },
      { title: '付款审批', src: '../img/approval3.png' }
    ],
    //人事模块
    personneList: [
      { title: '入职审批', src: '../img/approval2.png' },
      { title: '离职审批', src: '../img/approval2.png' }
    ],
    //项目列表
    projectList: [
      { title: '产值填报', src: '../img/fillValue.png' },
      { title: '订单跟踪', src: '../img/genzhong.png' },
      { title: '外包产值填报', src: '../img/OutsourcingProduction.png' },
      { title: '结算单跟踪', src: '../img/genzhong.png' },
      { title: '报销审批', src: '../img/approval.png' },
      { title: '工时审批', src: '../img/approval.png' },
      { title: '用车审批', src: '../img/approval.png' },
      { title: '请假审批', src: '../img/approval.png' },
      { title: '加班审批', src: '../img/approval.png' }
    ],
    //移动办公
    MobileOffice: [
      { title: '请假', src: '../img/leave.png' },
      { title: '加班', src: '../img/overtime.png' },
      { title: '报销', src: '../img/reimburse.png' },
      { title: '付款', src: '../img/payment.png' },
      { title: '通讯录', src: '../img/addressBook.png' },
      { title: '拜访', src: '../img/visit.png' },
      { title: '面试', src: '../img/interview.png' },
      { title: '离职', src: '../img/departure.png' }
    ]
  },
  // 跳转页面
  jump(e) {
    let kind = e.currentTarget.dataset.kind;
    let url = '';
    switch (kind) {
      case "请假":
        url = "../askLeave/askLeave";
        break;
      case "加班":
        url = "../WorkOvertime/WorkOvertime";
        break;
      case "报销":
        url = "../claim/claim";
        break;
      case "付款":
        url = "../payment/payment";
        break;
      case "通讯录":
        url = "../Communication/Communication";
        break;
      case "拜访":
        url = "../visit/visit";
        break;
      case "面试":
        url = "../interview/interview";
        break;
      case "离职":
        url = "../visit/ExternalContact/newEx_record/newEx_record?id="+'离职';
        break;
      default:
        break;
    }
    console.log(url)
    if (url){
      wx.navigateTo({
        url: url,
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app_global)
    //获取到全局的时间和星期
    this.setData({
      time: app_global.time,
      week: app_global.week,
      userInfo: app_global.userInfo,
    })
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
    setInterval(() => {
      this.setData({
        time: formatTime()
      })
    }, 1000)
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