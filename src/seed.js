let titles = `日期
身份证号
姓名
养老
医疗
失业
工伤
生育
单位名称
缴费基数所属期
备注
缴费年份
单位类型
行业代码
基数类型
经济类型
社保卡号
性别
民族
银行ID
银行名称
个人编号
医保号
系统标识
性别编码
民族编码
出生日期
家庭地址
联系电话
单位编号
区域行政编码
卡有效期
银行帐号
银行帐号有效期
城市代码
初始化机构编号
磁条银行卡号
写磁条数据
金融IC银行卡号
年龄段`.split('\n')

let types = `datestring
string
string
long
long
long
long
long
string
datestring
string
datestring
string
string
string
string
string
string
string
string
string
string
string
string
string
string
datestring
string
string
string
string
datestring
string
datestring
string
string
string
string
string
string`.split('\n')

export default titles.reduce((prev, title, i) => {
  prev.push({
    name: title,
    type: types[i]
  })
  return prev
}, [])
