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

document.addEventListener('DOMContentLoaded', function () {
	const url = '../json/date.json',
		catalogList = document.querySelector('.top-catalog__contants-list')


	async function baseData() {
		fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(respons => respons.json())
			.then(data => {
				let key
				for (key in data) {
					catalogList.innerHTML += `
				<div
										class="top-catalog__contants-list-item"
										data-category="${data[key].dataCategory}" data-product-id="${data[key].dataProductId}"
									>
										<img
											src="${data[key].url}"
											alt=""
											class="top-catalog__contants-img"
										/>
										<h2 class="top-catalog__contants-title">${data[key].name}</h2>
										<p class="top-catalog__contants-price">${data[key].price}</p>
										<button class="top-catalog__contants-link">Buy</button>
									</div>
				`
				}
			})
			.then(data => {
				var btnBuy = document.querySelectorAll('.top-catalog__contants-link'),
					cartItemList = document.querySelector('.modals__brak-list'),
					iconButton = document.getElementById('icon__brak'),
					cartCounter = document.getElementById('cart__counter'),
					itemCount = 0

				// Появление модульного окна корзины
				iconButton.addEventListener('click', function () {
					var modals = document.querySelector('.modals__brak'),
						modalsClose = document.querySelector('.modals__close')

					modals.classList.toggle('modals__brak--show')

					modalsClose.addEventListener('click', () => {
						modals.classList.remove('modals__brak--show')
					})
				})

				const removeFromCart = function () {
					itemCount = Math.max(0, itemCount - 1)
					cartCounter.textContent = itemCount
				}

				// При клике на счетчике будет добавляться +1
				function addCart() {
					itemCount++
					cartCounter.textContent = itemCount
				}

				btnBuy.forEach(button => {
					button.addEventListener('click', function () {
						addCart()
						const productCard = button.closest(
							'.top-catalog__contants-list-item'
						)
						const productID = productCard.dataset.productId
						const productName = productCard.querySelector(
							'.top-catalog__contants-title'
						).innerHTML
						const productPrice = productCard.querySelector(
							'.top-catalog__contants-price'
						).innerHTML
						const imgLink = productCard.querySelector(
							'.top-catalog__contants-img'
						).src

						const existingCartItem = document.querySelector(
							`li[data-product-id="${productID}"]`
						)

						if (existingCartItem) {
							const quantityElement =
								existingCartItem.querySelector('.quantity')
							quantityElement.innerHTML =
								parseInt(quantityElement.innerHTML) + 1
						} else {
							const cartItem =  document.createElement('li')
							cartItem.dataset.productId = productID
							cartItem.innerHTML = `<img src="${imgLink}" class="img__added"> ${productName} - ${productPrice} 
						<span class="quantity">1 шт.</span> 
						<button class="remove">Прибрати</button>`

							cartItemList.appendChild(cartItem)
						

							const removeButtons = document.querySelectorAll('.remove')
							removeButtons.forEach(button => {
								button.addEventListener('click', () => {
									removeFromCart()

									const cartItem = button.closest('li')
									cartItemList.removeChild(cartItem)
								})
							})

							
						
						}
					})
					
				})
			})
	}

	baseData()
})
