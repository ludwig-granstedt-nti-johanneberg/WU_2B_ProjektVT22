const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("main-menu");

function playAnimation(
    element: HTMLElement,
    duration: number,
    animationClass: string = "animated"
) {
    if (element.classList.contains(animationClass)) return;

    element.classList.toggle(animationClass);
    setTimeout(() => element.classList.toggle(animationClass), duration);
}

if (menuButton) {
    menuButton.addEventListener("click", () => {
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
window.onload = () => {};
