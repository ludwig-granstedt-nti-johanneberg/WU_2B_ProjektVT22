"use strict";
var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("main-menu");
function playAnimation(element, duration, animationClass) {
    if (animationClass === void 0) { animationClass = "animated"; }
    if (element.classList.contains(animationClass))
        return;
    element.classList.toggle(animationClass);
    setTimeout(function () { return element.classList.toggle(animationClass); }, duration);
}
if (menuButton) {
    menuButton.addEventListener("click", function () {
        if (menu) {
            menu.classList.toggle("active");
            menu.classList.toggle("reversed");
            playAnimation(menu, 250);
        }
        menuButton.classList.toggle("active");
        menuButton.classList.toggle("reversed");
        playAnimation(menuButton, 250);
    });
}
window.onload = function () { };
//# sourceMappingURL=index.js.map