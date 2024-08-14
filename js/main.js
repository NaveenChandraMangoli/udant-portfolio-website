// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    //condition
    if(document.documentElement.scrollTop > 20){

        // when you scrolled more than 20 px then it add this class
        nav.classList.add("header-scrolled");
    }else{

        // when you don't scrolled more than 20 px then it removed  this class
        nav.classList.remove("header-scrolled");
    }
} 

// to hide navbar when click on nav-links

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        //show class is the bootstrap class it show the data
        navCollapse.classList.remove("show");
    })
})
 


