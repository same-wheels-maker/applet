// components/section-info/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "默认标题"
    },
    content: {
      type: String,
      value: "我是默认内容"
    }
  },
  externalClasses: ["info"],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTitleTap() {
      this.triggerEvent("titleClick", "aaa")
    }
  }
})
