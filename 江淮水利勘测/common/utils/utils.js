import { LOGIN_PAGE_URL, needLoginPages } from '../config.js';
import throttle from '../function/throttle.js';
import debounce from '../function/debounce.js';
import timeFormat from '../function/timeFormat.js';
import timeFrom from '../function/timeFrom.js';
import deepClone from '../function/deepClone.js';
import biometrics from '../function/biometrics.js';
import { Router } from '@/common/utils/index.js';

const router = new Router({ needLoginPages });
/**
 * @description showModal 弹窗封装
 * @param {Object} options = 参数同 uni-app 官方用法
 * */
function showModal(options) {
  // #ifndef APP-PLUS
  uni.showModal(options);
  // #endif
  // #ifdef APP-PLUS
  if (uni.getSystemInfoSync().platform === 'android') {
    global.$showModal(options)
      .then(res => {
        console.log('RES', res);
        //确认
      }).catch(err => {
        //取消
        console.log('ERR', err);
      })
  } else {
    uni.showModal(options);
  }
  // #endif
}
/**
 * @description 验证登录权限,接受一个回调函数,登录则执行回调函数,非登录状态则跳转登录页
 * @param {Function} cb = 回调函数
 * */
function actionAuth(cb) {
  if (global.token) {
    cb && cb();
  } else {
    navigateToLogin();
  }
}

/**
 * @description 判断是app端还是小程序端登录
 * */
let timer = null; // 登录页跳转防抖
function navigateToLogin() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    const pages = getCurrentPages();
    if (pages.length != 0) {
      const lastPage = '/' + pages.pop().route;
      let url = LOGIN_PAGE_URL;
      if (lastPage == url) return;
      uni.navigateTo({
        url
      });
    } else {
      uni.switchTab({
        url: '/pages/tab/home/shopindex'
      })
    }
  }, 200)
}

/**
 * @description 倒计时计算
 * */
function downTime(time) {
  var days = parseInt(time / (1000 * 60 * 60 * 24));
  var hours = parseInt(time / (1000 * 60 * 60) % 24);
  var minutes = parseInt(time / (1000 * 60) % 60);
  var seconds = parseInt(time / 1000 % 60);
  return {
    days,
    hours: hours < 10 ? '0' + hours : hours,
    minutes: minutes < 10 ? '0' + minutes : minutes,
    seconds: seconds < 10 ? '0' + seconds : seconds,
  }
}

/**
 * @description 参数序列化
 * */
function serialize(data) {
  let str = '';
  Object.keys(data).forEach(key => {
    str += key + '=' + data[key] + '&'
  })
  str = str.substr(0, str.length - 1);
  return str;
}

/**
 * @description 设置状态栏颜色
 * @param {String} color dark or light
 * @example this.$util.setNavigationBarColor('dark');
 * */
function setNavigationBarColor(color) {
  if (color == 'dark') {
    // #ifdef APP-PLUS
    plus.navigator.setStatusBarStyle('dark');
    // #endif
    // #ifdef MP-WEIXIN
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#FFFFFF'
    })
    // #endif
  } else if (color == 'light') {
    // #ifdef APP-PLUS
    plus.navigator.setStatusBarStyle('light');
    // #endif
    // #ifdef MP-WEIXIN
    wx.setNavigationBarColor({
      frontColor: '#FFFFFF',
      backgroundColor: '#000000'
    })
    // #endif
  }
}

/**
 * base64图片缓存到本地,返回本地路径
 * */
function base64ToPath(base64) {
  return new Promise(function (resolve, reject) {
    if (typeof window === 'object' && 'document' in window) {
      base64 = base64.split(',')
      var type = base64[0].match(/:(.*?);/)[1]
      var str = atob(base64[1])
      var n = str.length
      var array = new Uint8Array(n)
      while (n--) {
        array[n] = str.charCodeAt(n)
      }
      return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([array], {
        type: type
      })))
    }
    var extName = base64.match(/data\:\S+\/(\S+);/)
    if (extName) {
      extName = extName[1]
    } else {
      reject(new Error('base64 error'))
    }
    var fileName = Date.now() + '.' + extName
    if (typeof plus === 'object') {
      var bitmap = new plus.nativeObj.Bitmap('bitmap' + Date.now())
      bitmap.loadBase64Data(base64, function () {
        var filePath = '_doc/uniapp_temp/' + fileName
        bitmap.save(filePath, {}, function () {
          bitmap.clear()
          resolve(filePath)
        }, function (error) {
          bitmap.clear()
          reject(error)
        })
      }, function (error) {
        bitmap.clear()
        reject(error)
      })
      return
    }
    if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
      var filePath = wx.env.USER_DATA_PATH + '/' + fileName
      wx.getFileSystemManager().writeFile({
        filePath: filePath,
        data: base64.replace(/^data:\S+\/\S+;base64,/, ''),
        encoding: 'base64',
        success: function () {
          resolve(filePath)
        },
        fail: function (error) {
          reject(error)
        }
      })
      return
    }
    reject(new Error('not support'))
  })
}

function postMsgToParent(message) {
  console.log('postMsgToParent', message);
  window.parent.postMessage(message, '*');
}
/**
 *
 * @param {*} type 点击类型  navigateTo
 * @param {*} data
 */

