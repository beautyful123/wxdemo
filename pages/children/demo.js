// pages/children/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=wx93bcde514c0a61ac&secret=edf6d3b9faaea93e04c19195ca0d8c28',
      success(res) {
      }
    })
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

  },
  openLocation() {
    console.log('之前')
    wx.getLocation({
      altitude: 'altitude',
      isHighAccuracy: true,
      highAccuracyExpireTime: 5333,
      success(res) {
        console.log(res)
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 10,
          address: '这是你目前的位置'
        })
      },
      fail(err) {
        console.log(err)
      },
      complete(err) {
        console.log("走了complete")
      }
    })
    // wx.openLocation({
    //   latitude: 34,
    //   longitude: 108,
    //   scale: 10,
    //   address: 'testtest啊'
    // })
  },
  getImage() {
    var that = this
    wx.request({
      //注意：下面的access_token值可以不可以直接复制使用，需要自己请求获取
      url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=38_r6mMNh-qhmo02GNj1XrLl2Eq_VEG9BuYPM4XfgtZWEkIbzZ_0qAFT-j1vrq1rejKsspkY5Y1Nr_VDje14CTcuaM3vBDpi9L1UmuReZTWFme-zB8QRIFFNipBmCNNdT6V656-gXmDr3l4Wh4pKVScADADOL',
      data: {
        scene: '000',
        page: ""  //这里按照需求设置值和参数   
      },
      method: "POST",
      responseType: 'arraybuffer',  //设置响应类型
      success(res) {
        var src2 = wx.arrayBufferToBase64(res.data);  //对数据进行转换操作
        that.setData({
          src2
        })

        // let fileManager = wx.getFileSystemManager();//获取文件管理器
        // let filePath = wx.env.USER_DATA_PATH + '/inner.jpg';//设置临时路径
        // fileManager.writeFile({//获取到的数据写入临时路径
        //   filePath: filePath,//临时路径
        //   encoding: 'binary',//编码方式，二进制
        //   data: res.data,//请求到的数据
        //   success: function(res) {
        //     console.log(res)
        //     console.log(filePath)//打印路径
        //     wx.previewImage({//图片预览
        //       urls: [filePath],
        //     })
        //     wx.hideLoading();
        //   }
        // })
      }
    })
  },

  //小程序生命周期 
  lifetimes: {
    created() {
      console.log('children组件创建')
    }
  }
})