const slider = document.querySelector(".slider");
const btns = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".img");

let index = 1;
let size = slides[index].clientWidth;

let interval = setInterval(() => {
    if (index < 4) {
        index++
        slide()
    }
    else {
        clearInterval(interval)
    }

}, 1500)

update();

function update() {
    slider.style.transform = `translateX(${(-size * index)}px)`;
}

function slide() {
    slider.style.transition = "transform .8s ease-in-out";
    update();
}

function btnCheck() {
    if (this.id === "prev") {
        index--;
        disable(0)
    }
    else {
        index++;
        disable(1)
    }
    clearInterval(interval)
    slide();
}

slider.addEventListener('transitionend', () => {
    if (slides[index].id === "first") {
        slider.style.transition = "none";
        index = slides.length - 2;
        slider.style.transform = "translateX(" + (-size * index) + "px)";
    }
    else if (slides[index].id === "last") {
        slider.style.transition = "none";
        index = 1;
        slider.style.transform = "translateX(" + (-size * index) + "px)";
    }
})

btns.forEach(btn => btn.addEventListener('click', btnCheck));

// enable btn after 1,5 s
function enable(i) {
    setTimeout(() => {
        if (btns[i].hasAttribute('disabled')) {
            btns[i].removeAttribute('disabled')
        }
    }, 1500)
}
// disable btn 
function disable(i) {
    btns[i].setAttribute('disabled', '')
    enable(i)
}
