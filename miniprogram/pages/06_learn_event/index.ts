Page({
  data: {
    titles: ['手机', 'PC', 'iPad', '相机'],
    currentIndex: 0
  },
  onBtnTap(event: any) {
    console.log(event)
  },
  onOuterTap(event: any) {
    const { target, currentTarget } = event
    console.log(target)
    console.log(currentTarget)
    console.log(event === currentTarget)
  },
  onTouchTap(event: any) {
    console.log('tap', event)
  },
  onLongPress(event: any) {
    console.log('long', event)
  },
  onTouchEnd(event: any) {
    console.log('end', event)
  },
  onArgsTap(event: any) {
    const { name, height, age } = event.currentTarget.dataset
    console.log(name, height, age)
  },
  onItemTap(event: any) {
    this.setData({
      currentIndex: event.currentTarget.dataset?.index ?? 0
    })
  },

  /**
   * 捕获和冒泡过程
   */
  onView1CaptureTap() {
    console.log('onView1CaptureTap')
  },
  onView2CaptureTap() {
    console.log('onView2CaptureTap')
  },
  onView3CaptureTap() {
    console.log('onView3CaptureTap')
  },
  onView1Tap() {
    console.log('onView1Tap')
  }, 
  onView2Tap() {
    console.log('onView2Tap')
  },
  onView3Tap() {
    console.log('onView3Tap')
  },
  onMarkTap(event: any) {
    console.log(event.mark)
  }
})