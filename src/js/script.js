function addDelClass(el, className) {
	if (el.classList.contains(className)) {
		el.classList.remove(className)
	} else {
		el.classList.add(className)
	}
}

function menuInit() {

	if (document.body.getBoundingClientRect().width > 768) {
		return
	}

	const menuEl = document.querySelector('.head-top__menu')
	const headBttm = document.querySelector('.head-bttm')

	menuEl.addEventListener('click', (ev) => {
		addDelClass(menuEl, 'head-top__menu_active')
		addDelClass(headBttm, 'head-bttm_active')
	})
}

function licensesSliderInit() {
	const swiper = new Swiper('.swiper', {
		loop: true,
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			360: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			580: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 10
			},
			1330: {
				slidesPerView: 5,
				spaceBetween: 10
			}
		}
	});
}

function promoSliderInit() {
	const swiper = new Swiper('.swiper-promo', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	});
}

document.addEventListener('DOMContentLoaded',
	() => {
		menuInit()
		licensesSliderInit()
		promoSliderInit()


	})