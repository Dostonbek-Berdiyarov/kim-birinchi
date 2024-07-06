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
var manInHour = null,
  bikeInHour = null,
  carInHour = null,
  planeInHour = null,
  manInMinut = null,
  bikeInMinut = null,
  carInMinut = null,
  planeInMinut = null;

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (+elInput.value <= 0) {
    alert("0 dan katta son kiriting");
  } else {
    manInHour = Math.floor(+elInput.value / manSpeed);
    bikeInHour = Math.floor(+elInput.value / bikeSpeed);
    carInHour = Math.floor(+elInput.value / carSpeed);
    planeInHour = Math.floor(+elInput.value / planeSpeed);
    manInMinut = Math.round(
      (+elInput.value / manSpeed - Math.floor(manInHour)) * 60
    );
    bikeInMinut = Math.round(
      (+elInput.value / bikeSpeed - Math.floor(bikeInHour)) * 60
    );
    carInMinut = Math.round(
      (+elInput.value / carSpeed - Math.floor(carInHour)) * 60
    );
    planeInMinut = Math.round(
      (+elInput.value / planeSpeed - Math.floor(planeInHour)) * 60
    );

    elOutputOne.textContent = `${manInHour} soat 
    ${manInMinut} minut`;
    elOutputTwo.textContent = `${bikeInHour} soat 
    ${bikeInMinut} minut`;
    elOutputThree.textContent = `${carInHour} soat 
    ${carInMinut} minut`;
    elOutputFour.textContent = `${planeInHour} soat 
    ${planeInMinut} minut`;
  }
});
