// import { navbar } from "../component/navbar.js";

import { footer } from "../component/footer.js";

// import BasicDateRangePicker from "../component/datePicker.js";

// document.getElementById("navbar").innerHTML=navbar();
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "37786ebe2dmsh7eda76455f3e90cp1f646ajsn5b14ca20587f",
//     "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://hotels4.p.rapidapi.com/locations/v2/search?query=delhi&locale=en_US&currency=USD",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
 
//  const autocomplete = new gmaps.places.Autocomplete(addressInput, {}); // {types: ['address']}
// autocomplete.setFields(['address_component','formatted_address','vicinity']);

// autocomplete.addListener('place_changed', () => {
//     let place = autocomplete.getPlace();

//     if (place.address_components && place.address_components.length) {
//         console.log(JSON.stringify(place, null, 2))
//     }
// }


// BasicDateRangePicker;
 
 document.getElementById("footer").innerHTML=footer();
 
const changeDiv=()=>{
    document.getElementById("search").style.display="none"
      
      
     document.getElementById("Packages").style.display = "none";
    document.getElementById("flightBox").style.display="flex"
    document.getElementById("thingsTodo").style.display = "none";
    document.getElementById("Cruies").style.display = "none";
     document.getElementById("carRenetel").style.display = "none";
    document.getElementById("flightBox").style.flexDirection = "column";
    console.log("lashi")
}
document.getElementById("flight").addEventListener("click",changeDiv);
const changeStay = () => {
  document.getElementById("flightBox").style.display = "none";
   document.getElementById("thingsTodo").style.display = "none";
   document.getElementById("Cruies").style.display = "none";
   document.getElementById("Packages").style.display = "none";
  document.getElementById("search").style.display = "flex";
 
   
  document.getElementById("carRenetel").style.display = "none";
  document.getElementById("search").style.flexDirection = "column";
};
document.getElementById("stay").addEventListener("click", changeStay);
const changeCar = () => {
  document.getElementById("flightBox").style.display = "none";
    document.getElementById("search").style.display = "none";
     
     document.getElementById("Cruies").style.display = "none";
     document.getElementById("Packages").style.display = "none";
     document.getElementById("thingsTodo").style.display = "none";
 
  document.getElementById("carRenetel").style.display = "flex";
  document.getElementById("carRenetel").style.flexDirection = "column";
};

document.getElementById("Cars").addEventListener("click", changeCar);
const changePackge = () => {
  document.getElementById("flightBox").style.display = "none";
  document.getElementById("search").style.display = "none";
  document.getElementById("carRenetel").style.display = "none";
   
  document.getElementById("Cruies").style.display = "none";
  document.getElementById("thingsTodo").style.display = "none";
  
  document.getElementById("Packages").style.display = "flex";
  document.getElementById("Packages").style.flexDirection = "column";
};

document.getElementById("Package").addEventListener("click", changePackge);
const changeTodo = () => {
  document.getElementById("flightBox").style.display = "none";
  document.getElementById("search").style.display = "none";
  document.getElementById("carRenetel").style.display = "none";
//   document.getElementById("thingsTodo").style.display = "none";
  document.getElementById("Cruies").style.display = "none";
    document.getElementById("Packages").style.display = "none";
   
  document.getElementById("thingsTodo").style.display = "flex";
  document.getElementById("thingsTodo").style.flexDirection = "column";
};

document.getElementById("toDo").addEventListener("click", changeTodo);
const changeCruies = () => {
  document.getElementById("flightBox").style.display = "none";
  document.getElementById("search").style.display = "none";
  document.getElementById("carRenetel").style.display = "none";
  document.getElementById("thingsTodo").style.display = "none";
   document.getElementById("Packages").style.display = "none";
  
  document.getElementById("Cruies").style.display = "flex";
  document.getElementById("Cruies").style.flexDirection = "column";
};

document.getElementById("crusies").addEventListener("click", changeCruies);


document.getElementById("signIn").addEventListener("click",myFunction);
 function myFunction() {
   var x = document.getElementById("Demo");
   if (x.className.indexOf("w3-show") == -1) {
     x.className += " w3-show";
   } else {
     x.className = x.className.replace(" w3-show", "");
   }
 }


 