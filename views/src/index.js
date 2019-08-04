console.log('Seoa WEB EJS Made by Seoa Development Team / PMH,dissolve,Teaddy')
const render = document.getElementById('sentence')
let typing = document.getElementById('typing').innerHTML
renderer()

function renderer () {
  render.innerHTML = ''
  let temp = ''
    for (let n = 0; n < typing.split('').length; n++) {
      setTimeout(() => {
        temp += typing.split('')[n]
        if (!temp.endsWith('<')) {
          render.innerHTML = temp
        }
      }, 100 * n)
    }
}
