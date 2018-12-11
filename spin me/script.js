// Get references to elements and controlling buttons 
var box1 = document.getElementById("b1");
var buttonOne = document.getElementById("animateOne");


// Here I use the button's inner HTML to track the state of the element, as the two are closely coupled
buttonOne.onclick = function() {
  if (buttonOne.innerHTML === "Play") {
    this.innerHTML = "Pause";
    box1.innerHTML = "Not So fast!";
    // If box one isn't already activated, add the class
    if (!box1.classList.contains("activated")) {
      box1.classList.add("activated");
    }
    box1.classList.toggle("paused");
  } else {
    buttonOne.innerHTML = "Play";
    box1.innerHTML = "Spin me!";
    box1.classList.toggle("paused");
  }
};