function handleAllFn(type, data) {
  // 无点击事件
  if (type == 'niente') {
    return false
  }
  /**
   * 转页面类型
   * navigateTo
   * data结构
   * {
   * 	url: String  路径,
   * 	auth: Boolean (选填)是否验证登录状态true 验证
   * 	params: Object  (选填) 携带的参数
   * }
   */
  if (type == 'navigate') {
    router[data.type]('/' + data.url)
    return false
  }
  /**
   *
   * type: back
   * 返回
   * data(选填) 不填返回一页
   */
  if (type == 'back') {
    uni.navigateBack({
      delta: data.delta || 1
    });
  }
  /**
   *
   * type: backReference
   * 返回页面携带参数
   * data{
   * 	name:String  目标页面接受参数名
   * 	params:      参数
   * 	}
   */
  if (type == "backReference") {
    if (!data.name) {
      return false
    }
    let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
    let prevPage = pages[pages.length - 2];
    //prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面，-3是上上个页面以此类推。
    prevPage.backWithParams({
      [data.name]: data.params
    })
    uni.navigateBack({
      delta: 1 // 返回上一级页面。
    })
    return false
  }
  /**
   *  type showModal 弹窗封装
   *  data  参数同 uni-app 官方用法
   * */
  if (type == 'showModal') {
    // #ifndef APP-PLUS
    uni.showModal(data);
    // #endif
    // #ifdef APP-PLUS
    if (uni.getSystemInfoSync().platform === 'android') {
      global.$showModal(options)
        .then(res => {
          console.log('RES', res);
          //确认
        }).catch(err => {
          //取消
          console.log('ERR', err);
        })
    } else {
      uni.showModal(data);
    }
    // #endif
    return false
  }
  // 打开指定弹窗
  if (type == 'showModalDiy') {
    let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
    let prevPage = pages[pages.length - 1];
    prevPage['popupShow' + data.showCancel] = true
    return false
  }
  /**
   *
   * type: downloadFile
   * 下载文件
   * data 下载路径
   * .then(res=>{}) 接收下载成功回调
   * .catch(res=>{}) 接收下载失败回调
   */
  if (type == 'downloadFile') {
    return new Promise((resolve, reject) => {
      const downloadTask = uni.downloadFile({
        url: data.url,
        success: (res) => {
          uni.showToast({
            title: '下载成功',
            icon: 'success',
            mask: true
          })
          // resolve(res)
          uni.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function () {
              console.log('save success');
            }
          });


        },
        fail: (err) => {
          uni.showToast({
            title: '下载失败',
            icon: 'fail',
            mask: true
          })
          reject(err)
        },
        complete: () => { }
      })
      // 中断下载
      // downloadTask.abort();
      // 监听下载进度
      // downloadTask.onProgressUpdate(res => {
      //     console.log('下载进度' + res.progress);
      //     console.log('已经下载的数据长度' + res.totalBytesWritten);
      //     console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);
      // })
    })
  }
  /**
   *
   * type: uploadFile
   * 上传文件
   * data{
   * 	url:String  上传路径
   *	files: 仅app与h5支持该选项
   * 	ffileType: 仅支付宝小程序支持且必填 images/video/audio
   * 	filePath:	文件路径
   * 	name:	后台接收key
   * 	header: 选填
   * 	formData: 选填 携带参数
   * progressCallback: 选填 监听上传载进度
   * 	}
   */

  if (type == 'uploadFile') {
    return new Promise((resolve, reject) => {
      const uploadTask = uni.uploadFile({
        url: config.baseUrl + data.url,
        // #ifdef APP-PLUS || H5
        files: data.files || [],
        // #endif
        // #ifdef MP-ALIPAY
        fileType: data.fileType,
        // #endif
        // #ifdef H5
        file: data.file || null,
        // #endif
        filePath: data.filePath,
        name: data.name,
        header: data.header ? data.header : {},
        formData: data.formData ? data.formData : {},
        complete: (response) => {
          if (response.statusCode == 200) {
            resolve(response)
          } else {
            reject(response)
          }
        }
      })
      if (data.progressCallback && typeof (data.progressCallback) == 'function') {
        uploadTask.onProgressUpdate(res => {
          data.progressCallback(res.progress + '%');
        })
      }
    })
  }

  /**
   *
   * type: getLoaction
   * 获取定位
   *
   **/
  if (type == 'getLoaction') {
    console.log('我要获取定位');
    return new Promise((resolve, reject) => {
      uni.getLocation({
        type: 'wgs84',
        success: function (res) {
          console.log('当前位置的经度：' + res.longitude);
          console.log('当前位置的纬度：' + res.latitude);
          uni.showToast({
            title: JSON.stringify(res),
            icon: "none"
          })
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        }
      });
    })
  }
  /**
   *
   * type: richiesta
   * 点赞 收藏
   * data{
   * 	url:String  上传路径
   *	files: 仅app与h5支持该选项
   * 	ffileType: 仅支付宝小程序支持且必填 images/video/audio
   * 	filePath:	文件路径
   * 	name:	后台接收key
   * 	header: 选填
   * 	formData: 选填 携带参数
   * 	progressCallback: 选填 监听上传载进度
   * 	}
   */
  if (type == 'richiesta') {

  }

}


module.exports = {
  actionAuth,
  navigateToLogin,
  serialize,
  debounce,
  throttle,
  timeFormat,
  timeFrom,
  deepClone,
  downTime,
  setNavigationBarColor,
  base64ToPath,
  showModal,
  biometrics,
  handleAllFn,
  postMsgToParent
}
