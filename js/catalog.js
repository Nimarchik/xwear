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

const blockFilter = document.querySelector(
	'.top-catalog__contants-filter-block'
)
const filterType = document.querySelector('.top-catalog__contants-filter-type'),
	filterPrice = document.querySelector('.top-catalog__contants-filter-price'),
	filterDesiger = document.querySelector(
		'.top-catalog__contants-filter-designer'
	)

function filters() {
	blockFilter.addEventListener('click', e => {
		const targetTitle = e.target.dataset.title

		switch (targetTitle) {
			case 'type':
				filterType.classList.toggle('top-catalog__contants-filter-type--show')
				break

			case 'price':
				filterPrice.classList.toggle('top-catalog__contants-filter-price--show')
				break

			case 'designer':
				filterDesiger.classList.toggle(
					'top-catalog__contants-filter-designer--show'
				)
				break
		}
	})
}

filters()
