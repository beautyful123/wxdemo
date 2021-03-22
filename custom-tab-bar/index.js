// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    list: [
      '/pages/home/index',
      '/pages/search/index',
      "",
      '/pages/zt/index',
      '/pages/lsjl/lsju'
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openScanCode() {
      wx.scanCode({
        success(res) {
          console.log(res)
        }
      })
    },
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      let detail = event.detail;
      let url = this.data.list[detail]
      this.setData({ active: detail },() => {
        if(detail === 2) {
          this.openScanCode()
        } else {
          wx.switchTab({
            url
          })
        };
      });
      console.log(detail)
      console.log(this.data.active)
      setTimeout(()=> {
        console.log(detail)
        console.log(this.data.active)
      },3000)
    },
    init() {
      const page = getCurrentPages().pop();
      console.log(page)
      const that = this
         this.setData({
        　  active: this.data.list.findIndex(item => item === `/${page.route}`)
         }, () => {
           console.log(`/${page.route}`)
           console.log(that.data.active)
         });
    }
  }
})
