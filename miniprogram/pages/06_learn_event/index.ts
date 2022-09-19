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
  }
})