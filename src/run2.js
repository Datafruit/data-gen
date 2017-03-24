

import province from './province'
import seed from './seed1'
import name from './name'
import company from './company-info'
import sex from './gender'
import digit from './digit'
import race from './race'
import pid from './id-number'
import bank from './bank-info'
import date from './date'
import initOrgCode from './init-org-code'
import {ages2} from './age-range'
import app from './app'
import zoneRole from './zone-role'
import shop from './shop'
import ip from './ip'
import state from './state'
import {write, append} from './file'
import _ from 'lodash'
import moment from 'moment'
const log = console.log

export default async function task (total, file) {
  log(total, file)
  let initStr = seed.map(s => s.name).join(',') + '\n' +
    seed.map(s => s.type).join(',') + '\n'

  let cardNumberbase = _.random(digit(19), Math.floor(digit(20) * 0.5 - 1))
  let basePhone = _.random(digit(10), Math.floor(digit(11) * 0.5 - 1))

  //计数
  let count = 0

  async function appendOnePerson (person) {

    let startYear = _.random(2013, 2016)
    let startMonth = _.random(0, 11)
    let endYear = moment().get('year')
    let endMonth = moment().get('month') - 1
    endMonth = endMonth >= 0 ? endMonth : 0
    let m1 = moment()
    m1.set('year', startYear)
    m1.set('month', startMonth)
    let m2 = moment()
    m2.set('year', endYear)
    m2.set('month', endMonth)
    let diff = m2.diff(m1, 'months') - 1
    let min = Math.floor(diff / 2)
    let months = _.random(min, diff)
    let str = ''
    for(let i = 0;i < months;i ++) {
      let m = moment()
        .year(startYear)
        .month(startMonth)
        .add(i, 'months')
      let data = _.cloneDeep(person)
      m.date(_.random(1, 31))
      data[0] = m.valueOf()
      str += data.join(',') + '\n'
      log((count + i) + '/' + total)
    }
    await append(file, str)
    count += months

  }

  async function run() {
    await write(file, initStr)
    for(;count < total;) {
      let i = count
      let nameStr = name()
      let id = pid(i)
      let comp = company()
      let prov = province()
      let sexObj = sex()
      let raceObj = race()
      let bankObj = bank()
      let shopObj = shop()
      let appInfo = app()
      let addr = prov + nameStr + '住宅'

      let arr = [
        // 日期
        0,
        // 公民身份号码	string
        id,
        // 姓名	string
        name(),
        // 社保卡号	string
        id + '00',
        // 性别	string
        sexObj.name,
        // 民族	string
        raceObj.name,
        // 银行ID	string
        bankObj.id,
        // 银行名称	string
        bankObj.name,
        // 个人编号	string
        id + '00',
        // 医保号	string
        id + '00',
        // 系统标识	string
        '01',
        // 性别编码	string
        sexObj.code,
        // 民族编码	string
        raceObj.code,
        // 出生日期	datestring
        date('YYYY-MM-DD', undefined, undefined, undefined, [1956, 1997]),
        // 家庭地址	string
        addr,
        // 联系电话	string
        basePhone + i,
        // 单位名称	string
        comp.name,
        // 单位编号	string
        comp.id,
        // 单位名称	string
        // 区域行政编码	string
        shopObj.zoneCode,
        // 卡有效期	datestring
        date('YYYY-MM-DD', undefined, undefined, undefined, [2020, 2040]),
        // 银行帐号	string
        cardNumberbase + i,
        // 银行帐号有效期	datestring
        date('YYYY-MM-DD', undefined, undefined, undefined, [2020, 2040]),
        // 城市代码	string
        shopObj.cityCode,
        // 初始化机构编号	string
        initOrgCode(),
        // 磁条银行卡号	string
        id + '00',
        // 写磁条数据	string
        state(),
        // 金融IC银行卡号	string
        id + '00',
        // 区域角色	string
        zoneRole(),
        // 网点编码	string
        shopObj.num,
        // 网点名称	string
        shopObj.name,
        // 地区名称	string
        shopObj.city,
        // 网点地址	string
        shopObj.city + '某处',
        // 联系人	string
        shopObj.contact,
        // 网点状态	string
        state(),
        // 设备ID	string
        shopObj.id,
        // 设备类型	string
        state(),
        // 终端机编号	string
        shopObj.equipId,
        // 设备信息	string
        '德生宝',
        // PSAM卡号	string
        shopObj.equipId,
        // 注册时IP	string
        shopObj.ip,
        // 当前设备IP	string
        ip(),
        // 设备状态	string
        state(),
        // 设备密钥名称	string
        shopObj.machineName,
        // 设备密钥值	string
        shopObj.machineKey,
        // 设备密钥状态	string
        state(),
        // 业务编号	string
        shopObj.businessCode,
        // 业务说明	string
        shopObj.businessName,
        // 应用项目名称	string
        appInfo.name,
        // 一级应用分类	string
        appInfo.class1,
        // 二级应用分类	string
        appInfo.class2,
        // 年龄	string
        ages2()
      ]

      await appendOnePerson(arr)
    }
  }

  await run()
}


