const burger = document.querySelector('.burger')
const header = document.querySelector('.header')
const nav = document.querySelector('.nav')
const links = nav.querySelectorAll('.nav__link')
const banner = document.querySelector('.banner')
const headerHight = header.offsetHeight
const body = document.body

burger.addEventListener('click', (e) => {
    burger.classList.toggle('burger--active')
    nav.classList.toggle('nav--active')
    banner.classList.toggle('banner--active')

    if (e.target.classList.contains('burger--active')) {
        scrollbarOff()
    } else {
        scrollbarOn()
    }
})

links.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('burger--active')
        nav.classList.remove('nav--active')
        banner.classList.remove('banner--active')
        body.classList.remove('stop-scroll')

        scrollbarOn()
    })
})

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY

    if (scrollDistance >= headerHight) {
        header.classList.add('header--scroll')
    } else {
        header.classList.remove('header--scroll')
    }
})

