const left = document.querySelector("#slider-arrow-left");
const right = document.querySelector("#slider-arrow-right");
const slider = document.querySelector("#slider-content");
const itemsList = document.querySelector("#slider-list");
const computedStyles = getComputedStyle(itemsList);
const items = document.querySelectorAll(".slider__item");

const minRight = 0;
const sliderWidth = getComputedStyle(slider).width;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShownItems = parseInt(sliderWidth) / step;
const maxRight = (items.length - preShownItems) * step;
let currentRight = 0;

itemsList.style.right = currentRight;

right.addEventListener("click", e => {
    e.preventDefault();
    console.log(currentRight);

    if (currentRight < maxRight) {
        currentRight += step;
        itemsList.style.right = `${currentRight}px`;
    }
});

left.addEventListener("click", e => {
    e.preventDefault();

    if (currentRight > minRight) {
        currentRight -= step;
        itemsList.style.right = `${currentRight}px`;
    }
});
