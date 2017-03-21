import randFactory from './rand-factory'
let arr = '18岁以下；18岁——22岁；22岁——25岁；25岁——30岁；30岁——40岁；40岁——50岁；50岁以上'.split('；')

let arr1 = '18岁以下；19-40岁；41-65岁；66岁以上'.split('；')
export default randFactory(arr)
export const ages2 = randFactory(arr1)

