const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const colorLetter = document.querySelector('.colorLetter');
const colorLetterTwo = document.querySelector('.colorLetterTwo');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = 'var(--bg-scroll-color)';
		header.style.borderBottom = '1px solid black';
		colorLetter.style.color = 'var(--main-bg-color)';
		colorLetterTwo.style.color = 'var(--main-bg-color)';
	} else {
		header.style.backgroundColor = 'transparent';
		colorLetter.style.color = 'var(--main-bg-color)';
		colorLetterTwo.style.color = 'var(--main-bg-color)';
		header.style.borderBottom = '3px solid transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
