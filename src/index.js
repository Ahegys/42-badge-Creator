//const badgeView = document.querySelector(".badgeView");
//const colorSelect = document.querySelector("#badgeViewColor");

const posXInput = document.getElementById("backX");

posXInput.addEventListener("input", function(e) {
  e.preventDefault();
  e.stopPropagation();
  const posX = posXInput.value;
  imgBack.style.backgroundPositionX = posX + "%";
});

const posYInput = document.getElementById("backY");

posYInput.addEventListener("input", function(e) {
  e.preventDefault();
  e.stopPropagation();
  const posY = posYInput.value;
  imgBack.style.backgroundPositionY = posY + "%";
});

const fileBack = document.querySelector("#backgroundFile")

fileBack.addEventListener("change", function(event) {
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    
    reader.addEventListener("load", function() {
      imgBack.style.backgroundImage = `url("${reader.result}")`;
    });
    
    reader.readAsDataURL(file);
  }
});

const autorange = document.getElementById("autorange");
const imgBack = document.querySelector(".imgBack");

autorange.addEventListener("change", function() {
  if (autorange.checked) {
    imgBack.style.backgroundSize = "cover";
    imgBack.style.backgroundRepeat = "no-repeat";
    imgBack.style.backgroundPosition = "center center";
  } else {
    imgBack.style.backgroundSize = "initial";
    imgBack.style.backgroundRepeat = "initial";
    imgBack.style.backgroundPosition = "initial";
  }
});


const inputName = document.querySelector("#name42");
const nameEx = document.querySelector(".nameEx");

inputName.addEventListener("input", function() {
  if (inputName.value.lenght > 12){
    console.log("error")
  }
  nameEx.textContent = inputName.value;
});

const inputIntra = document.querySelector("#intraName");
const intraName = document.querySelector(".intraName");

inputIntra.addEventListener("input", function() {
  if (inputIntra.value.lenght > 45){
    console.log("error")
  }
  intraName.textContent = inputIntra.value;
});