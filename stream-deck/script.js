
let count = 0;
const icardiGol = document.getElementById("icardiGol");
const gomisGol = document.getElementById("gomisGol");
const zanioloGol = document.getElementById("zanioloGol");
const gsGol = document.getElementById("gsGol");
const klarnet = document.getElementById("klarnet");

function playPauseIcardiGol() {

    if (count == 0) {
        count = 1;
        icardiGol.play();

    } else {
        count = 0;
        icardiGol.pause();

    }
}

function stopIcardiGol() {

    count = 0;
    icardiGol.pause();
    icardiGol.currentTime = 0;

}

function playPauseGomisGol() {

    if (count == 0) {
        count = 1;
        gomisGol.play();

    } else {
        count = 0;
        gomisGol.pause();

    }
}

function stopGomisGol() {

    count = 0;
    gomisGol.pause();
    gomisGol.currentTime = 0;

}

function playPauseZanioloGol() {

    if (count == 0) {
        count = 1;
        zanioloGol.play();

    } else {
        count = 0;
        zanioloGol.pause();

    }
}

function stopZanioloGol() {

    count = 0;
    zanioloGol.pause();
    zanioloGol.currentTime = 0;

}

function playPauseGsGol() {

    if (count == 0) {
        count = 1;
        gsGol.play();

    } else {
        count = 0;
        gsGol.pause();

    }
}

function stopGsGol() {

    count = 0;
    gsGol.pause();
    gsGol.currentTime = 0;

}

function playPauseKlarnet() {

    if (count == 0) {
        count = 1;
        klarnet.play();

    } else {
        count = 0;
        klarnet.pause();

    }
}

function stopKlarnet() {

    count = 0;
    klarnet.pause();
    klarnet.currentTime = 0;

}