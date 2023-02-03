import Router from './router.js'
import UploadImage from './upload-image.js'
import UploadFileToQINIU from './upload-file-to-qiniu.js'
import UploadFileToOSS from './upload-file-to-oss.js'
import { message } from './message.js'
import { validate } from './validate.js'


export {
  message,
  validate,
  UploadImage,
  UploadFileToQINIU,
  UploadFileToOSS,
  Router
}
