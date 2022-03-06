"use strict";
var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("main-menu");
function playAnimation(element, duration, animationClass) {
    if (animationClass === void 0) { animationClass = "animated"; }
    element.classList.toggle(animationClass);
    setTimeout(function () { return element.classList.toggle(animationClass); }, duration);
}
if (menuButton)
    menuButton.addEventListener("click", function () {
        if (menu) {
            menu.classList.toggle("active");
            menu.classList.toggle("reversed");
            playAnimation(menu, 500);
        }
    });
