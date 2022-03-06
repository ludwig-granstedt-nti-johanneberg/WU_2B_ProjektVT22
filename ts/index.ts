const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("main-menu");

function playAnimation(element: HTMLElement, duration: number, animationClass: string = "animated") {
    element.classList.toggle(animationClass);
    setTimeout(() => element.classList.toggle(animationClass), duration)
}

if (menuButton) menuButton.addEventListener("click", () => {
    if (menu) {
        menu.classList.toggle("active");
        menu.classList.toggle("reversed");
        playAnimation(menu, 500)
    } 
});
