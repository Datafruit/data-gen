let titles = `日期 date date
日期(天) date_day string
日期(月) date_month string
日期(年) date_year string
公民身份号码	id string
姓名 name	string
社保卡号 card_no	string
性别 sex	string
民族 race	string
银行ID bank_id	string
银行名称 bank_name	string
个人编号 person_id	string
医保号	medical_id string
系统标识 sys_tag	string
性别编码 sex_id	string
民族编码 race_id	string
出生日期 birth_date	datestring
家庭地址 addr	string
联系电话 phone	string
单位名称 company_name	string
单位编号 company_id	string
区域行政编码 zone_code	string
卡有效期 card_expire	date
银行帐号 bank_account	string
银行帐号有效期 bank_account_expire	date
城市代码 city_code	string
初始化机构编号 init_org_id	string
磁条银行卡号 bank_card_id	string
写磁条数据	bank_card_data string
金融IC银行卡号 bank_card_id2	string
区域角色 zone_role	string
网点编码 shop_code	string
网点名称 shop_name	string
地区名称 zone_name	string
网点地址 shop_addr	string
联系人	shop_contact string
网点状态 shop_status	string
设备ID equip_id	string
设备类型 equip_type	string
终端机编号	terminal_id string
设备信息	equip_info string
PSAM卡号 psam_id	string
注册时IP	ip string
当前设备IP current_ip	string
设备状态	equip_status string
设备密钥名称	equip_key_name string
设备密钥值	equip_key_value string
设备密钥状态	equip_key_status string
业务编号 business_code	string
业务说明 business_info	string
应用项目名称 app_name	string
一级应用分类 app_class1	string
二级应用分类	app_class2 string
年龄 age	string`.split('\n')

export default titles.map((str) => {
  let [name, nameEn, type] = str.split(/\s+/g)
  return {
    name,
    nameEn,
    type
  }
})
