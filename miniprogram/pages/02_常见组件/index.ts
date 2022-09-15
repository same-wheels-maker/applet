// pages/02_常见组件/index.ts
Page({
  data: {
    message: '你好，李银河',
    viewColors: ['red', 'blue', 'green', 'orange', 'purple', 'yellow'],
    choosedImageUrl: ''
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
  },
  getUserInfo() {
    // 调用API，获取用户信息
    wx.getUserProfile({
      desc: 'desc',
      // success: (res) => {
      //   console.log(res)
      // }
    }).then(res => {
      console.log(res)
    })
  },
  getPhoneNumber(event: any) {
    console.log(event)
  },
  onChooseImage() {
    wx.chooseMedia({
      mediaType: ['image']
    }).then(res => {
      this.setData({
        choosedImageUrl: res.tempFiles?.[0]?.tempFilePath
      })
    })
  }
})