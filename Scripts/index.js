import { navbar } from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navbar();
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "37786ebe2dmsh7eda76455f3e90cp1f646ajsn5b14ca20587f",
    "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  },
};

fetch(
  "https://hotels4.p.rapidapi.com/locations/v2/search?query=delhi&locale=en_US&currency=USD",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));