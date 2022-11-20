// Animation menu for small screen 
const menuTransform = document.getElementById("menu"),
    overlay = document.getElementById("overlay"),
    body = document.querySelector("body");
menuItems = document.getElementById("menu-links");

// event listener 
menuTransform.addEventListener("click", changeMenu);

// changing the menu, overlay and display the menu on click 
function changeMenu() {
    if (menuTransform.classList.contains("open")) {
        menuTransform.classList.remove("open");
        overlay.classList.remove("overlayOpen");
        menuItems.classList.add("fade");
        body.classList.remove("noscroll");


    }
    else {
        menuTransform.classList.add("open");
        overlay.classList.add("overlayOpen");
        menuItems.classList.remove("fade");
        body.classList.add("noscroll");


    }
}