// pages/demo/child/child.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    age: {
      type: Number,
      value: 10000,
    },
    count: {
      type: Number,
      value: 0
    }
  },
  //小程序生命周期 
  lifetimes: {
    created() {
      console.log('children组件创建')
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    say: "babasb"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toFather() {
      var a = {name:'ylw',age:12};
      this.triggerEvent("myEvent", a);
    },
    changeCount() {
      this.setData({
        count: 999
      })
    },
    login() {
      // wx.createMapContext()
      wx.createCameraContext()
    },
    handleSend() {
      wx.showToast({
        title: 'ajskdhakjs',
        icon: ''
      })
      wx.request({
        url: 'http://127.0.0.1:3000/test',
        header: {
          msg: "yuliweizhenshuai"
        },
        success(res) {
          console.log("ajax sccessed")
          console.log(res)
        },
        fail: function(err) {
          console.log(err)
        },
        complete: function() {
          console.log(123123)
        }
      })
    }
  }
})
