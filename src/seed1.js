let titles = `日期 datestring
公民身份号码	string
姓名	string
社保卡号	string
性别	string
民族	string
银行ID	string
银行名称	string
个人编号	string
医保号	string
系统标识	string
性别编码	string
民族编码	string
出生日期	datestring
家庭地址	string
联系电话	string
单位名称	string
单位编号	string
区域行政编码	string
卡有效期	datestring
银行帐号	string
银行帐号有效期	datestring
城市代码	string
初始化机构编号	string
磁条银行卡号	string
写磁条数据	string
金融IC银行卡号	string
区域角色	string
网点编码	string
网点名称	string
地区名称	string
网点地址	string
联系人	string
网点状态	string
设备ID	string
设备类型	string
终端机编号	string
设备信息	string
PSAM卡号	string
注册时IP	string
当前设备IP	string
设备状态	string
设备密钥名称	string
设备密钥值	string
设备密钥状态	string
业务编号	string
业务说明	string
应用项目名称	string
一级应用分类	string
二级应用分类	string
年龄	string`.split('\n')

export default titles.map((str) => {
  let [name, type] = str.split(/\s+/g)
  return {
    name,
    type
  }
})
