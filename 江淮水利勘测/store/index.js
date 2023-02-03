import Vue from 'vue';
import Vuex from 'vuex';
import {
  http
} from '@/common/api/index';
import utils from '@/common/utils/utils.js';
import {
  message
} from '@/common/utils/index.js';
Vue.use(Vuex);
import {
  tabbarConfig, themeColorConfig
} from '@/common/config.js';
const store = new Vuex.Store({
  state: {
    cartList: [], // 购物车数据
    userInfo: {}, // 用户信息
    appRubbishCacheSize: '0B', // 缓存大小
    appSearchHistory: [], // 搜索历史
    appVersion: '', // app版本号
    token: '', // 用户token
    shareCode: null, // 邀请人邀请码
    themeColor: '#FA2033', // 主题色
    themeBgColor: 'linear-gradient(126deg, #FA2033 0%, #FF6530 100%);',
    gestureAgain: true, // 是否需要二次验证
    location: {},
    phone: '', //用户登录时多页面共享手机号信息
    partner_id: 0,// 店铺id
    shopInfo: {},//店铺信息
    cartNum: 0,//购物车角标数量
    themeType: 0,//主题色类型
  },
  mutations: {
    getNum(state, num) {
      state.cartNum = num;
    },
    // 获取店铺id
    partner_id(state, partner_id) {
      state.partner_id = partner_id;
    },
    // 店铺信息
    shopInfo(state, info) {
      state.shopInfo = info;
    },
    setBadge(state, num) {
      // #ifdef MP-WEIXIN
      let _index = 2;
      // #endif
      // #ifndef MP-WEIXIN
      let _index = 2;
      // #endif
      if (num) {
        if (Number(num) > 99) {
          uni.setTabBarBadge({
            index: _index,
            text: '99+'
          })
        } else {
          uni.setTabBarBadge({
            index: _index,
            text: num + ''
          })
        }
      } else {
        uni.removeTabBarBadge({
          index: _index
        })
      }
    },
    // 设置tabBar类型
    setAppTabbarType(state, type) {
      state.appTabBarType = type
      global.appTabBarType = type
      uni.setStorageSync('appTabBarType', type);
      for (let index = 0; index < tabbarConfig.listNum; index++) {
        let flag = tabbarConfig.roleTabBarShow[+type].find(item => item == index)
        uni.setTabBarItem({ index: index, visible: flag !== undefined })
      }
    },
    // 初始化APP,获取缓存的token,用户信息等其他缓存内容
    initApp(state) {
      const _userInfo = uni.getStorageSync('USER_INFO');
      const token = uni.getStorageSync('USER_TOKEN') || '';
      global.appTabBarType = 0
      const appTabBarType = token ? uni.getStorageSync('appTabBarType') || 0 : 0;
      state.appSearchHistory = uni.getStorageSync('appSearchHistory') || [];
      global.token = token
      state.token = token
      if (_userInfo) {
        state.userInfo = _userInfo;
        global.userInfo = _userInfo;
      }
      if (appTabBarType != 0) this.commit('setAppTabbarType', appTabBarType)
    },
    // 添加搜索历史
    appSearchHistoryAdd(state, data) {
      if (!data.name.trim()) return
      let appSearchHistory = state.appSearchHistory.filter(item => item.name != data.name)
      appSearchHistory.unshift(data)
      state.appSearchHistory = appSearchHistory.slice(0, 10)
      uni.setStorageSync('appSearchHistory', state.appSearchHistory);
    },
    // 删除搜索历史
    appSearchHistoryDel(state, data) {
      state.appSearchHistory = state.appSearchHistory.filter(item => item.name != data.name)
      uni.setStorageSync('appSearchHistory', state.appSearchHistory);
    },
    // 清空搜索历史
    appSearchHistoryClean(state, data) {
      state.appSearchHistory = []
      uni.setStorageSync('appSearchHistory', state.appSearchHistory);
    },
    // 更新用户信息
    updateUserInfo(state, userInfo) {
      state.userInfo = { ...state.userInfo, ...userInfo };
      global.userInfo = state.userInfo;
      uni.setStorageSync('USER_INFO', state.userInfo);
    },
    // 保存token
    saveToken(state, token) {
      state.token = token
      global.token = token;
      uni.setStorageSync('USER_TOKEN', token);
    },
    // 切换主题
    switchThemeColor(state, color) {
      state.themeColor = color;
    },
    // 退出登录
    logout(state) {
      state.userInfo = {};
      state.cartList = [];
      global.userInfo = {};
      global.token = '';
      state.token = '';
      state.verifyAgain = false; // 用户退出时二次验证为false，感觉没必要
      state.phone = '';
      state.phone = '';
      this.commit('setAppTabbarType', 0)
      uni.removeStorageSync('USER_INFO');
      uni.removeStorageSync('USER_TOKEN');
    },
    // 二次验证
    setGestureAgain(state, data) {
      state.gestureAgain = data;
    },
    updataLocation(state, data) {
      state.location = data;
    },
    sharePhone(state, data) {
      state.phone = data;
    }
  },
  // 从基本数据(state)派生的数据，相当于state的计算属性
  getters: {
    themeColor(state, getters) {
      let projectConfig = themeColorConfig[state.themeType]
      let themeColor = ''
      projectConfig.colorConfig.map((item, index) => {
        themeColor += `--benbenFontColor${index}:${item};`
      })
      projectConfig.bgColorConfig.map((item, index) => {
        themeColor += `--benbenbgColor${index}:${item};`
      })
      projectConfig.bdColorConfig.map((item, index) => {
        themeColor += `--benbenbdColor${index}:${item};`
      })
      return themeColor
    },
    //购物车修改接口之后仍然使用时因为还有其他页面调用
    allNum(state) {
      return state.cartNum;
    },
    isLogin(state) {
      if (state.userInfo == null) {
        return false;
      } else {
        return true;
      }
    },
    // 是否会员
    isMember(state) {
      if (state.userInfo && state.userInfo.user_level) {
        return true;
      } else {
        return false;
      }
    },
    // 用户ID
    uid(state) {
      if (state.userInfo && state.userInfo.id) {
        return state.userInfo.id;
      } else {
        return 0;
      }
    },
    // 用户Token
    token(state) {
      if (state.userInfo && state.userInfo.user_token) {
        return state.userInfo.user_token;
      } else {
        return null;
      }
    },
    // 用户信息
    userInfo(state) {
      if (state.userInfo) {
        return state.userInfo;
      } else {
        return null;
      }
    },
  },
  // 和mutation的功能大致相同，不同之处在于 ==》1. Action 提交的是 mutation，而不是直接变更状态。 2. Action 可以包含任意异步操作。
  actions: {
    appClearCache({
      dispatch,
      commit,
      getters,
      state
    }) {
      /* #ifdef APP-PLUS */
      let that = this
      utils.showModal({
        title: global.i18n['提示'],
        content: global.i18n['确定要清除本地缓存？'],
        confirmColor: state.themeColor,
        success: (res) => {
          if (res.confirm) {
            console.log('用户点击确定');
            uni.clearStorage()
            let os = plus.os.name

            if (os == 'Android') {
              let main = plus.android.runtimeMainActivity()
              let sdRoot = main.getCacheDir()
              let files = plus.android.invoke(sdRoot, 'listFiles')
              let len = files.length
              if (len == 0) {
                message.info(global.i18n['缓存清理完成!'])
                state.appRubbishCacheSize = '0B'
              }
              for (let i = 0; i < len; i++) {
                let filePath = '' + files[i] // 没有找到合适的方法获取路径，这样写可以转成文件路径
                plus.io.resolveLocalFileSystemURL(
                  filePath,
                  function (entry) {
                    if (entry.isDirectory) {
                      entry.removeRecursively(
                        function (entry) {
                          //递归删除其下的所有文件及子目录
                          message.info(global.i18n['缓存清理完成!'])
                          dispatch('getAppCache') // 重新计算缓存
                        },
                        function (e) {
                          console.log(e.message)
                        }
                      )
                    } else {
                      entry.remove()
                    }
                  },
                  function (e) {
                    console.log('文件路径读取失败')
                  }
                )
              }
            } else {
              // ios暂时未找到清理缓存的方法，以下是官方提供的方法，但是无效，会报错
              plus.cache.clear(function () {
                message.info(global.i18n['缓存清理完成!'])
                dispatch('getAppCache') // 重新计算缓存
              })
            }
          }
        },
      })
      /* #endif */
    },

    getAppCache({
      dispatch,
      commit,
      getters,
      state
    }) {
      /* #ifdef APP-PLUS */
      plus.cache.calculate(function (size) {
        let sizeCache = parseInt(size)
        console.log('缓存大小：' + sizeCache);
        if (sizeCache == 0) {
          state.appRubbishCacheSize = '0B'
        } else if (sizeCache < 1024) {
          state.appRubbishCacheSize = sizeCache + 'B'
        } else if (sizeCache < 1048576) {
          state.appRubbishCacheSize = (sizeCache / 1024).toFixed(2) + 'KB'
        } else if (sizeCache < 1073741824) {
          state.appRubbishCacheSize = (sizeCache / 1048576).toFixed(2) + 'MB'
        } else {
          state.appRubbishCacheSize = (sizeCache / 1073741824).toFixed(2) + 'GB'
        }
      })
      /* #endif */
    },
    getAppVersion({//获取app版本号
      dispatch,
      commit,
      getters,
      state
    }) {
      /* #ifdef APP-PLUS */
      plus.runtime.getProperty(plus.runtime.appid, (widgetInfo) => {
        state.appVersion = 'V' + widgetInfo.version
      })
      /* #endif */
    },
    getCartList({
      dispatch,
      commit,
      getters,
      state
    }) {
      if (state.userInfo) {
        http.post(global.apiUrls.numberOfShoppingCart).then((res) => {
          console.log('购物车数量++++++', res.data.data)
          if (res.data.code == 1) {
            let data = res.data.data;
            data = data > 99 ? '99+' : data;
            commit('getNum', data);
            commit('setBadge', data);
          }
        });
      } else {
        commit('setBadge', 0)
      }
    }
  },
})
export default store;
