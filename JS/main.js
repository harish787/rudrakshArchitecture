const animation = document.querySelectorAll('.animation')
const animation1 = document.querySelectorAll('.animation1')
const animation2 = document.querySelectorAll('animation2')

window.addEventListener('scroll', animate);

animate();

function animate() {
    const triggerBottom = window.innerHeight;

    animation.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        }

    })
    animation1.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show1');
        }
    })
    animation2.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show2');
        }
    })
   
} 
// <--------------- code for slide show ------------->
let currentIndex = 0;
const slider = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slider img').length;

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex === totalSlides) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides-1;
  }

  const translateValue = -currentIndex * 100 + '%';
  slider.style.transform = 'translateX(' + translateValue + ')';
}

setInterval(() => {
  changeSlide(1);
}, 3500);

//<------------- slide show code ends here ------------------->
function open_nav(){
  const open=document.querySelector('.main .nav');
  const close_btn=document.querySelector('.main .close-nav');
  close_btn.style.display='block';
  open.style.display='block';
  const open_btn=document.querySelector('.main .open-nav');
  open_btn.style.display='none';
}
function close_nav(){
  const close=document.querySelector('.main .nav');
  const open_btn=document.querySelector('.main .open-nav');
  open_btn.style.display='block';
  close.style.display='none';
  const close_btn=document.querySelector('.main .close-nav');
  close_btn.style.display='none';
}