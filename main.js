//Swiper
const swiper = new Swiper(".gallerySwiper",{
    slidePerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        800: {
            slidePerView: 3,
            spaceBetween: 30,
        },
        600: {
            slidePerView: 2,
            spaceBetween: 20,
        }
    }
})

//navbar
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-button");
menuBtn.addEventListener("click", () =>{
    menu.classList.toggle("menu-open");
});

//scroll events
const pagination = document.querySelectorAll(`.pagination li a`);
const sections = document.querySelectorAll(".main-section");
const offest = 100;

for(let i = 0; i < sections.length; i++){
    window.addEventListener('scroll', () =>{
        if(window.scrollY > sections[i].offsetTop - offest && 
            window.screenY < sections[i].offsetTop + sections[i].offsetHeight - offest
        ){
            pagination.forEach(pag =>{
                pag.classList.remove('active');
            });
            pagination[i].classList.add('active');
        }
    })
}