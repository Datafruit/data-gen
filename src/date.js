import moment from 'moment'
import _ from 'lodash'
const yearRangeDefault = [1996, 2017]

export default (
  format = 'YYYY-MM-DD',
  year,
  month,
  date,
  yearRange = yearRangeDefault,
) => {
  let m = moment()
  let y = year || _.random(...yearRange)
  m.year(y)
  if (month) m.month(month)
  if (date) m.date(date)
  return m.format(format)
}
