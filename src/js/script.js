



//Scroll to class object
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if(menuLinks.length > 0 ){
    menuLinks.forEach(menuLinks=>{
        menuLinks.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

//Menu burger
const iconMenu = document.querySelector('.menu_icon');
if(iconMenu){
    const menuBody = document.querySelector('.menu_body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}


//Program course slider
const program_sliders = document.querySelectorAll(".slider_item");
const windowInnerWidth = document.documentElement.clientWidth;
const slider = document.querySelector('.slider')

console.log(windowInnerWidth);
if(windowInnerWidth < 600){
    Slider(1);
}
else if(windowInnerWidth < 850){
    Slider(2);
}else{
    Slider(3);
}
function Slider(param){
    if(program_sliders.length > param){
        slider.style = "display: block";
        $(document).ready(function (){
            $('.slider').slick({
                dots: true,
                arrows: false,
                slidesToShow: param,
                slidesToScroll: param,
                responsive: [
                    {
                        breakpoint: 850,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    }]
            });
        })
    }
}
