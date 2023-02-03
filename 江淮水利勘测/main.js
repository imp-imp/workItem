import Vue from 'vue';
import App from './App';
import store from './store/index';
import apiUrls from '@/common/api/url.js'
import langs from '@/lang/index.js';
import { http } from '@/common/api/index.js';
import { message, Router, validate } from '@/common/utils/index.js';
import { BASE_URL, IMG_BASE_URL, SYSTEM_CONFIG, PAGE_SIZE, VERSION_CODE, IS_DEV, needLoginPages, LANGUAGES } from '@/common/config.js';
import utils from '@/common/utils/utils';
import VueI18n from 'vue-i18n';
import './common/filter/index.js';
import './common/mixin/index.js';
/***************************** 元素组件 start  *******************************/
import fuIconDiy from './components/elementComponents/fu-icon-diy/fu-icon-diy.vue';
Vue.component('fu-icon-diy', fuIconDiy);
import fuText from './components/elementComponents/fu-text/fu-text.vue';
Vue.component('fu-text', fuText);
import fuImageDiy from './components/elementComponents/fu-image-diy/fu-image-diy.vue';
Vue.component('fu-image-diy', fuImageDiy);
/***************************** 表单组件 end  *******************************/
const router = new Router({ needLoginPages });
// #ifdef APP-PLUS || MP-WEIXIN
import fs from '@/common/utils/fs.js';
// #endif
// #ifdef APP-PLUS
import FuModal from '@/components/fu-modal/fu-modal.js';
Vue.use(FuModal);
// #endif
Vue.use(VueI18n);

Vue.config.productionTip = false;
// 语言加载
let messages = {
  'zh': langs.zh, // 中文
}
let locale = 'zh';
let LANGUAGE_TYPE = uni.getStorageSync('LANGUAGE_TYPE');
if (LANGUAGE_TYPE && LANGUAGE_TYPE != 'zh') {
  messages[LANGUAGE_TYPE] = langs[LANGUAGE_TYPE];
  locale = LANGUAGE_TYPE;
}
if (!LANGUAGE_TYPE) {
  LANGUAGES.forEach(val => {
    if (val.default) {
      messages[val.type] = langs[val.type];
      locale = val.type;
    }
  })
}
const i18n = new VueI18n({ locale, messages });
// 加载语言包 END

Vue.prototype.$urouter = router;
Vue.prototype.$api = http;
Vue.prototype.$message = message;
Vue.prototype.$util = utils;
Vue.prototype.$store = store;
Vue.prototype.$validate = validate;
Vue.prototype._i18n = i18n;

global.apiUrls = apiUrls;
global.IS_DEV = IS_DEV == 0 ? 0 : 1;
global.PAGE_SIZE = PAGE_SIZE;
global.VERSION_CODE = VERSION_CODE;
global.SYSTEM_CONFIG = SYSTEM_CONFIG;
global.i18n = i18n._vm.i18n;
global.locale = i18n.locale;
App.mpType = 'app';
const app = new Vue({
  ...App,
  store,
  i18n,
});
app.$mount();
global.$showModal = app.$showModal;
