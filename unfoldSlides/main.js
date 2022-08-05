const body = document.querySelector('body')
const cards = document.querySelectorAll('.card')

function showCard() {
    cards.forEach( card => {
        card.classList.remove('active')
        this.classList.add('active')
    })

    handleBgColor(this)
}

const handleBgColor = card => {
    const predator = card.getAttribute('data-predator')
    body.setAttribute('data-bg', predator)
}

cards.forEach( card => card.addEventListener('click', showCard))