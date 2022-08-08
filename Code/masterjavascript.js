
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navBar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
/*Toggle text makes contact info on home page appear and disapear*/
 function toggleText() {
    var contactInfo = document.getElementById("contactUs");
    if (text.style.display === "none") {
    text.style.display = "block"; 
    } else {
    text.style.display = "none"; 
    }
  }

  /*Dark/Light Mode Settings*/
function storeDisplaySetting(lightOrDark){
  localStorage.removeItem('displaySetting');
  localStorage.setItem('displaySetting', lightOrDark);
  console.log(localStorage.getItem('displaySetting'))
}

function storeFontSetting(fontSize){
  localStorage.removeItem('fontSetting');
  localStorage.setItem('fontSetting', fontSize);
  console.log(localStorage.getItem('fontSetting'))
}


function changeDisplaySetting(){
  var lightOrDark = localStorage.getItem('displaySetting');
  console.log("Changing display to: " + lightOrDark);
  if (lightOrDark == "Dark"){
    setDarkMode();
  }
  else{
    setLightMode();
  }
}

function setDarkMode(){
//   TURN ON DARK MODE
document.body.style.backgroundColor = "black";
document.body.style.color = "white";
}

function setLightMode(){
  //   TURN ON DARK MODE
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  }

/*Open Dyselxic Font options*/
function storeFontChange(dyslexicFont) {
  localStorage.removeItem('fontChange');
  localStorage.setItem('fontChange', dyslexicFont);
  console.log(localStorage.getItem('fontChange'))
}

function changeFontChange() {
  var dyslexicFont = localStorage.getItem('fontChange');
  console.log("Changing font to: " + dyslexicFont);
  if (dyslexicFont == "open-dyslexic") {
    setDyslexicFont();
  }
  else 
  {
    setDefaultFont();
  }
}

function setDyslexicFont() {
  document.body.style.fontFamily = "OpenDyslexicMonoRegular";
}

function setDefaultFont() {
  document.body.style.fontFamily = "Open Sans";
}

  // Use this to make all of the Accessibility Changes that you want to happen
window.onload = function() {
  console.log("window loaded");
  changeDisplaySetting();
  changeTextSize();
  changeFontChange();
}

function changeTextSize(){
  size = localStorage.getItem('fontSetting');
  console.log("The size is " + size);
  if (size == "small"){
    var text = document.getElementsByTagName("*");
    for (var i = 0; i < text.length; i++) {
      text[i].style.fontSize = "90%";
    }
    }
  else if (size == "mid"){
    var text = document.getElementsByTagName("*");
    for (var i = 0; i < text.length; i++) {
      text[i].style.fontSize = "100%";
    }
  }
  else if (size == "large"){
    var text = document.getElementsByTagName("*");
  for (var i = 0; i < text.length; i++) {
    text[i].style.fontSize = "110%";
  }
  }
}