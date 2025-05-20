var slider = document.getElementById('song-progress');

noUiSlider.create(slider, {
    start: [20],
    range: {
        'min': [0],
        'max': [100]
    }
});

var slider = document.getElementById('song-volume');

noUiSlider.create(slider, {
    start: [90],
    range: {
        'min': [0],
        'max': [100]
    }
});


// Tooltips

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// Viewport Heights

$(window).on("resize load", function () {

    var totalHeight = $(window).height();

    var headerHeight = $('.header').outerHeight();
    var footerHeight = $('.current-track').outerHeight();
    var playlistHeight = $('.playlist').outerHeight();
    var nowPlaying = $('.playing').outerHeight();

    var navHeight = totalHeight - (headerHeight + footerHeight + playlistHeight + nowPlaying);
    var artistHeight = totalHeight - (headerHeight + footerHeight);

    console.log(totalHeight);

    $(".navigation").css("height", navHeight);
    $(".artist").css("height", artistHeight);
    $(".social").css("height", artistHeight);

});





// Collapse Toggles

$(".navigation__list__header").on("click", function () {

    $(this).toggleClass("active");

});


// Media Queries

$(window).on("resize load", function () {
    if ($(window).width() <= 768) {

        $(".collapse").removeClass("in");

        $(".navigation").css("height", "auto");

        $(".artist").css("height", "auto");

    }
});

$(window).on("resize load", function () {
    if ($(window).width() > 768) {

        $(".collapse").addClass("in");

    }
});


const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

const audio = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");

playBtn.addEventListener("click", () => {
    audio.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
});

pauseBtn.addEventListener("click", () => {
    audio.pause();
    pauseBtn.style.display = "none";
    playBtn.style.display = "inline-block";
});

// Your existing 107 lines of code remain exactly the same...

// ====== Add this code at the end ======




// Optional: Reset buttons when audio ends
audio.addEventListener('ended', () => {
    pauseBtn.style.display = "none";
    playBtn.style.display = "inline-block";
});



