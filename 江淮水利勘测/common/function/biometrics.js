//1都不支持 2安卓指纹 3 苹果指纹 4 苹果人脸 5 苹果人脸加指纹
function biometrics() {
   
    return new Promise((resolve)=>{
         //#ifdef APP-PLUS || MP-WEIXIN
        uni.checkIsSupportSoterAuthentication({
            success(res) {
                //  console.log('检测支持的认证方式', res);
               
                if (res.errMsg === 'checkIsSupportSoterAuthentication:ok') {
                    let support = 1;
                    let supportMode = res.supportMode;
                    let platform = uni.getSystemInfoSync().platform;
                    // "facial" 人脸 "fingerPrint" 指纹识别
                    console.log('supportMode', supportMode);
                    // 如果都不支持 隐藏该选项
                    if (supportMode.length === 0) {
                        support = 1;
                    }
                    // 如果是安卓机  只让用指纹识别
                    if (platform === 'android' && supportMode.findIndex(item => item === 'fingerPrint') !== -1) {
                        support = 2;
                    }
                    // 如果是苹果机  看是否是支持人脸还是指纹
                    if (platform === 'ios') {
                        // 指纹
                        if (supportMode.findIndex(item => item === 'fingerPrint') !== -1) {
                            support = 3;
                        }
                        // 人脸
                        if (supportMode.findIndex(item => item === 'facial') !== -1) {
                            support = 4;
                        }
                        // 指纹人脸同时存在
                        if (supportMode.findIndex(item => item === 'facial') !== -1 && supportMode.findIndex(item => item === 'fingerPrint') !== -1) {
                            support = 5;
                        }
                    }
                   resolve(support);
                }
            },
            fail(err) {
                console.log(err);
                resolve(1);
            },
        })
        // #endif
        //#ifndef APP-PLUS || MP-WEIXIN
        return 1;
        // #endif
    })
    

}
export default biometrics