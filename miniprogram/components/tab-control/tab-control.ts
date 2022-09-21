// components/tab-control/tab-control.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemTap(event: any) { 
      this.setData({
        currentIndex: event.currentTarget.dataset.index
      })
      this.triggerEvent("indexChanged", this.data.currentIndex)
    }
  }
})
