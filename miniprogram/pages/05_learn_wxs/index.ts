// pages/learn_wxs/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [
      { id: 111, name: '代码大全', price: 98 },
      { id: 112, name: '你不知道的JS', price: 87 },
      { id: 113, name: 'JS高级设计', price: 76 }
    ],
    playCount: 2444455
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log('er'.toString())
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})