var hamburger = document.querySelector("#hamburger");
var rightHeader = document.querySelector("#rightHeader");
var article = document.querySelector("article");
var footer = document.querySelector("footer");




hamburger.onclick = function(){
if (hamburger.textContent == "三"){
hamburger.textContent = "X";
rightHeader.setAttribute("style","display:grid;grid-template-columns:repeat(1,1fr);");
article.setAttribute("style","display:none");
footer.setAttribute("style","display:none");
}
else {
rightHeader.setAttribute("style","display:none;");
hamburger.textContent = "三";
article.style.display = "block";
footer.style.display = "block";
}

}