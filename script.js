// Uses DOM, attach darkMode to window so inline onclick works
document.addEventListener('DOMContentLoaded', function () {
    var element = document.body;
    var everything = document.getElementsByClassName('everything');

    window.darkMode = function () {
        element.classList.toggle('darkMode');
        everything.classList.toggle('darkMode');
    };
});

