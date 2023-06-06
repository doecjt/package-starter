import { add } from './math.js'

const sum = add(1, 2)
const root = document.querySelector('#app')
root && (root.textContent = `${sum}`)
console.log('sum', sum)
