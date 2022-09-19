// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    pages: [
      { name: '01_注册页面', path: '/pages/01_注册页面/index' },
      { name: '02_常见组件', path: '/pages/02_常见组件/index' },
      { name: '03_学习WXSS', path: '/pages/03_learn_wxss/index' },
      { name: '04_学习WXML', path: '/pages/04_learn_wxml/index' },
      { name: '05_学习wxs', path: '/pages/05_learn_wxs/index' },
      { name: '06_学习事件', path: '/pages/06_learn_event/index' },
      { name: '07_学习组件化', path: '/pages/07_learn_component/index' }
    ]
  },
  onBtnClick(e: any) {
    const _item = e.target.dataset.item
    // 跳转路径
    wx.navigateTo({
      url: _item.path
    })
  }
})
