// pages/02_常见组件/index.ts
Page({
  data: {
    message: '你好，李银河',
    viewColors: ['red', 'blue', 'green', 'orange', 'purple', 'yellow']
  },

  /**
   * 监听scroll-view的滚动
   */
  onScrollToUpper() {
    console.log('滚动到最顶部/左边')
  },
  onScrollToLower() {
    console.log('滚到最底部/右边')
  },
  onScroll(event: any) {
    console.log("发生了滚动")
    console.log(event)
  }
})