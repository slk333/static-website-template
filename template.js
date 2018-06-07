var hamburger = document.querySelector("#hamburger");
var rightHeader = document.querySelector(".rightHeader");
var article = document.querySelector("article");
var footer = document.querySelector("footer");




hamburger.onclick = function(){
if (hamburger.textContent == "三"){
hamburger.textContent = "X";
rightHeader.style.display = "grid"  // afficher les liens
  //rightHeader.classList.add('mobile-rightHeader');
  //rightHeader.classList.remove('rightHeader');
 //rightHeader.classList.remove('display-none');
article.setAttribute("style","display:none");
footer.setAttribute("style","display:none");
}
else {
  //rightHeader.classList.add('display-none');
 //rightHeader.classList.remove('rightHeader');
 //rightHeader.classList.remove('mobile-rightHeader');
hamburger.textContent = "三";
rightHeader.style.display = "none" // masquer les liens
article.style.display = "block";
footer.style.display = "block";
}

}



// media query event handler
if (matchMedia) {
  // const mq = window.matchMedia("(min-width: 700px)");
  // mq.addListener(WidthChange);
  // WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {

	 //   rightHeader.classList.add('rightHeader');
	  //rightHeader.classList.remove('mobile-rightHeader');

   // window width is > 700px
    
  } else {
	// window width is < 700px
	      
	      

  }

}