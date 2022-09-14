/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    token: string,
    userInfo: object
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}