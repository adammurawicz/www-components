const sliderBox = document.querySelector('.slider-box')
const leftBtn = document.querySelector('.btn-left')
const rightBtn = document.querySelector('.btn-right')
const imgs = document.querySelectorAll('.slider-img')
const carouseleWidth = 600
const carouseleSpeed = 3000
let index = 0

const handleCarousel = () => {
    index++
    changeImage()
}

let startCarousel = setInterval(handleCarousel, carouseleSpeed)

const changeImage = () => {
    if (index > imgs.length - 1) {
        index = 0
    } else if (index < 0) {
        index = imgs.length - 1
    }

    sliderBox.style.transform = `translateX(${- index * carouseleWidth}px)`
}

const handleRightBtn = () => {
    index++
    resetInterval()
}
const handleLeftBtn = () => {
    index--
    resetInterval()
}

const resetInterval = () => {
    changeImage()
    clearInterval(startCarousel)
}

rightBtn.addEventListener('click', handleRightBtn)
leftBtn.addEventListener('click', handleLeftBtn)