// app.ts
App<IAppOption>({
  globalData: {
    token: '',
    userInfo: {}
  },
  onLaunch() {
    // 从本地获取登录信息
    const _token = wx.getStorageSync('token')
    const _userInfo = wx.getStorageSync('userInfo') 

    // 进行登录操作
    if (!_token || !_userInfo) {
      // 将登录成功的数据保存到 storage
      wx.setStorageSync('token', 'kebeToken')
      wx.setStorageSync('userInfo', { nickname: 'kobe', level: 100 })
    }

    // 将获取到的数据登录数据保存到globalData中
    this.globalData.token = _token
    this.globalData.userInfo = _userInfo
  }
})