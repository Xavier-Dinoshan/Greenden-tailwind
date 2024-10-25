var menuicon = document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
var sidenav_close = document.getElementById("sidenav_close")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
});

sidenav_close.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

//new
var container = document.getElementById("container")
var search = document.getElementById("search")
var productList = container.querySelectorAll("div")


search.addEventListener("keyup", function(){
    var enteredText = event.target.value.toUpperCase()

    for (count = 0; count < productList.length; count++) {

        var productname = productList[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredText) < 0) {
            productList[count].style.display = "none"
        }
        else {
            productList[count].style.display = "block"
        }
    }
})