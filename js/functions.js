// get next carousel item
function nextSlider() {
    let currentSlide = document.querySelector(".carousel-inner .carousel-item.active"),
    currentCarouselIndicator = document.querySelector("#carouselExampleCaptions .carousel-indicators button.active"),
    nextSlide = currentSlide.nextElementSibling ?? document.querySelector(".carousel-inner .carousel-item:first-child"),
    nextIndicator = currentCarouselIndicator.nextElementSibling ?? document.querySelector("#carouselExampleCaptions .carousel-indicators button:first-child");
    
    currentSlide.classList.remove("show");
    currentSlide.classList.remove("active");
    
    setTimeout((e) => {
        nextSlide.classList.add("active");
    }, 100)
    
    setTimeout((e) => {
        nextSlide.classList.add("show")
    }, 200);
    
    currentCarouselIndicator.classList.remove("active");
    nextIndicator.classList.add("active");
    
}

// get prev carousel item
function prevSlider() {
    let currentSlide = document.querySelector(".carousel-inner .carousel-item.active"),
        currentCarouselIndicator = document.querySelector("#carouselExampleCaptions .carousel-indicators button.active"),
        prevSlide = currentSlide.previousElementSibling ?? document.querySelector(".carousel-inner .carousel-item:last-child"),
        prevIndicator = currentCarouselIndicator.previousElementSibling ?? document.querySelector("#carouselExampleCaptions .carousel-indicators button:last-child");

    currentSlide.classList.remove("active");
    currentSlide.classList.remove("show");

    setTimeout((e) => {
        prevSlide.classList.add("active");
    }, 100);

    setTimeout((e) => {
        prevSlide.classList.add("show")
    }, 200);

    currentCarouselIndicator.classList.remove("active");
    prevIndicator.classList.add("active");

}

// function that change active of links
function activateLinks(links, activeSelector) {
    links.forEach(link => {
    link.addEventListener("click", function (e) {

    activeSelector.classList.remove("active");

    link.classList.add("active");
    });
    });
}

// open popup
function openPopup(popupName) {
    let nav = document.querySelector("nav");
    nav.classList.add("d-none");

    let currentPopup = document.querySelector(`.popup[data-popup-name="${popupName}"]`);
    currentPopup.classList.add("active");

    setTimeout(() => {
        currentPopup.classList.add("show");
        currentPopup.querySelector(".box").classList.add("show")
    }, 1);
}

// close popup
function ClosePopup(popupName) {
    let currentPopup = document.querySelector(`.popup[data-popup-name="${popupName}"]`),
    nav = document.querySelector("nav");

    nav.classList.remove("d-none");

    currentPopup.querySelector(".box").classList.remove("show");

    setTimeout(function () {
        currentPopup.classList.remove("show");
        setTimeout(function () {
            currentPopup.classList.remove("active");
        }, 1000)
    }, 501)

}

// in Menu Section
function showMenu(Meals , nameOfSection) {
    let popupSection = nameOfSection;
    document.querySelector("#Menu .container .row").innerHTML = "";

    Meals.forEach(function (dish , index) {

        document.querySelector("#Menu .container .row").innerHTML += `
            <div class="part col-md-6 mt-5 pe-5">
                <div class="line d-none d-md-block" ></div>
                    <div class="item d-flex justify-content-center align-items-center">
                        <div class=" col-4 col-md-5 col-lg-3 d-flex justify-content-center align-items-center">
                            <div class="frame me-4 me-lg-3 me-md-0">
                                <div class="img" style="background-image: url('images/${dish.image}')"></div>
                                <div class="layout">
                                    <i class="fa-regular fa-square-plus fs-2" onclick="openPopup('menu');showMenuPopup( ${index},${popupSection})"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-8 col-md-7 col-lg-9">
                            <div class="content text-start">
                                <div class="info d-flex justify-content-sm-center align-items-center">
                                    <h3 class="me-3">${dish.name}</h3>
                                    <span class="d-none d-md-none d-lg-block d-sm-block"></span>
                                    <h3 class="ms-sm-3 ms-lg-3 ms-md-0">${dish.price}</h3>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, incidunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
                `;
    });

    let newItems = document.querySelectorAll("#Menu .container .row .item");
    setTimeout(() => {
        newItems.forEach(item => item.classList.add("show"));
    }, 1);

}

// In Menu Popup
function showMenuPopup(index , popupSection) {
    function showItemOfIndex(){
        let popupDish = popupSection[index];

        document.querySelector('.popup[data-popup-name="menu"] .box').innerHTML = `
                <div class="title text-center mb-3">
                <i class="fa-regular fa-circle-xmark sideBarExit" onclick="ClosePopup('menu')"></i>
                <h5>SPECIAL SELECTION</h5>
                <img src="images/separator.svg" alt="separator" class="img-fluid">
                <h2 class="my-3">${popupDish.name}</h2>
            </div>
            <div class="body">
                <div id="carouselExampleCaptions">
                    <div class="carousel-inner mb-3">
                        <div class="carousel-item active" style="background-image: url('images/${popupDish.image}')">
                            <p>${popupDish.price}</p>
                        </div>
                    </div>
                    <button class="carousel-control-prev d-block" type="button">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button class="carousel-control-next d-block" type="button">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, reiciendis numquam magnam dolore
                    ratione tenetur eos rem modi voluptates obcaecati quidem voluptate mollitia sunt aspernatur odit
                    porro possimus ducimus, explicabo quaerat, pariatur illo praesentium non delectus inventore?
                    Molestias porro delectus laborum perferendis ratione maxime, impedit veniam minus dolor, magnam
                    a.
                </p>
            </div>
                `;

    let menuCarouselPrevBtn = document.querySelector(".popup[data-popup-name='menu'] .box .body .carousel-control-prev"),
    menuCarouselNextBtn = document.querySelector(".popup[data-popup-name='menu'] .box .body .carousel-control-next");

    menuCarouselPrevBtn.addEventListener("click" , function(){
    index = --index; 
    if(index < 0){
    index = popupSection.length -1 ;
    }
    showItemOfIndex();
    });

    menuCarouselNextBtn.addEventListener("click" , function(){
    index = ++index; 
        if(index >= popupSection.length -1){
        index = 0 ;
    }
    showItemOfIndex();
    });
    }

    showItemOfIndex();
        }
