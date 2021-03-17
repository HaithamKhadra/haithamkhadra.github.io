
/* when the user press on one of the menu links, the user is taken 
to the desired destination an the menu collapses automatically*/
let toCheck = document.getElementById("check");
let menuLinks = document.getElementsByClassName("nav-link");

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function unCheck() {
        toCheck.checked = false;
    });
};


/* blocking overflowY of the body element when the menu is opened */
let bodyOverflow = document.getElementById("body");

bodyOverflow.addEventListener("click", function blockScrolling() {
    if (toCheck.checked === false) {
        bodyOverflow.style.overflowY = "visible";
    } else if (toCheck.checked === true) {
        bodyOverflow.style.overflowY = "hidden";
    }
});