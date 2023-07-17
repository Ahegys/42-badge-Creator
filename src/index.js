const badgeView = document.querySelector(".badgeView");
const nameEx = document.querySelector(".nameEx");
const intraName = document.querySelector(".intraName");
const inputIntra = document.querySelector("#intraName");
const colorSelect = document.querySelector("#badgeViewColor");
const inputName = document.querySelector("#name42");

intraName.textContent = "Intra";

colorSelect.addEventListener("change", function() {
    badgeView.style.backgroundColor = colorSelect.value;
});

inputName.addEventListener("change", function() {
    nameEx.textContent = inputName.value;
});

inputIntra.addEventListener("change", function() {
    intraName.textContent = inputIntra.value;
});
