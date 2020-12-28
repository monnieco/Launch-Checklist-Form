// Write your JavaScript code here!
// Launch-Checklist-Form
window.addEventListener("load", function(event) {
   // event.preventDefault();
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         // Add HTML that includes the JSON data
         div.innerHTML = `
         <h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[2].name}</li>
   <li>Diameter: ${json[2].diameter}</li>
   <li>Star: ${json[2].star}</li>
   <li>Distance from Earth: ${json[2].distance}</li>
   <li>Number of Moons: ${json[2].moons}</li>
</ol>
<img src="${json[2].image}">
   `
      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
       
       event.preventDefault();
       let pilotNameInfo = document.querySelector("input[name=pilotName]");
       let copilotNameInfo = document.querySelector("input[name=copilotName]");
       let fuelLevelInfo = document.querySelector("input[name=fuelLevel]");
       let cargoMassInfo = document.querySelector("input[name=cargoMass]");
       const inputArray = [pilotNameInfo,copilotNameInfo, fuelLevelInfo, cargoMassInfo];

   let launchStatus = document.getElementById("launchStatus");
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");



for (let i = 0; i < inputArray.length; i++) {
   if(inputArray[i].value === "") {
      alert("All fields are required");
      preventDefault();
   
   }
}

if (isNaN(inputArray[0].value) == false || isNaN(inputArray[1].value) == false) {
   alert("enter valid name");
   preventDefault();
   
} 


if (isNaN(inputArray[2].value) || isNaN(inputArray[3].value)) {
   alert("enter valid numbers");
   preventDefault();
   
}  

if (Number(inputArray[2].value) < 10000 && Number(inputArray[3].value) > 10000) {
   console.log(typeof inputArray[2].value)
   faultyItems.style.visibility = "visible";
   launchStatus.style.color = "red";
   launchStatus.innerHTML = "shuttle not ready to launch";
   pilotStatus.innerHTML = `pilot ${inputArray[0].value} is ready`
   copilotStatus.innerHTML = `copilot ${inputArray[1].value} is ready`
   fuelStatus.innerHTML = "fuel level is low enough for the launch"
   cargoStatus.innerHTML = "Cargo mass is too heavy for launch"
   
}
if (Number(inputArray[2].value) > 10000 && Number(inputArray[3].value) > 10000) {
   faultyItems.style.visibility = "visible";
   launchStatus.style.color = "red";
   launchStatus.innerHTML = "shuttle not ready to launch";
   pilotStatus.innerHTML = `pilot ${inputArray[0].value} is ready`
   copilotStatus.innerHTML = `copilot ${inputArray[1].value} is ready`
   fuelStatus.innerHTML = "fuel level is high enough for the launch"
   cargoStatus.innerHTML = "Cargo mass is too heavy for launch"  
}
if (Number(inputArray[2].value) < 10000 && Number(inputArray[3].value) < 10000) {
   faultyItems.style.visibility = "visible";
   launchStatus.style.color = "red";
   launchStatus.innerHTML = "shuttle not ready to launch";
   pilotStatus.innerHTML = `pilot ${inputArray[0].value} is ready`
   copilotStatus.innerHTML = `copilot ${inputArray[1].value} is ready`
   fuelStatus.innerHTML = "fuel level is to low for the launch"
   cargoStatus.innerHTML = "Cargo mass is low enough for launch"
}
if (Number(inputArray[2].value) > 10000 && Number(inputArray[3].value) < 10000) {
   faultyItems.style.visibility = "visible";
   launchStatus.style.color = "green";
   launchStatus.innerHTML = "shuttle ready to launch";
   pilotStatus.innerHTML = `pilot ${inputArray[0].value} is ready`
   copilotStatus.innerHTML = `copilot ${inputArray[1].value} is ready`
   fuelStatus.innerHTML = "fuel level is high enough for the launch"
   cargoStatus.innerHTML = "Cargo mass is low enough for launch"
}
   });

});
