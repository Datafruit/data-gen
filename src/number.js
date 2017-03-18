import _ from 'lodash'
export default (...args) => {
  return () => _.random(...args)
}
