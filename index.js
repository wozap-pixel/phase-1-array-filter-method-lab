// Code your solution here
// Function to find matching driver names
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function to find drivers whose names start with specified letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.startsWith(letters));
}

// Function to match driver objects by name
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

// Example usage (optional, can be removed if you don't want to run it directly)
const drivers = [
  'Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'
];

const driverObjects = [
  { name: 'Bobby', hometown: 'Pittsburgh' },
  { name: 'Sammy', hometown: 'New York' },
  { name: 'Sally', hometown: 'Cleveland' },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby', hometown: 'Tampa Bay' }
];

// Testing the functions
console.log(findMatching(drivers, 'Bobby')); // ['Bobby', 'bobby']
console.log(fuzzyMatch(drivers, 'Sa')); // ['Sammy', 'Sally', 'Sarah']
console.log(matchName(driverObjects, 'Bobby')); // [{ name: 'Bobby', hometown: 'Pittsburgh' }, { name: 'Bobby', hometown: 'Tampa Bay' }]
