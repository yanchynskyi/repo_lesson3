let carFuelDiesel = "diesel";
let carFuelGas = "gas";
let carSizeXl = "Xl";
let carSizeL = "L";
let carSizeM = "M";
let carSizeS = "S";

function myFunc(carFuel = "diesel", carSize = "XL") {
  console.log(`Refueling for ${carSize} car with ${carFuel} fuel.`);
}

//XL + diesel
myFunc(carFuelDiesel, carSizeXl);

//L + gas
myFunc(carFuelGas, carSizeL);

//M + diesel
myFunc(carFuelDiesel, carSizeM);

//S + gas
myFunc(carFuelGas, carSizeS);

//by default
myFunc();
