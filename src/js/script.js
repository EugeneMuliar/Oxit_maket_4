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