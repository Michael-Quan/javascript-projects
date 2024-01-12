// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:06:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 1; //This represents 100%
let weatherStatus = "Clear";
let preparedForLiftOff = true; //Logic will change this

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    preparedForLiftOff =false;
}

// add logic below to verify all astronauts are ready
if (astronautStatus !== "ready") {
    preparedForLiftOff = false;
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > maximumMassLimit) {
    preparedForLiftOff = false; 
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > maximumFuelTemp || fuelTempCelsius < minimumFuelTemp) { // logic operator
    preparedForLiftOff = false;
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel < 1) {
    preparedForLiftOff = false;
}

// add logic below to verify the weather status is clear
if (weatherStatus !== "Clear") {
    preparedForLiftOff = false;
}

// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff) { //print report
console.log("All systems are a go! Initiating space shuttle launch sequence");
console.log("______________________________________________________________"); // Should print underscored line
console.log("Date: " + date);  // Spaced Specifically in order to include date and variable when printed
console.log("Time: " + time);
console.log("Astronaut Count: " + astronautCount);
console.log("Crew Mass: " + crewMassKg);
console.log("Fuel Mass: " + fuelMassKg);
console.log("Shuttle Mass: " + shuttleMassKg);
console.log("Total Mass: " + totalMassKg);
console.log("Fuel Temperature: " + fuelTempCelsius);
console.log("Weather Status: " + weatherStatus);
console.log("_______________________________________________________________");
console.log("Have a safe trip astronauts!");
} else {  // print a different result
console.log("Specifications not met. Launch canceled");
}