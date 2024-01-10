// Declare and assign the variables below
let SpaceShuttle;
SpaceShuttle = "Determination";

let ShuttleSpeedMPH;
ShuttleSpeedMPH = "17500";

let DistanceMarsKM;
DistanceMarsKM = "225000000";

let DistanceMoonKM;
DistanceMoonKM = "384400";

const MilesPerKilometer = ".621";

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof SpaceShuttle);
console.log(typeof ShuttleSpeedMPH);
console.log(typeof DistanceMarsKM);
console.log(typeof DistanceMoonKM);
console.log(typeof MilesPerKilometer);
// Calculate a space mission below
let milesToMars = DistanceMarsKM * MilesPerKilometer;
console.log(225000000 * .621); // milesToMars = 139725000
let hoursToMars = milesToMars / ShuttleSpeedMPH;
console.log(139725000 / 17500); // hoursToMars = 7984.285714285715
let daysToMars = hoursToMars / 24;
console.log(7984.285714285715 / 24); // daysToMars = 332.67857142857144
// Print the results of the space mission calculations below
console.log("Determination will take 332.67857142857144 days to reach Mars.");
// Calculate a trip to the moon below
let milesToMoon = DistanceMoonKM * MilesPerKilometer;
console.log(DistanceMoonKM * ShuttleSpeedMPH); // milesToMoon = 6727000000
let hoursToMoon = milesToMoon / ShuttleSpeedMPH;
console.log(milesToMoon / ShuttleSpeedMPH); // hoursToMoon = 13.64070867142857
let daysToMoon = hoursToMoon / 24;
console.log(hoursToMoon / 24); // daysToMoon = .5683628571428571
// Print the results of the trip to the moon below
console.log("Determination will take .5683628571428571 days to reach the Moon.");