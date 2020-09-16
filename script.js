// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener('load', function(){
   let missionTarget = document.getElementById("missionTarget")
   let URL = "https://handlers.education.launchcode.org/static/planets.json"
   fetch(URL).then(function(response){
      response.json().then(function(json){
         missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}"> `
         debugger

      })
   })
   let pilotName = document.getElementById('pilotName');
   let copilotName = document.querySelector('input[name=copilotName]');
   let fuelLevel = document.querySelector('input[name=fuelLevel]');
   let cargoMass = document.querySelector('input[name=cargoMass]');

   let pilotStatus = document.getElementById('pilotStatus');
   let copilotStatus = document.getElementById('copilotStatus')
   let fuelStatus = document.getElementById('fuelStatus');
   let cargoStatus = document.getElementById('cargoStatus');
   let launchStatus = document.getElementById("launchStatus")

   let formSubmit = document.getElementById('formSubmit');
   formSubmit.addEventListener('click', function(){
      let pilotNameValue = pilotName.value;
      let copilotNameValue = copilotName.value;
      let fuelLevelValue = fuelLevel.value;
      let cargoMassValue = cargoMass.value;
      if(!pilotNameValue || !copilotNameValue || !fuelLevelValue || !cargoMassValue){
         alert (`All fields are required!`)
         event.preventDefault()
      }
      else if (!isNaN(Number(pilotNameValue)) || !isNaN(Number(copilotNameValue)) || isNaN(Number(fuelLevelValue)) || isNaN(Number(cargoMassValue))){
         alert(`Please enter valid information or each field!`);
         event.preventDefault();
      }
      else if (pilotNameValue & copilotNameValue){
         pilotStatus.innerHTML = `${pilotNameValue} is ready for launch`;
         copilotStatus.innerHTML = `${copilotNameValue} is ready for launch`;
      }else if (Number(fuelLevelValue) < 10000){
            launchStatus.innerHTML="Shuttle not ready for launch"; 
            launchStatus.style.color = 'red';
            displayInfo =document.getElementById('faultyItems');
            displayInfo.style.visibility = 'visible'
            fuelStatus.innerHTML = `Fuel level is too low`;
            event.preventDefault();
         }
         else if (Number(cargoMassValue) > 10000){
            cargoStatus.innerHTML = `Cargo mass low enough for launch.`;
            event.preventDefault();
         }
         else{
            launchStatus.innerHTML="Shuttle is ready for launch"; 
            event.preventDefault()
         }
       
      

   })
})