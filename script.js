// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    })

   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";

   let launchChecklistForm = document.querySelector("form");
   launchChecklistForm.addEventListener("submit", function() {
    event.preventDefault();
    let pilotNameTextBox = document.querySelector("input[name=pilotName]");
    let pilotNameInput = pilotNameTextBox.value;
    let copilotNameTextBox = document.querySelector("input[name=copilotName]");
    let copilotNameInput = copilotNameTextBox.value;
    let fuelLevelTextBox = document.querySelector("input[name=fuelLevel]");
    let fuelLevelInput = fuelLevelTextBox.value;
    let cargoMassTextBox = document.querySelector("input[name=cargoMass]");
    let cargoMassInput = cargoMassTextBox.value;
    formSubmission(document, list, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
   });
});