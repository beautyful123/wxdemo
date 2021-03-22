// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ['电影',"电视剧","综艺","动漫"],
    value: 1,
    dsList: [ //电视 list
      {
        title: '阳光之下', // 名称
        imgUrl: '/image/ygzx.jpg', //封面地址
        size: 40, //集数
        src: 'https://ylwtest-1304921030.cos.ap-beijing.myqcloud.com/' //video地址
      },
      {
        title: '假日暖洋洋', // 名称
        imgUrl: '/image/jrnyy.jpg', //封面地址
        size: 22, //集数
        src: 'https://ylwtest-1304921030.cos.ap-beijing.myqcloud.com/' //video地址
      },
      {
        title: '假日暖洋洋', // 名称
        imgUrl: '/image/jrnyy.jpg', //封面地址
        size: 21, //集数
        src: 'https://ylwtest-1304921030.cos.ap-beijing.myqcloud.com/' //video地址
      },
      {
        title: '假日暖洋洋', // 名称
        imgUrl: '/image/jrnyy.jpg', //封面地址
        size: 2, //集数
        src: 'https://ylwtest-1304921030.cos.ap-beijing.myqcloud.com/' //video地址
      },
      {
        title: '假日暖洋洋', // 名称
        imgUrl: '/image/jrnyy.jpg', //封面地址
        size: 22, //集数
        src: 'https://ylwtest-1304921030.cos.ap-beijing.myqcloud.com/' //video地址
      },
      {
        title: '假日暖洋洋', // 名称
        imgUrl: '/image/jrnyy.jpg', //封面地址
        size: 202, //集数
        src: 'https://ylwtest-1304921030.cos.ap-beijing.myqcloud.com/' //video地址
      },
      {
        title: '假日暖洋洋', // 名称
        imgUrl: '/image/jrnyy.jpg', //封面地址
        size: 999, //集数
        src: 'https://ylwtest-1304921030.cos.ap-beijing.myqcloud.com/' //video地址
      },
      {
        title: '假日暖洋洋', // 名称
        imgUrl: '/image/jrnyy.jpg', //封面地址
        size: 22, //集数
        src: 'https://ylwtest-1304921030.cos.ap-beijing.myqcloud.com/' //video地址
      },
      {
        title: '假日暖洋洋', // 名称
        imgUrl: '/image/jrnyy.jpg', //封面地址
        size: 222, //集数
        src: 'https://ylwtest-1304921030.cos.ap-beijing.myqcloud.com/' //video地址
      },
      {
        title: '假日暖洋洋', // 名称
        imgUrl: '/image/jrnyy.jpg', //封面地址
        size: 6, //集数
        src: 'https://ylwtest-1304921030.cos.ap-beijing.myqcloud.com/' //video地址
      },
      {
        title: '假日暖洋洋', // 名称
        imgUrl: '/image/jrnyy.jpg', //封面地址
        size: 22, //集数
        src: 'https://ylwtest-1304921030.cos.ap-beijing.myqcloud.com/' //video地址
      },
      {
        title: '假日暖洋洋', // 名称
        imgUrl: '/image/jrnyy.jpg', //封面地址
        size: 220, //集数
        src: 'https://ylwtest-1304921030.cos.ap-beijing.myqcloud.com/' //video地址
      }
    ]
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
    this.getTabBar().init()
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

  },
  changeValue(e) {
    let index = e.currentTarget.dataset.index
    console.log(index)
    this.setData({value:index})
  },
  // 详情
  goToDetail(e) {
    let msg = e.detail;
    console.log(msg)
    msg = JSON.stringify(msg)
    wx.navigateTo({
      url: `/pages/home/detail/index?msg=${msg}`,
    })
  }
})