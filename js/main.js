var svgNav = document.querySelector('.header__nav-svg'),
	inputNav = document.querySelector('.header__nav-input')

svgNav.addEventListener('click', () => {
	inputNav.classList.toggle('header__nav-input--active')
})



const burgeBtn = document.querySelector('.burger-menu'),
	burgerContent = document.querySelector('.burger-content')

burgeBtn.addEventListener('click', () => {
	burgerContent.classList.toggle('burger-content--active')
})
