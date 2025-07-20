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



//product

   var productcontainer = document.getElementById("product-container")
var search = document.getElementById("searchInput")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = this.value.toUpperCase();

    for(var count = 0; count < productlist.length; count = count+1){

     var h2Element = productlist[count].querySelector("h2");

     var productname = h2Element.textContent.toUpperCase();

     if(productname.indexOf(enteredValue)<0)
     {
        productlist[count].style.display="none";
     }
     else{
        productlist[count].style.display="block";
     }

        
}

})


