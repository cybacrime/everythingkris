// Uses DOM, attach darkMode to window so inline onclick works
document.addEventListener('DOMContentLoaded', function () {
    var element = document.body;

    window.darkMode = function () {
        element.classList.toggle('darkMode');
    };
});

