// pages/01_初体验/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommeds: [],
    btns: ['red', 'blue', 'green', 'orange']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 开始创建Page实例
  onLoad() {
    // 发送网络请求
    wx.request({
      url: 'http://123.207.32.32:8000/home/multidata',
      success: (res: any) => {
        const { banner, recommed } = res?.data?.data
        this.setData({
          banners: banner?.list,
          recommeds: recommed?.list
        })
      }
    })
  },
  onBtnClick(event: any) {
    console.log(event.target.dataset.color)
  },

  /**
   * 下拉刷新/到达底部/页面滚动
   */
  onPullDownRefresh() {},
  onReachBottom() {},
  onPageScroll(event: any) {},

  /**
   * 其它生命周期回调函数
   */
  // Page实例创建完成
  onShow() {},
  // 第一次渲染完成
  onReady() {}, 
  // 退回到微信后台
  onHide() {},
  // 销毁
  onUnload() {}
})