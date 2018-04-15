var request = require('../../utils/requestService.js')
Page({
  data: {
  },
  onLoad: function () {

  },
  onReady: function () {
    var that = this;
    var url = 'Controller/QuestionAction.ashx?type=getAllQuestion';
    request.sendRequest(url, 'GET', {}, {})
      .then(function (response) {
        console.log(response);
      }, function (error) {
        console.log(error);
      });
  },
  onPullDownRefresh: function () {

  },
  onShareAppMessage: function () {
    // 微信分享需要的配置参数
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/user?id=123'
    }
    // console.log(1);
  }
});