const burgerBtn = document.querySelector('#navbar-button')
const navbar = document.querySelector('#navbar_responsive')

console.log()
burgerBtn.addEventListener('click', () => {
	if (burgerBtn.getAttribute('src') == '/assets/img/navbar-menu.svg') {
		burgerBtn.setAttribute('src', '/assets/img/navbar-menu-off.svg')
        navbar.classList.add('active')
	} else {
		burgerBtn.setAttribute('src', '/assets/img/navbar-menu.svg')
        navbar.classList.remove('active')
	}
})
