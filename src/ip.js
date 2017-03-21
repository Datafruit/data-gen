import _ from 'lodash'
export default () => {
  return Array(4).fill(0).map(() => {
    return _.random(1, 254)
  }).join('.')
}
