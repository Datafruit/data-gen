import randFactory from './rand-factory'
let roles = '管理员、区域管理员、普通人员'

export default randFactory(roles.split('、'))
