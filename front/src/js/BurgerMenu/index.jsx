let openMenu = document.getElementById('open-menu')
let menu = document.querySelector('.navbar ul')

openMenu.addEventListener('click', () => {
    openMenu.classList.toggle('opened')
})

menu.addEventListener('click', () => {
    openMenu.classList.remove('opened')
})