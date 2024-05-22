const modalsOverlay = document.querySelector('.modals__overlay')
const modal = document.querySelector('.modals__modal')
const modalText = document.querySelector('.modals__text')

modalsOverlay.addEventListener('click', (e) => {
    modal.classList.remove('modals__modal--visible')
    modalsOverlay.classList.remove('modals__overlay--visible')

    scrollbarOn()
})

function showModal(text) {
    modalText.innerHTML = text
    modal.classList.add('modals__modal--visible')
    modalsOverlay.classList.add('modals__overlay--visible')

    scrollbarOff()
}

