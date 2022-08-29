 let config = {
     slidesPerView: 1,
     spaceBetween: 0,
     allowTouchMove: false
 }
 var swiper = new Swiper('.swiper-container', config);
 const swiperContainer = document.querySelector('.swiper-container').swiper;

 const removeClass = () => {
     document.querySelectorAll('.category-menu').forEach(cat => cat.classList.replace('category-select', 'category-inactive'))
 }
 const menuFood = () => {
     document.querySelectorAll('.category-menu').forEach((category, index) => {
         category.addEventListener('click', () => {
             if (!category.classList.contains('category-select')) {
                 removeClass()
                 category.classList.replace('category-inactive', 'category-select')
                 switch (index) {
                     case 0: {
                         swiperContainer.slideTo(0, 1000, true)
                     }
                     break;
                 case 1: {
                     swiperContainer.slideTo(1, 1000, true)
                 }
                 break;
                 case 2: {
                     swiperContainer.slideTo(2, 1000, true)
                 }
                 break;
                 case 3: {
                     swiperContainer.slideTo(3, 1000, true)
                 }
                 break;
                 }
             }
         })
     })
 }

 window.addEventListener('load', () => {
     menuFood()
 })
