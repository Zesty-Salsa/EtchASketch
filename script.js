let button = document.getElementById("changeColors");
let background = document.getElementById("backgroundContainer");
let initialColumns = 16;
let initialRows = 16;
let container = document.querySelector('.container');
container.innerHTML="";

//reset slider value on reload
let slider = document.getElementById("sizeRange");
slider.value = 16;
let output = document.getElementById("resolutionValue");

//display slider value
output.innerHTML = slider.value + " x " + slider.value; 
slider.oninput = function() {
  output.innerHTML = slider.value + " x " + slider.value;  
} 

//returns new number of columns and rows, deletes old divs, creates new divs and makes them sketchable. 
function makeGrid(x, y) { 
  let columns = 'repeat(' + y + ', 1fr)';
  let rows = 'repeat(' + x + ', 1fr)';
  container.style.gridTemplateColumns = columns;
  container.style.gridTemplateRows = rows;  
  let oldBlocks = document.querySelectorAll(".block");
  for (i = 0; i < oldBlocks.length; i++) {
    oldBlocks[i].remove();
  }
  for (i = 0; i < (x * y); i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = 'white';
    div.setAttribute('id', ('div' + i));
    div.setAttribute('class', 'block');
    container.appendChild(div);
  }
  if (button.value=="Klick Me 4 Krazy Kolorz"){
    makeSketchable();
}
  else  if (button.value=="Let\'s Calm Down With The Krazy Kolorz"){
    makeRainbowSketchable();
  } 
  else if (button.value=="Back to Black"){
    makeGreySketchable();
  }
}

//add event listener to grid elements
function makeSketchable(){
  let clearBlocks = document.querySelectorAll(".block");
  for (let i = 0; i < clearBlocks.length; i++) {
      clearBlocks[i].replaceWith(clearBlocks[i].cloneNode(true));
    }
  let sketchBlocks = document.querySelectorAll(".block");
  for (let i = 0; i < sketchBlocks.length; i++) {
    sketchBlocks[i].style.backgroundColor = "white";
    sketchBlocks[i].style.opacity = "0";
    sketchBlocks[i].addEventListener("mouseover", function makeBlack() {
      sketchBlocks[i].style.opacity = 1;
      sketchBlocks[i].style.backgroundColor = "rgba(0, 0, 0, 1)";
    });
  }
}

function makeRainbowSketchable(){
  let clearBlocks = document.querySelectorAll(".block");
  for (let i = 0; i < clearBlocks.length; i++) {
      clearBlocks[i].replaceWith(clearBlocks[i].cloneNode(true));
    }
  let sketchBlocks = document.querySelectorAll(".block");
  for (let i = 0; i < sketchBlocks.length; i++) {
    sketchBlocks[i].style.backgroundColor = "white";
    sketchBlocks[i].style.opacity = "0";
    sketchBlocks[i].addEventListener("mouseover", function makeRainbow() {
      sketchBlocks[i].style.opacity = 1;
      sketchBlocks[i].style.backgroundColor = `hsl(${Math.random() * 360}, 95%, 69%)`;
    });
  }
}

function makeGreySketchable(){
  let clearBlocks = document.querySelectorAll(".block");
  for (let i = 0; i < clearBlocks.length; i++) {
      clearBlocks[i].replaceWith(clearBlocks[i].cloneNode(true));
    }
  let sketchBlocks = document.querySelectorAll(".block");
  for (let i = 0; i < sketchBlocks.length; i++) {
    sketchBlocks[i].style.backgroundColor = "white";
    sketchBlocks[i].style.opacity = "0";
    sketchBlocks[i].addEventListener("mouseover", function makeGrey() {
      var currentOpacity = sketchBlocks[i].style.opacity;
      if (currentOpacity == "") {
        let newOpacity = 0.1;
      }
      else { 
        var newOpacity = Number(currentOpacity) + 0.1;
      }
     sketchBlocks[i].style.opacity = newOpacity;
     sketchBlocks[i].style.backgroundColor = "black";
   });
  }
}

slider.addEventListener("change", function() {
  var value = document.getElementById("sizeRange").value;
  console.log(value);
  makeGrid(value, value);
})


function toggle(button)
{
  if (button.value=="Klick Me 4 Krazy Kolorz"){
   button.value="Let\'s Calm Down With The Krazy Kolorz";
    button.style.background="#808080";
    backgroundContainer.classList.add("rainbow");
    backgroundContainer.classList.remove("default");
    makeRainbowSketchable();
  } 
  else  if (button.value=="Let\'s Calm Down With The Krazy Kolorz"){
   button.value="Back to Black";
    button.style.background="#000000";
    backgroundContainer.classList.add("grey");
    backgroundContainer.classList.remove("rainbow");
    makeGreySketchable();
  }  
  else if (button.value=="Back to Black"){
   button.value="Klick Me 4 Krazy Kolorz";
    button.style.background="linear-gradient(to bottom right, red,orange,yellow,green,blue,indigo,violet)";
    backgroundContainer.classList.add("default");
    backgroundContainer.classList.remove("grey");
    makeSketchable();
  }
}

makeGrid(initialColumns, initialRows);
makeSketchable();