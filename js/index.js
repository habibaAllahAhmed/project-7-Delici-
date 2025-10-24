
let nav = document.querySelector("nav"),
    nextSlideBtn = document.querySelector("#carouselExampleCaptions .carousel-control-next"),
    prevSlideBtn = document.querySelector("#carouselExampleCaptions .carousel-control-prev"),
    navLinks = document.querySelectorAll("nav ul li"),
    navLis = document.querySelectorAll(".offcanvas .offcanvas-body ul li"),
    menuLinks = document.querySelectorAll("#Menu .container ul li a"),
    carouselIndicators = document.querySelectorAll("#carouselExampleCaptions .carousel-indicators button"),
    popUpBoxes = document.querySelectorAll(".popup .box"),
    carouselItem = document.querySelectorAll("#carouselExampleCaptions .carousel-inner .carousel-item"),
    menuLiLinks = document.querySelectorAll("#Menu .container ul li a"),
    menuLiElements = document.querySelectorAll("#Menu .container ul li"),
    menuLiActive = document.querySelector("#Menu .container ul li.active"),
    navLiActive = document.querySelector("nav ul li.active"),
    currentMenuLiItem = document.querySelector("#Menu .container .row .item.show"),
    BreakFastLink = document.querySelector("#Menu .container ul li:nth-of-type(1) a"),
    LunchLink = document.querySelector("#Menu .container ul li:nth-of-type(2) a"),
    DinnerLink = document.querySelector("#Menu .container ul li:nth-of-type(3) a"),
    DrinksLink = document.querySelector("#Menu .container ul li:nth-of-type(4) a"),
    InitialScroll = 0;

// action on load the page
window.addEventListener("DOMContentLoaded", function () {
    let loadingPage = document.querySelector(".loading"),
    html = this.document.querySelector("html");

    html.classList.add("stop");
    
    this.setTimeout(function () {
        loadingPage.classList.add("hide");
        html.classList.remove("stop");
    }, 2000);
});

// action on scroll
window.addEventListener("scroll", function () {
    let topOfWindow = this.scrollY,
        sectionNames = ["Home", "About", "Story", "Special", "Menu", "Chefs", "Contact"];

    for (let sectionName of sectionNames) {
        let section = document.querySelector(`#${sectionName}`),
            sectionId = section.id,
            topOfSection = section.offsetTop,
            bottomOfSection = section.offsetTop + section.clientHeight;
            
        if (topOfWindow >= topOfSection && topOfWindow <= bottomOfSection) {
            let oldLink = this.document.querySelector("nav.navbar ul li.active"),
            newLink = this.document.querySelector(`nav.navbar ul li a[href="#${sectionId}"]`),
            oldOffcanvasLink = this.document.querySelector(".offcanvas .offcanvas-body ul li.active"),
            newOffcanvasLink = this.document.querySelector(`.offcanvas .offcanvas-body ul li a[href="#${sectionId}"]`);
console.log(oldOffcanvasLink,
    newOffcanvasLink
);
            oldLink.classList.remove("active");
            newLink.parentElement.classList.add("active");
            oldOffcanvasLink.classList.remove("active");
            newOffcanvasLink.parentElement.classList.add("active");
        };
    }

  if (topOfWindow > InitialScroll ) {
    nav.classList.add("scroll-down");
    nav.classList.remove("scroll-up");
  }else if(topOfWindow < InitialScroll ){
    nav.classList.add("scroll-up");
    nav.classList.remove("scroll-down");
  }

  InitialScroll = topOfWindow;

    if (topOfWindow > 1) {
        nav.classList.add("scrolled");;
    } else {
        nav.classList.remove("scrolled");
        nav.classList.remove("scroll-up");
        nav.classList.remove("scroll-down");
    }
});

// get next carousel
nextSlideBtn.addEventListener("click", nextSlider);

// get previous carousel
prevSlideBtn.addEventListener("click", prevSlider);

// get next/prev carousel item from indicators
carouselIndicators.forEach(function (carouselIndicator, index) {
    carouselIndicator.addEventListener("click", function () {
        let currentCarouselIndicator = document.querySelector("#carouselExampleCaptions .carousel-indicators button.active"),
            carouselItems = document.querySelectorAll("#carouselExampleCaptions .carousel-inner .carousel-item"),
            currentSlide = document.querySelector(".carousel-inner .carousel-item.active");

        if(currentSlide != carouselItems[index]){
        carouselItems[index].classList.add("active");
        carouselItems[index].classList.add("show");

        currentSlide.classList.remove("active");
        currentSlide.classList.remove("show");

        currentCarouselIndicator.classList.remove("active");
        carouselIndicator.classList.add("active");
        }

    });
});

// stopPropagation of popup boxes
popUpBoxes.forEach(function (popUpBoxes) {
    popUpBoxes.addEventListener("click", function (e) {
        e.stopPropagation();
    })
});


//change active in menu li links
activateLinks(menuLiElements, menuLiActive);

//change active in nav links in offcanvas
activateLinks(navLis, navLiActive);

// prevent default action of menu links in li 
menuLiLinks.forEach(function (menuLiLink) {
    menuLiLink.addEventListener("click", function (e) {
        e.preventDefault();
    });
})

// show the breakfast menu
BreakFastLink.addEventListener("click", function () {
    showMenu(BreakFast ,"BreakFast");
});

// show the lunch menu
LunchLink.addEventListener("click", function () {
    showMenu(Lunch, "Lunch");
});

// show the dinner menu
DinnerLink.addEventListener("click", function () {
    showMenu(Dinner , "Dinner");
});

// show the drinks menu
DrinksLink.addEventListener("click", function () {
    showMenu(Drinks , "Drinks");
});

// show the breakfast menu
showMenu(BreakFast , "BreakFast");


