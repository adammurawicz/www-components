const btn = document.querySelector('.btn')

const pulseAnimation = e => {
    const btnPositionTop = e.target.offsetTop
    const btnPositionLeft = e.target.offsetLeft

    const top = e.clientY
    const left = e.clientX

    const circlePositionTop = top - btnPositionTop
    const circlePositionLeft = left - btnPositionLeft

    
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = circlePositionTop + 'px'
    circle.style.left = circlePositionLeft + 'px'
    e.target.appendChild(circle)

    setTimeout(() => {
        circle.remove()
    }, 400)
}

btn.addEventListener('click', pulseAnimation)