var svgNav = document.querySelector('.header__nav-svg')
var inputNav = document.querySelector('.header__nav-input')

svgNav.addEventListener('click', () => {
	inputNav.classList.toggle('header__nav-input--active')
})
