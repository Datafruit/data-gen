import fs from 'fs'
export const append = (...args) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(...args, (err) => {
      if (err) return reject(err)
      resolve()
    })
  })
}

export const write = (...args) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(...args, (err) => {
      if (err) return reject(err)
      resolve()
    })
  })
}
