var svgNav = document.querySelector('.header__nav-svg-one')
var inputNav = document.querySelector('.header__nav-input-one')

svgNav.addEventListener('click', () => {
	inputNav.classList.toggle('header__nav-input-one--active')
})
