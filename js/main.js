var svgNav = document.querySelector('.header__nav-svg')
var inputNav = document.querySelector('.header__nav-input')

svgNav.addEventListener('click', () => {
	inputNav.classList.toggle('header__nav-input--active')
})

const filter = document.querySelector('.top-catalog__contants-filter-price')

filter.addEventListener('change', function () {
	document.querySelectorAll('.top-catalog__contants-list-item').forEach(
		function (n) {
			n.classList.toggle(
				'hidden',
				this.length && !this.includes(n.dataset.category)
			)
		},
		Array.from(this.querySelectorAll(':checked'), n => n.dataset.id)
	)
})

filter.dispatchEvent(new Event('change'))
