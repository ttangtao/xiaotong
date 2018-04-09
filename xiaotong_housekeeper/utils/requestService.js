// 本服务用于封装请求
// 返回的是一个promisepromise

var sendRequest = function (url, method, data, header) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'https://bx.wandaotong.cn/'+url,
      data: data,
      method: method,
      header: header,
      success: resolve,
      fail: reject
    })
  });
  return promise;
};

module.exports.sendRequest = sendRequest 