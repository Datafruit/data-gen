import run from './run2'
import {resolve} from 'path'

let f1 = resolve(__dirname, '../result2-sample.csv')
let count1 = 300
let f2 = resolve(__dirname, '../result2.csv')
let count2 = 3000000

async function task () {
  await run(count1, f1)
  await run(count2, f2)
}

task()
