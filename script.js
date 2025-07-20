



  function showBodyAfterDelay() {
    setTimeout(() => {
      document.body.style.display = "block";
    }, 3000); // 3000 milliseconds = 3 seconds
  }


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


//slider

 var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginleft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginleft="-"+slidermargin+"vw";
    }
    
    
}
)










 // Scroll left or right on item click
   const scrollBox = document.getElementById('scrollBox');
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
      const overlay = item.querySelector('.overlay');
      overlay.addEventListener('click', function (e) {
        const itemRect = item.getBoundingClientRect();
        const clickX = e.clientX - itemRect.left;

        if (clickX < itemRect.width / 2) {
          // Clicked on left side – scroll left
          scrollBox.scrollBy({ left: -(item.offsetWidth + 15), behavior: 'smooth' });
        } else {
          // Clicked on right side – scroll right
          scrollBox.scrollBy({ left: item.offsetWidth + 15, behavior: 'smooth' });
        }
      });
    });



   