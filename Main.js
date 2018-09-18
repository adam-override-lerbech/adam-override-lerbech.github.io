var opbyg = $('#Opbygning');
var funk = $('#Funktion');
var start = $('#startup');
var funkLink = $('#funkLink');
var opbygLink = $('#opbygLink');
var Opbygning = function () {
    funk.fadeOut(100);
    start.fadeOut(100);
    funkLink.removeClass('active');
    opbygLink.addClass('active');
    setTimeout(function () {
        opbyg.fadeIn(100);
    }, 100);
};
var Funktion = function () {
    start.fadeOut(100);
    opbyg.fadeOut(100);
    funkLink.addClass('active');
    opbygLink.removeClass('active');
    setTimeout(function () {
        funk.fadeIn(100);
    }, 100);
};
var Home = function () {
    funk.fadeOut(100);
    opbyg.fadeOut(100);
    funkLink.removeClass('active');
    opbygLink.removeClass('active');
    setTimeout(function () {
        start.fadeIn(100);
    }, 100);
};
$(document).ready(function () {
    funk.fadeOut(0);
    opbyg.fadeOut(0);
    funkLink.removeClass('active');
    opbygLink.removeClass('active');
    $('body').fadeOut(0);
    setTimeout(function () {
        $('body').fadeIn(0);
    }, 50);
});
