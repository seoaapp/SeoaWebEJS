console.log('Seoa WEB EJS Made by Seoa Development Team / PMH,dissolve,Teaddy')
const render = document.getElementById('render')
let typing = document.getElementById('typing').innerHTML
renderer()
function renderer () {
  render.innerHTML = ''
  let temp = ''
  for (let n = 0; n < typing.split('').length; n++) {
    setTimeout(() => {
      temp += typing.split('')[n]
      render.innerHTML = '<i class="fas fa-quote-left"></i> ' + temp + ' <i class="fas fa-quote-right"></i>'
    }, 100 * n)
  }
}
