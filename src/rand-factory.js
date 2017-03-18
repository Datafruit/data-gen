
import _ from 'lodash'
export default function(arr) {
  return () => {
    let len = arr.length - 1
    return arr[_.random(0, len)]
  }
}
