var menuicon = document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
var sidenav_close = document.getElementById("sidenav_close")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
});

sidenav_close.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})