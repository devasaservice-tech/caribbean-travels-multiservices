const slider = document.querySelectorAll('.card__container');
const dot = document.querySelectorAll('.slider__dotsbox--dot');

// let slideIndex = 1;

// autoslide cards
const autoSlide = () => {
    let slideIndex = 1;

    const showSlide = (index) => {
        console.group("showSlide");
        slideIndex += index;
        console.log(`slideIndex: ${slideIndex}`);
        if (slideIndex > 3) {
            slideIndex = 1;
        }

        slider.forEach(numCard => {
            numCard.style.display = "none";
        });

        dot.forEach(numDot => {
            numDot.classList.remove('active');
        });

        const currentIndex = (slideIndex < slider.length)
            ? slideIndex - index
            : slider.length

        console.log(`currentIndex: ${currentIndex}`);
        slider[slideIndex - 1].style.display = "block";
        dot[slideIndex - 1].classList.add('active');
        console.groupEnd();
    }

    return showSlide;
}

let startAutoSlide = autoSlide();
let timer = setInterval(startAutoSlide, 4000, 1);

// CLICKING CARDS
const resetTimer = () => {
    clearInterval(timer);
    timer = setInterval(autoSlide, 6000);
}

const currentCard = (n) => {
    slideIndex = n;
    showSlide(slideIndex);
    resetTimer();
}

let slideIndex = 1;

const showSliding = (index) => {
    console.log(`index: ${index}`);
    const lengthSlider = slider.length;
    slideIndex += index;
    if (slideIndex > lengthSlider) {
        slideIndex = 1;
    }

    slider.forEach(numCard => {
        numCard.style.display = "none";
    });

    dot.forEach(numDot => {
        numDot.classList.remove('active');
    });

    const slideToShow = (slideIndex <= lengthSlider)
        ? slideIndex - index
        : lengthSlider;

    slider[slideToShow].style.display = "block";
    dot[slideToShow].classList.add('active');

    console.log(`slideToShow: ${slideToShow}`);

}

const slidingCard = (indexMove) => {
    console.group("slidingCard");
    // console.log(`indexMove: ${indexMove}`);

    showSliding(indexMove);

    console.groupEnd();
}
