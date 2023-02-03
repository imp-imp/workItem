import {
  API_VERSION,
  PAAS_URL
} from '@/common/config.js';
const publicApi = {
  postRecommentGoods: `/${API_VERSION}/5fd9a32379116`, // 智能推荐
  publicUpdateAPP: `/${API_VERSION}/5b5bdc44796e8`, // 静默更新
  UPLOAD_IMAGE_URL: `/${API_VERSION}/5d5fa8984f0c2`, // 图片上传接口路径 UploadImage方法依赖此配置
  GetVerifyCode: `/${API_VERSION}/5f3de8d284639`, // 发送验证码
  
}
const modulesFiles = require.context('../../pages/', true, /\api.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  Object.assign(modules, value.default);
  return modules;
}, publicApi);
export default modules;

/**
 * 如果是第一套代码,删掉下面的对象即可
 * 如果不是第一套代码,导出下面的对象即可
 * 如果哪一套的代码都有,下面的对象合并到上面的对象即可
 * */
const del = {}
