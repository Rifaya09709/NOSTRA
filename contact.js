//offe-bar

var offerbar = document.getElementById("offer-bar")
var closebtn = document.getElementById("close-btn")

closebtn.addEventListener("click",function(){
    offerbar.style.display = "none";
})

//side-navbar

var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})



