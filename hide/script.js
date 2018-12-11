// Get references to elements and controlling buttons 


var hiddenBox = document.getElementById("#hiddenB");
var revealButton = document.getElementById("#reveal");


// Here I use the button's inner HTML to track the state of the element, as the two are closely coupled


revealButton.onclick = function () {
 if (this.innerHTML === "Reveal") {
  this.innerHTML = "Hide";
  hiddenBox.classList.remove("translateOut");
  hiddenBox.classList.remove("bounceOutAnimation");
  hiddenBox.classList.add("bounceInAnimation");
 } else {
     this.innerHTML = "Reveal";
     hiddenBox.classList.remove("bounceInAnimation");
     hiddenBox.classList.add("bounceOutAnimation");
     hiddenBox.classList.add("translateOut");
   }
};
