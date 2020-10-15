// components/navbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "于立伟真帅！"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    backone() {
      wx.showLoading({
        title: '稍等',
      })
      wx.navigateBack({
        delta: 1,
      })
      wx.hideLoading()
    }
  }
})
