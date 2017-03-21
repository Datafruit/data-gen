import randFactory from './rand-factory'

let cts = `01	北京市
02	上海市
03	广州市
04	深圳市
05	杭州市
06	武汉市
07	重庆市
08	天津市
09	四川市
10	郑州市
11	厦门市`
.split('\n')
.map(str => {
  let [id, name] = str.split(/\s+/g)
  return {id, name}
})

export default randFactory(cts)


