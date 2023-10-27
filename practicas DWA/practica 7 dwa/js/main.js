const buttonMenu = document.querySelector("#btn-menu")
const menu = document.querySelector(".links")
const classMenu = menu.getAttribute("class")
let isOpened = false

buttonMenu.addEventListener("click", () => {
    if (isOpened) {
        //cambiamos el estado actual
        isOpened = false
        menu.removeAttribute('class', 'show')
        menu.setAttribute('class', classMenu)
    } else {
        //cambiamos el estado actual
        isOpened = true
        //obtenemos las clases actuales del menu

        menu.setAttribute('class', `${classMenu} show`)
    }
    console.log(menu)
})