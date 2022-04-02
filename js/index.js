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
function resize() {
    if (window.innerWidth >= 768) {
        if (menu) {
            menu.classList.remove("active");
            menu.classList.add("reversed");
        }
        if (menuButton) {
            menuButton.classList.remove("active");
            menuButton.classList.add("reversed");
        }
    }
}
window.onresize = resize;
window.onload = function () { };
//# sourceMappingURL=index.js.map