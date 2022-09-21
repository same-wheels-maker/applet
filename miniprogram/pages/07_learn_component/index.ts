// pages/07_learn_component/index.ts
Page({
  data: {
    titles: ['手机', 'PC', 'iPad', '相机']
  },
  onSectionTitleClick(event: any) {
    console.log(event.detail)
  },
  onTabIndexChange(event: any) {
    console.log(event.detail)
  }
})