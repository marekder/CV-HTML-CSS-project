import './sass/main.scss'
import AOS from 'aos'

AOS.init();

let options = {
    strings: ['Front-end Developer', 'Back-end Developer'],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true,
    startDelay: 500,
};

let typed = new Typed('.typed', options);
