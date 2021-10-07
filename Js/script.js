
let qtdSlide = document.querySelectorAll('.img-slide').length;
let widthSlide = document.querySelector('.slider').clientWidth;
let heightSlide = document.querySelector('.slider').clientHeight;

document.querySelector('.control-slide').style.width = `${widthSlide}px`; //CONFIGURAÇÃO PARA ESPAÇO FIXO;
document.querySelector('.control-slide').style.height = `${heightSlide}px`;

document.querySelector('.slot-slide').style.width = `${widthSlide * qtdSlide}px`;

let currentSlide = 0;

function prev() {
    currentSlide--;
    if(currentSlide < 0) currentSlide = qtdSlide -1;
    updateMargin();

}

function goNext() {
    currentSlide++;
    if(currentSlide > (qtdSlide -1)) currentSlide = 0;
    updateMargin();
}

let sliderItemWidth;

function updateMargin() {
    let sliderItemWidth = document.querySelector('.img-slide').clientWidth;

    let newMargin = (currentSlide * sliderItemWidth);

    document.querySelector('.slot-slide').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 4000);