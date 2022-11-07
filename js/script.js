const defaultOffset = 50;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
    if(scrollPosition() > defaultOffset) {
        //scroll down
        header.style.backgroundColor = '#262626ff';
        document.querySelector('.header__content').style.padding = '20px 40px';
    }
    else if(scrollPosition() < defaultOffset){
        //scroll up
        header.style.backgroundColor = 'transparent';
        document.querySelector('.header__content').style.padding = '40px';
    }
});