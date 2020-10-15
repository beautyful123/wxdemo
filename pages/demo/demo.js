const util = require('../../utils/util.js')

// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '于立伟',
    age: 12,
    value: [1,1,1],
    cvalue: [],
    count: 100
  },
  changePicker(e) {
    // console.log(e.detail.value)
    var a = ["+", "-"][e.detail.value[0]];
    var b = ["1.","2.","3.","4.","5."][e.detail.value[1]];
    var c = [11,22,33,44,55][e.detail.value[2]];

    this.setData({
      value: e.detail.value,
      cvalue: [a,b,c]
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
    // console.log('res')
    var a = wx.getSystemInfoSync()
    // console.log("sync",a)
    wx.getSystemInfo({
      success(res) {
        // console.log(res)
      },
      fail(err) {
        // console.log(err)
      },
      complete() {
        // console.log(12312321)
      }
    })
    // console.log('yuliwei')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const time = new Date();
    var a = util.formatTime(time);
    // console.log(a);

    // 获取子组件实例
    const child = this.selectComponent('#d1');
    // console.log(child.properties)
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

  /**
   * 用户点击事件
   */
   changeText() {
     this.setData({
       name: '秦媛丽'
     })
   },
  //  双向绑定
  inputChange(e) {
    let key = e.currentTarget.dataset.name;
    let val = e.detail.value;
    this.setData({
      [key]: val
    })
  },
  getChildData(e) {
    // console.log(e.detail)
  }
})