// pages/home/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: '点击搜索电影'
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
    love() {
      wx.showToast({
        title: '♥媛丽我爱你♥',
        image: '/image/love.png'
      })
    }
  }
})
