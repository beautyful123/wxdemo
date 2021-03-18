// custom-tab-bar/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 'home',
    list: {
      home: '/pages/home/index',
      search: '/pages/search/index',
      special: '/pages/zt/index',
      history: '/pages/lsjl/lsju'
    }
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    let detail = event.detail;
    this.setData({ active: detail });
    let url = this.data.list[detail]
    wx.switchTab({
      url
    })
    console.log(this.data.active)
    console.log(detail)
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
    console.log("于立伟真帅")
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