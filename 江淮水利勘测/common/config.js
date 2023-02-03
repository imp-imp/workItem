export const dev_host = 'http://zbphp.zhongbenzx.com'; // 开发环境域名
export const mock_host = 'http://mock.zhongbenruanjian.com'; // MOCK环境域名
export const product_host = 'http://zbphp.zhongbenzx.com'; // 生产环境域名
export const WEBSOCKET = 'wss://zbphp.zhongbenzx.com/socket/';
export const PAAS_URL = 'https://yufabu.tiantianhuoke.com'; // paas域名

export const IS_DEV = 2;                              // 0:生产环境 1:开发环境 2:mock环境 3:paas环境
export const PAGE_SIZE = 15;                          // 分页配置 每页条数
export const API_VERSION = 'v1';//APP接口版本号 正常是V1 使用天添客m加企业ID

let _host = ''
switch (IS_DEV) {
  case 0:
    _host = product_host
    break;
  case 1:
    _host = dev_host
    break;
  case 2:
    _host = mock_host
    break;
  case 3:
    _host = PAAS_URL
    break;
  default:
    break;
}
export const host = _host; // 项目中接口地址host
export const SHAREURL = host + '/h5/#/'; // 分享的H5地址
export const SERIAL = '069abc79380567020aead433ddc3f6d7'; // 项目序列号(千万千万千万不要修改!!!!)
export const BenBenChooseFileKey = ''; // 文件选择原生插件key
export const BASE_URL = `${host}`;                    // 基础路径
export const API_BASE_URL = `${host}/api`;            // 接口请求基础路径
export const UPLOAD_VIDEO_URL = `${host}/api/$v1/5fc615f7da92b`; // 视频上传上传接口路径
export const STATIC_URL = '/static/images/';        // 静态资源目录
export const IMG_BASE_URL = `${host}/upload/`;        // 图片基础路径 公共filters assembleImgSrc依赖此配置
export const HOME_PAGE_URL = ["/pages/tabBar/page/page"] // 配置首页路由 主要用于跳转首页
// tabBar配置
export const tabbarConfig = {"roleTabBarShow":[[0,1,2,3]],"listNum":4}
// 主题色配置
export const themeColorConfig = [{"colorConfig":["#333333","#666666","#999999","#ffffff","#1178F0","#F02325","#FC9C3A","#4DC777","#F2CC98"],"bgColorConfig":["#EBEDF8","#FFFFFF","#1178F0","#FC9C3A","#E6F1FE","linear-gradient(301deg, #EBBA7B 0%, #F8D9AD 100%)","linear-gradient(180deg, #F5588E 0%, #F0403C 100%)","linear-gradient(179deg, #FFD033 0%, #F4890E 100%)"],"bdColorConfig":["#EBEDF8","#FFFFFF","#1178F0","#FC9C3A"]}]
// #ifdef APP-PLUS || H5
export const LOGIN_PAGE_URL = '/pages/tabBar/login/login' // 登录页面路由 request.js 依赖此配置 主要用于登录失效跳转
// #endif
// #ifdef MP-WEIXIN
export const LOGIN_PAGE_URL = '/pages/tabBar/login/login' // 登录页面路由 request.js 依赖此配置 主要用于登录失效跳转
// #endif
export const LANGUAGES = [{ title: '中文 (简体)', type: 'zh', default: true }];//语言包配置

let _platform = uni.getSystemInfoSync().platform;
// #ifdef APP-PLUS
_platform = _platform === 'android' ? 'Android' : 'IOS';
// #endif
// #ifdef H5
_platform = 'Web';
// #endif
// #ifdef MP-WEIXIN
_platform = 'Wechat';
// #endif
// #ifdef MP-ALIPAY
_platform = 'Alipay';
// #endif
// #ifdef MP-BAIDU
_platform = 'Baidu';
// #endif
// #ifdef MP-TOUTIAO
_platform = 'ByteBounce';
// #endif
// #ifdef MP-360
_platform = '360';
// #endif
// #ifdef QUICKAPP-WEBVIEW
_platform = 'FastApp';
// #endif
export const ACCEPT_PLATFORM = _platform;//所属平台
export const SYSTEM_CONFIG = {                       // 系统配置
  logo: '/static/logo.png',
  appName: '江淮水利勘测项目管理',
  appVersion: '1.0.0',
  platform: _platform,
}
export const needProductUrl = [];
const needPageUrl = [];
const defNeedLoginPage = [
  "/pages/user/address/address-list/index",
  "/pages/user/address/address-add/index",
  "/pages/index/setting/change-pay-password/index",
  "/pages/index/setting/modify-pay-password/index",
  "/pages/index/setting/change-password/index",
  "/pages/service-mssage/message/message-list/index",
  "/pages/user/user/info/index",
  "/pages/user/user/avatar-cropping/index",
  "/pages/index/setting/setting/index",
  "/pages/index/setting/feedback/index",
  "/pages/index/setting/my-feedback/index",
  "/pages/index/setting/verify-oldphone/index",
  "/pages/index/setting/change-newphone/index",
  "/pages/user/wallet/my-wallet/index",
  "/pages/user/wallet/consumer-detail/index",
  "/pages/user/wallet/recharge/index",
  "/pages/user/wallet/recharge-log/index",
  "/pages/user/wallet/withdraw/index",
  "/pages/user/wallet/withdraw-success/index",
  "/pages/user/wallet/account-bind/index",
  "/pages/user/wallet/alipay-bind/index",
  "/pages/user/wallet/wechat-bind/index",
  "/pages/user/user/my-favorites/index",
  "/pages/user/user/my-footprint/index",
  "/pages/order/afterorder/afterorder-apply/index",
  "/pages/order/afterorder/afterorder-status-list/index",
  "/pages/order/afterorder/afterorder-detail/index",
  "/pages/order/afterorder/afterorder-sendback/index",
  "/pages/order/order-process/confirm-order/index",
  "/pages/order/order-process/pay-order/index",
  "/pages/order/order-process/pay-success/index",
  "/pages/order/order-process/choos_coupon/index",
  "/pages/order/order-list/all-order/index",
  "/pages/order/orderdetail/order-detail/index",
  "/pages/order/orderdetail/express-delivery/index",
  "/pages/order/evaluation/order-evaluation/index",
  "/pages/news/article/article-favoriters/index",
  "/pages/goods/ask-answer/my-ask-answer/index",
  "/pages/service-message/message/message-type/index",
  "/pages/user/coupon/my-coupon/index",
  "/pages/integral/myintegral/my-integral/index",
  "/pages/distribution/distribution/my-distribution/index",
  "/pages/service-message/service/service-detail/index",
  "/pages/user/invite/user-invite/index",
  "/pages/index/setting/modify-password-verify-phone/index",
  "/pages/index/setting/modify-password/index",
]
let needLoginPage = defNeedLoginPage;
if (Array.isArray(needPageUrl)) {
  needLoginPage = defNeedLoginPage.concat(needPageUrl);
}

export const needLoginPages = needLoginPage;


