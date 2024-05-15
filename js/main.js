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

let intEmail = document.querySelector('.nav__modals-reg-email'),
	intPass = document.querySelector('.nav__modals-reg-pass'),
	labelInput = document.querySelector('.input_Label-log'),
	labelInputPass = document.querySelector('.input_Label-log-pass')

let closeRegModals = document.querySelector('.nav__modals-reg-header-close'),
	openRegModals = document.querySelector('.opens'),
	modalsReg = document.querySelector('.nav__modals-reg')

function intEmailActive(email, label) {
	email.addEventListener('input', function () {
		let intValue = email.value.trim()

		if (intValue.length !== 0 || document.activeElement === email) {
			label.style.bottom = '100%'
		}

		email.addEventListener('blur', function () {
			if (intValue.length == 0 && document.activeElement !== email) {
				label.style.bottom = '10px'
			} else {
				label.style.bottom = '100%'
			}
		})
	})
}
intEmailActive(intEmail, labelInput)
intEmailActive(intPass, labelInputPass)

function closeAndOpenReg(show, hidden) {
	show.addEventListener('click', () => {
		modalsReg.classList.add('nav__modals-reg--show')
	})
	hidden.addEventListener('click', () => {
		modalsReg.classList.remove('nav__modals-reg--show')
	})
}
closeAndOpenReg(openRegModals, closeRegModals)
