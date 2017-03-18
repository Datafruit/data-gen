import randFactory from './rand-factory'
let ecoTypes = `内资
国有经济
集体经济
街属集体经济
股份制经济
联营经济
国有联营
集体联营
国有与集体联营
其他联营
个体经济
国有独资（公司）
其他有限责任（公司）
股份有限（公司）
私营经济
私营独资
私营合伙
私营有限责任（公司）
私营股份有限（公司）
个体经营
其他私有
其他内资
港、澳、台投资
港澳、台资合资经营
港澳、台资合作经营
港澳、台商独资经营
港澳、台商投资股份有限
其他港、澳、台投资
外商投资经济
中外合资
中外合作
外资
国外投资股份有限（公司）
其他国外投资
国家机关和党政机关
其他机关
全额拨款事业单位
差额拨款事业单位
经费自筹事业单位
改制科研院所、事业单位
乡镇事业单位
民政部门管理条例范围类社会团体
国家拨款社会团体
其他社会团体`.split('\n')

export default randFactory(ecoTypes)