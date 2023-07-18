const badgeView = document.querySelector(".badgeView");
const nameEx = document.querySelector(".nameEx");
const intraName = document.querySelector(".intraName");
const inputIntra = document.querySelector("#intraName");
const colorSelect = document.querySelector("#badgeViewColor");
const inputName = document.querySelector("#name42");
const imgBack = document.querySelector(".imgBack");
const fileBack = document.querySelector("#backgroundFile")
const posXInput = document.getElementById("backX");
const posYInput = document.getElementById("backY");
const autorange = document.getElementById("autorange");


posXInput.addEventListener("input", function(e) {
  e.preventDefault();
  e.stopPropagation();
  const posX = posXInput.value;
  imgBack.style.backgroundPositionX = posX + "%";
});

posYInput.addEventListener("input", function(e) {
  e.preventDefault();
  e.stopPropagation();
  const posY = posYInput.value;
  imgBack.style.backgroundPositionY = posY + "%";
});


fileBack.addEventListener("change", function(event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function() {
      imgBack.style.background = `url("${reader.result}")`;
      autorange.addEventListener("change", () => {
        if (autorange.checked) {
          imgBack.style.backgroundSize = "cover";
          imgBack.style.backgroundRepeat = "no-repeat";
          imgBack.style.backgroundPosition = "center center";
        } else {
          imgBack.style.backgroundRepeat = "initial";
          imgBack.style.backgroundSize = "initial";
        }
      });
    });

    reader.readAsDataURL(file);
  }
});



inputName.addEventListener("input", function() {
  if (inputName.value.lenght > 12){
    console.log("error")
  }
  nameEx.textContent = inputName.value;
});

inputIntra.addEventListener("input", function() {
  if (inputIntra.value.lenght > 45){
    console.log("error")
  }
  intraName.textContent = inputIntra.value;
});