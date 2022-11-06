const mouseDiv = document.createElement('div')
mouseDiv.className = 'mouse-box'

const backBlack = document.createElement('div')
backBlack.className = 'back-black'

window.addEventListener('mousemove',function (e) {
  mouseDiv.style.top = e.clientY - 150 + 'px'
  mouseDiv.style.left = e.clientX - 150 + 'px'
})

document.body.appendChild(mouseDiv)
document.body.appendChild(backBlack)