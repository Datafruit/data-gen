import randFactory from './rand-factory'
let ms = `IRK	386
IEK	286
IIK	186
ERK	86`
.split('\n')
.map(str => {
  let [name, id] = str.split(/\s+/g)
  return {id, name}
})

export default randFactory(ms)
