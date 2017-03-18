
import randFactory from './rand-factory'

const genders = '男女'.split('').reduce((prev, gen, i) => {
  prev.push({
    code: '0' + (i + 1),
    name: gen
  })
  return prev
}, [])


export default randFactory(genders)
