const mouseDiv = document.createElement('div')
mouseDiv.className = 'mouse-box'

const backBlack = document.createElement('div')
backBlack.className = 'back-black'

window.addEventListener('mousemove',function (e) {
  mouseDiv.style.top = e.pageY - 150 + 'px'
  mouseDiv.style.left = e.pageX - 150 + 'px'
})

document.body.appendChild(mouseDiv)
document.body.appendChild(backBlack)