import randFactory from './rand-factory'
let businessTypes = `中国工商银行中国建设银行
中国银行
中国农业银行
交通银行
招商银行
中国邮政储蓄银行
中信银行
光大银行
民生银行
兴业银行
华夏银行
上海浦东发展银行
深圳发展银行
广东发展银行
上海银行
平安银行
北京银行
南京银行
宁波银行
江苏银行
浙商银行
渤海银行
恒丰银行`.split('\n')

export default randFactory(businessTypes)
