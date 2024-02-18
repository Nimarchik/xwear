var svgNav = document.querySelector('.header__nav-svg')
var inputNav = document.querySelector('.header__nav-input')

svgNav.addEventListener('click', () => {
	inputNav.classList.toggle('header__nav-input--active')
})

// const listPriceBtn = document.querySelector(
// 		'.top-catalog__contants-filter-price'
// 	),
// 	itemsPrice = document.querySelectorAll('.top-catalog__contants-list-item')

// function filter() {
// 	listPriceBtn.addEventListener('change', event => {
// 		const targetId = event.target.dataset.id

// 		switch (targetId) {
// 			case 'price2':
// 				itemsPrice.forEach(item => {
// 					if (item.classList.contains('price2')) {
// 						item.style.display = 'block'
// 					} else {
// 						item.style.display = 'none'
// 					}
// 				})
// 				break
// 		}
// 	})
// }

// filter()

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
