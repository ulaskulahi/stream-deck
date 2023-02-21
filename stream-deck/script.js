
let count = 0;
const icardiGol = document.getElementById("icardiGol");
const gomisGol = document.getElementById("gomisGol");
const zanioloGol = document.getElementById("zanioloGol");
const gsGol = document.getElementById("gsGol");
const klarnet = document.getElementById("klarnet");

window.addEventListener('keydown', (event) => {

    if (event.key === '7' && count === 0) {
        count = 1;
        playPauseIcardiGol();
    } else if (event.key === '7' && count === 1) {
        count = 0;
        stopIcardiGol();
    }

    if (event.key === '8' && count === 0) {
        count = 1;
        playPauseGomisGol();
    } else if (event.key === '8' && count === 1) {
        count = 0;
        stopGomisGol();
    }

    if (event.key === '9' && count === 0) {
        count = 1;
        playPauseZanioloGol();
    } else if (event.key === '9' && count === 1) {
        count = 0;
        stopZanioloGol();
    }
    if (event.key === '4' && count === 0) {
        count = 1;
        playPauseGsGol();
    } else if (event.key === '4' && count === 1) {
        count = 0;
        stopGsGol();
    }
    if (event.key === '5' && count === 0) {
        count = 1;
        playPauseKlarnet();
    } else if (event.key === '5' && count === 1) {
        count = 0;
        stopKlarnet();
    }

});

function playPauseIcardiGol() {

    icardiGol.play();

}

function stopIcardiGol() {
    icardiGol.pause();
    icardiGol.currentTime = 0;
}

function playPauseGomisGol() {

    gomisGol.play();

}

function stopGomisGol() {


    gomisGol.pause();
    gomisGol.currentTime = 0;

}

function playPauseZanioloGol() {

    zanioloGol.play();

}

function stopZanioloGol() {

    zanioloGol.pause();
    zanioloGol.currentTime = 0;

}

function playPauseGsGol() {

    gsGol.play();

}

function stopGsGol() {

    gsGol.pause();
    gsGol.currentTime = 0;

}

function playPauseKlarnet() {


    klarnet.play();

}

function stopKlarnet() {


    klarnet.pause();
    klarnet.currentTime = 0;

}