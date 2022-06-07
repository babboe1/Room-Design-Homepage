const BACKDROP = document.getElementById('backdrop');
const MENU_BTN = document.querySelector('.MenuBtn');
const [ARROW_MOBILE, ARROW_DESKTOP] = document.querySelectorAll('.NavArrow');
const ARROW_MOBILE_LEFT = ARROW_MOBILE.firstElementChild;
const ARROW_MOBILE_RIGHT = ARROW_MOBILE.lastElementChild;
const ARROW_DESKTOP_LEFT = ARROW_DESKTOP.firstElementChild;
const ARROW_DESKTOP_RIGHT = ARROW_DESKTOP.lastElementChild;
const MENU_MODAL = document.getElementById('menu-modal');
const HERO_IMAGE = document.querySelector('.HeroImage');
const TEXT_CONTAINER = document.querySelector('.container');
const LINE = document.querySelector('.nav-bar__list--after');
const [TEXT_1, TEXT_2, TEXT_3] = document.querySelectorAll('.ContainerText');
const SLIDE1_UP = 'slide1-up';
const SLIDE2_UP = 'slide2-up';
const SLIDE3_UP = 'slide3-up';
const FADE1_IN = 'fade1-in';
const FADE2_IN = 'fade2-in';
const FADE3_IN = 'fade3-in';
const FADE1_OUT = 'fade1-out';
const FADE2_OUT = 'fade2-out';
const FADE3_OUT = 'fade3-out';
const FADE1_IN_DESKTOP = 'fade1-in-desktop';
const FADE2_IN_DESKTOP = 'fade2-in-desktop';
const FADE3_IN_DESKTOP = 'fade3-in-desktop';

const BackDrop = () => {
	BACKDROP.classList.toggle('visible');
};

const StopScroll = () => {
	document.body.classList.toggle('StopScroll');
};

const modalDrop = () => {
	BackDrop();
	StopScroll();
};

const backDropHandler = () => {
	menuBtnHandler();
};

const magicLine = (value) => {
	LINE.className = 'nav-bar__list--after';
	LINE.classList.add(`${value}`);
};

const menuBtnHandler = () => {
	modalDrop();
	MENU_BTN.firstElementChild.classList.toggle('hidden');
   MENU_BTN.lastElementChild.classList.toggle('hidden');
   MENU_MODAL.classList.add('invisible');
   MENU_MODAL.classList.toggle('visible');
   
};

const animateOpacityFunction = (activeText, incomingText, animationName) => {
	activeText.classList.remove('opacity');
	TEXT_CONTAINER.className = 'container';
	incomingText.classList.add('opacity');
	TEXT_CONTAINER.classList.add(animationName);
};

const animateImageFunction = (animationName) => {
	HERO_IMAGE.className = 'HeroImage';
	HERO_IMAGE.classList.add(animationName);
};

const animateLeftTextFunction = () => {
	if (TEXT_1.classList.contains('opacity')) {
		animateOpacityFunction(TEXT_1, TEXT_3, SLIDE3_UP);
		if (window.innerWidth < 1024) {
			animateImageFunction(FADE3_IN);
		} else if (window.innerWidth > 1023) {
			animateImageFunction(FADE3_IN_DESKTOP);
		}
	} else if (TEXT_3.classList.contains('opacity')) {
		animateOpacityFunction(TEXT_3, TEXT_2, SLIDE2_UP);
		if (window.innerWidth < 1024) {
			animateImageFunction(FADE2_IN);
		} else if (window.innerWidth > 1023) {
			animateImageFunction(FADE2_IN_DESKTOP);
		}
	} else if (TEXT_2.classList.contains('opacity')) {
		animateOpacityFunction(TEXT_2, TEXT_1, SLIDE1_UP);
		if (window.innerWidth < 1024) {
			animateImageFunction(FADE1_IN);
		} else if (window.innerWidth > 1023) {
			animateImageFunction(FADE1_IN_DESKTOP);
		}
	}
};
const animateRightTextFunction = () => {
	
};
