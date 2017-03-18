

import province from './province'
import seed from './seed'
import name from './name'
import number from './number'
import companyName from './company-name'
import companyTypes from './company-types'
import bussinessTypes from './bussiness-types'
import salaryTypes from './salary-types'
import ecoTypes from './eco-types'
import sex from './gender'
import digit from './digit'
import race from './race'
import pid from './id-number'
import bank from './bank-names'
import date from './date'
import mailCodes from './mail-code'
import ageRange from './age-range'
import {write, append} from './file'
import _ from 'lodash'
import moment from 'moment'
const log = console.log

export default async function task (total, file) {
  log(total, file)
  let initStr = seed.map(s => s.name).join(',') + '\n' +
    seed.map(s => s.type).join(',') + '\n'

  let cardNumberbase = _.random(digit(19), Math.floor(digit(20) * 0.5 - 1))
  let personNumberbase = _.random(digit(19), Math.floor(digit(20) * 0.5 - 1))
  let basePhone = _.random(digit(10), Math.floor(digit(11) * 0.5 - 1))

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

    for(let i = 0;i < months;i ++) {
      let m = moment()
        .year(startYear)
        .month(startMonth)
        .add(i, 'months')
      let data = _.cloneDeep(person)
      data[9] = m.format('YYYYMM')
      data[11] = m.format('YYYY')
      m.date(_.random(1, 31))
      data[0] = m.valueOf()
      let str = data.join(',') + '\n'
      await append(file, str)
      console.log((count + i) + '/' + total)
    }

    count += months

  }

  async function run() {
    await write(file, initStr)
    for(;count < total;) {
      let i = count
      let nameStr = name()
      let year = _.random(2012, 2017)
      let id = pid(i)
      let companyType = companyTypes()
      let prov = province()
      let cname = companyName(prov, companyType)
      let sexObj = sex()
      let raceObj = race()
      let addr = prov + nameStr + '住宅'

      let arr = [
        // 日期
        0,
        // 身份证号0
        id,
        // 姓名0
        name(),
        // 养老2
        number(100, 5000)(),
        // 医疗3
        number(100, 6000)(),
        // 失业4
        number(100, 1000)(),
        // 工伤5
        number(100, 1000)(),
        // 生育6
        number(100, 1000)(),
        // 单位名称7
        cname,
        // 缴费基数所属期8
        date('YYYYMM', year),
        // 备注9
        '无备注',
        // 缴费年份10
        year,
        // 单位类型11
        companyType,
        // 行业代码12
        bussinessTypes(),
        // 基数类型13
        salaryTypes(),
        // 经济类型14
        ecoTypes(),
        // 社保卡号15
        id + '00',
        // 性别16
        sexObj.name,
        // 民族17
        raceObj.name,
        // 银行ID18
        'bank' + i,
        // 银行名称19
        bank(),
        // 个人编号20
        personNumberbase + i,
        // 医保号21
        id + '01',
        // 系统标识22
        '无系统标识',
        // 性别编码23
        sexObj.code,
        // 民族编码24
        raceObj.code,
        // 出生日期25
        date('YYYY-MM-DD', undefined, undefined, undefined, [1956, 1997]),
        // 家庭地址26
        addr,
        // 联系电话27
        basePhone + i,
        // 单位编号28
        '无单位编号',
        // 区域行政编码29
        mailCodes[prov] || '000000',
        // 卡有效期30
        date('YYYY-MM-DD', undefined, undefined, undefined, [2020, 2040]),
        // 银行帐号31
        cardNumberbase + i,
        // 银行帐号有效期32
        date('YYYY-MM-DD', undefined, undefined, undefined, [2020, 2040]),
        // 城市代码32
        'city' + i,
        // 初始化机构编号33
        'c' + i,
        // 磁条银行卡号31
        '00' + (cardNumberbase + i),
        // 写磁条数据35
        '无写磁条数据',
        // 金融IC银行卡号36
        'ic' + (cardNumberbase + i),
        // 年龄段37
        ageRange()
      ]

      await appendOnePerson(arr)
    }
  }

  await run()
}


