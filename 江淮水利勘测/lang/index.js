import {LANGUAGES} from '../common/config.js'
const publicCogfig = {};
const errorList = {};
const emptyList = [];
LANGUAGES.forEach(val=>{
  if(!publicCogfig[val.type]){
    publicCogfig[val.type] = {};
    errorList[val.type] = [];
  }
})
// console.log(publicCogfig)
const pageLangs = require.context('../pages/', true, /\lang.js$/);
const componentsLangs = require.context('../components/', true, /\lang.js$/);
const commonLangs = require.context('../lang/', true, /\lang.js$/);
// pages下语言文件合并
const pagesModules = pageLangs.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = pageLangs(modulePath);
  // console.log(value)
  LANGUAGES.forEach(val=>{
    // 排除建了lang.js没有内容时报错
    if((typeof value == 'object') && value.default && !value.default[val.type]){
      errorList[val.type].push(moduleName);
    }
    if((typeof value == 'object') && !value.default){
      emptyList.push(moduleName);
    }
    // 排除建了lang.js没有内容时报错
    if((typeof value == 'object') && value.default){
      Object.assign(modules[val.type],value.default[val.type]);
    }

  })
  return modules;
}, publicCogfig);
// console.log(Object.keys(pagesModules.zh).length)
// 公共组件下语言文件合并
const componentsModules = componentsLangs.keys().reduce((modules,modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/,'$1');
  const value = componentsLangs(modulePath);
  LANGUAGES.forEach(val=>{
    // 排除建了lang.js没有内容时报错
    if((typeof value == 'object') && value.default && !value.default[val.type]){
      errorList[val.type].push(moduleName);
    }
    if((typeof value == 'object') && !value.default){
      emptyList.push(moduleName);
    }
    // 排除建了lang.js没有内容时报错
    if((typeof value == 'object') && value.default){
      Object.assign(modules[val.type],value.default[val.type]);
    }

  })
  return modules;
},publicCogfig);
// console.log(errorList)
// 公共底包下语言文件合并
const commonModules = commonLangs.keys().reduce((modules,modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/,'$1');
  const value = commonLangs(modulePath);

  LANGUAGES.forEach(val=>{
    // 排除建了lang.js没有内容时报错
    if((typeof value == 'object') && value.default && !value.default[val.type]){
      errorList[val.type].push(moduleName);
    }
    if((typeof value == 'object') && !value.default){
      emptyList.push(moduleName);
    }
    // 排除建了lang.js没有内容时报错
    if((typeof value == 'object') && value.default){
      Object.assign(modules[val.type],value.default[val.type]);
    }
  })
  return modules;
},publicCogfig);

const totalLangs = {}
for(let attr in publicCogfig){
  if(!totalLangs[attr]){
    totalLangs[attr] = {'defVal':publicCogfig[attr]};
  }
}
// console.log('config配置后，单页面lang.js缺少配置的页面',errorList)
// console.log('单页面lang.js无任何内容的页面',emptyList)

export default totalLangs;
