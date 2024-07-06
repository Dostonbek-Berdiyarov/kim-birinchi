var elForm = document.querySelector("#js-form"),
  elInput = elForm.querySelector("#js-input"),
  elOutputOne = document.querySelector("#js-output-one"),
  elOutputTwo = document.querySelector("#js-output-two"),
  elOutputThree = document.querySelector("#js-output-three"),
  elOutputFour = document.querySelector("#js-output-four");
var manSpeed = 3.6,
  bikeSpeed = 20.1,
  carSpeed = 70,
  planeSpeed = 800;

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (+elInput.value <= 0) {
    alert("0 dan katta son kiriting");
  } else {
    function hour(speed) {
      return Math.floor(+elInput.value / speed);
    }
    function minut(speedInMinut, firstSpeed) {
      return Math.round(
        (+elInput.value / speedInMinut - Math.floor(hour(firstSpeed))) * 60
      );
    }

    elOutputOne.textContent = `${hour(manSpeed)} soat 
    ${minut(manSpeed, manSpeed)} minut`;
    elOutputTwo.textContent = `${hour(bikeSpeed)} soat 
    ${minut(bikeSpeed, bikeSpeed)} minut`;
    elOutputThree.textContent = `${hour(carSpeed)} soat 
    ${minut(carSpeed, carSpeed)} minut`;
    elOutputFour.textContent = `${hour(planeSpeed)} soat 
    ${minut(planeSpeed, planeSpeed)} minut`;
  }
});
