
import randFactory from './rand-factory'
let baseTypes = `社平工资
失业工资标准
个人工资
固定值
职工在岗工资
企业平均工资`.split('\n')
export default randFactory(baseTypes)
