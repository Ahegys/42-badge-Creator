const templateImgs = "/assets/TEMPLATES/Front/";
const templateBack = "/assets/TEMPLATES/Back/";
const themes = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];

const concatenatedPaths = [];

themes.forEach((theme) => {
  const frontPath = templateImgs + theme;
  const backPath = templateBack + theme;
  
  concatenatedPaths.push(frontPath);
  concatenatedPaths.push(backPath);
});

console.log(concatenatedPaths);

const imgBack = document.querySelector(".imgBack");
const imgBackground = document.createElement("img");

imgBackground.src = templateImgs + themes[0];
imgBackground.id = "imgBack";

imgBack.insertBefore(imgBackground, imgBack.firstChild);
console.log(imgBack);

const badgeView = document.querySelector(".badgeView");
const colorSelect = document.querySelector("#badgeViewColor");

const hexToRgba = (hex, alpha) => {
  hex = hex.replace("#", "");
  
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  
  return `rgba("${r}", "${g} ", "${b}", "${alpha}")`;
}

const alphaController = document.querySelector("#alphaControler");
let alphaValue = 0;

alphaController.addEventListener('change', () => {
  alphaValue = alphaController.value / 100.0;
  badgeView.style.backgroundColor = hexToRgba(colorSelect.value, alphaValue);
});

colorSelect.addEventListener('change', () => {
  badgeView.style.backgroundColor = hexToRgba(colorSelect.value, alphaValue);
});

const fileBack = document.querySelector("#backgroundFile")

fileBack.addEventListener("change", function(event) {
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    
    reader.addEventListener("load", function() {
      console.log(reader.result);
      imgBackground.src = reader.result; // Removendo as aspas extras aqui
    });
    
    reader.readAsDataURL(file);
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