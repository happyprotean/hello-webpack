import _ from 'lodash'

export default function printMe() {
  console.log('print.js')
  console.log("auto refresh")
  console.log(_.join(['another', 'module'], ' '))
}