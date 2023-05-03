window.addEventListener('load', function () {
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
				// screens greater than >= 775px
				breakpoint: 450,
				settings: {
					// Set to `auto` and provide item width to adjust to viewport
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				// screens greater than >= 1024px
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				}
			}
		]
	});
});

// ========> Menu <=============  
let header = document.querySelector('.header');
let button = document.querySelector('.abrir--menu');
let nav = document.querySelector('.nav');
let list = document.querySelector('.nav__list li');

 list.onclick = () => {
	nav.classList.toggle('activo');
};


button.onclick = () => {
	nav.classList.toggle('activo');
	header.classList.toggle('back');
};








// ========> Typed <=============

const typed = new Typed('.multi-text', {
	strings: ['Frontend Developer', 'Student', 'full-stack candidate'],
	typeSpeed: 100,
	backSpeed: 50,
	backDelay: 3000, 
	loop: true
});

// ========> Setiky <=============
window.onscroll = () => {
	const header = document.querySelector('.header');
	const nav = document.querySelector('.nav');

	header.classList.toggle('sticky', window.scrollY > 100);
	nav.classList.toggle('sticky', window.scrollY > 100);
}


