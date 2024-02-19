document.body.onload = function () {
	const modalsAds = document.querySelector('.ads-modals'),
		modalsAdsClose = document.querySelector('.ads-modals__content svg')

	setTimeout(function () {
		var preloader = document.getElementById('page-preloader')
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done')
		}
	}, 1000)

	let timeId = setTimeout(function tick() {
		modalsAds.classList.add('ads-modals--show')

		modalsAdsClose.addEventListener('click', () => {
			modalsAds.classList.remove('ads-modals--show')
      timeId = setTimeout(tick, 60000)
		})
	}, 5000)
}
