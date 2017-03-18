
import randFactory from './rand-factory'
const races = '汉、壮、满、朝鲜'.split('、').reduce((prev, gen, i) => {
  prev.push({
    code: '0' + (i + 1),
    name: gen
  })
  return prev
}, [])

export default randFactory(races)
