const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modalOpen = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

function showByTickets() {
    modalOpen.classList.add('open')
}

function hiddenModal() {
    modalOpen.classList.remove('open')
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showByTickets)
}

modalClose.addEventListener('click', hiddenModal)
modalOpen.addEventListener('click', hiddenModal)
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})