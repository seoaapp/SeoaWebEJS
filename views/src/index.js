console.log('Seoa WEB EJS Made by Seoa Development Team / PMH.')

const render = document.getElementById('render')

let cycles = []

for (let n = 0; n < document.getElementsByClassName('cycle').length; n++) {
  cycles[n] = document.getElementsByClassName('cycle')[n].innerText.trim()
}

let cycle = 0
setInterval(() => {
  if (cycle >= cycles.length) cycle = 0
  renderer(cycle)
  cycle++
}, 3000)

function renderer (m) {
  render.innerHTML = ''
  let temp = ''
  for (let n = 0; n < cycles[m].split('').length; n++) {
    setTimeout(() => {
      temp += cycles[m].split('')[n]
      render.innerHTML = '<i class="fas fa-quote-left"></i> ' + temp + ' <i class="fas fa-quote-right"></i>'
    }, 100 * n)
  }
}