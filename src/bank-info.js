import randFactory from './rand-factory'
let banks = `01	中国银行
02	中国工商银行
03	中国农业银行
04	中国建设银行
05	交通银行
06	中信银行
07	中国光大银行
08	华夏银行
09	中国民生银行
10	广发银行
11	深圳发展银行
12	招商银行
13	兴业银行
14	上海浦东发展银行
15	恒丰银行
16	浙商银行
17	渤海银行
18	中国邮政储蓄银行`
.split('\n')
.map(str => {
  let [id, name] = str.split(/\s+/g)
  return {id, name}
})

export default randFactory(banks)
