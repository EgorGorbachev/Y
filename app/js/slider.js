const slider1 = new Swiper(".main-slider-wrapper ",{
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    slidesPerView:4,
    spaceBetween:30
});

if(window.innerWidth<1280){
    const slider1 = new Swiper(".main-slider-wrapper ",{
        slidesPerView:3,
        slidesPerGroup:1,
        spaceBetween:30
    })
};

if(window.innerWidth<800){
    const slider1 = new Swiper(".main-slider-wrapper ",{
        slidesPerView:2,
        slidesPerGroup:1,
        spaceBetween:30
    })
};

if(window.innerWidth<400){
    const slider1 = new Swiper(".main-slider-wrapper ",{
        slidesPerView:1,
        slidesPerGroup:1,
        spaceBetween:30
    })
};

const slider2 = new Swiper(".aboutus-slider-container ",{
    slidesPerView:1,
    pagination:{
        el:".swiper-pagination",
        clickable:!0
    },
    loop:!0,
    autoplay:{
        delay:5e3,
        disableOnInteraction:!1
    }
});

const slider3 = new Swiper(".slider-contacts ",{
    slidesPerView:1,
    direction:"vertical",
    pagination:{
        el:document.getElementById("contacts-swiper-pagination"),
        clickable: true,
        progressbarOpposite: true
    }
});

if(window.innerWidth<530){
    const slider3 = new Swiper(".slider-contacts ",{
        slidesPerView:1,
        direction:"vertical",
        loop: true,
        autoplay:{
            delay:5000,
        }
    })
};