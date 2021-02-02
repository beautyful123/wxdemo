// pages/home/components/item/items.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msg: {
      type: Object,
      value: {}
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
    goToDetail() {
      this.triggerEvent("goToDetail", this.properties.msg)
    }
  }
})
