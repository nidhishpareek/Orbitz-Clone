/////////STORING TRAVELLERS COUNT BY TOP RIBBON///////////
// import  navbar from '../flightsearchscript/navbar.js';
// document.getElementById("navbarcontainerforflightsearch").innerHTML= navbar();

var travellersobj = JSON.parse(localStorage.getItem("travellerslist")) || {
  adult: 1,
  child: 0,
  infant: 0,
};
displaytravellers();
function displaytravellers() {
  document.getElementById("adultcount").innerHTML = travellersobj.adult;
  document.getElementById("childrencount").innerHTML = travellersobj.child;
  document.getElementById("infantcount").innerHTML = travellersobj.infant;
}

document.getElementById("adultminus").addEventListener("click", () => {
  if (travellersobj.adult != 0) {
    travellersobj.adult--;
    displaytravellers();
  }
});

document.getElementById("adultplus").addEventListener("click", () => {
  if (travellersobj.adult < 6) {
    travellersobj.adult++;
    displaytravellers();
  }
});

document.getElementById("childrenminus").addEventListener("click", () => {
  if (travellersobj.child != 0) {
    travellersobj.child--;
    displaytravellers();
  }
});

document.getElementById("childrenplus").addEventListener("click", () => {
  if (travellersobj.child < 6) {
    travellersobj.child++;
    displaytravellers();
  }
});

document.getElementById("infantminus").addEventListener("click", () => {
  if (travellersobj.infant != 0) {
    travellersobj.infant--;
    displaytravellers();
  }
});

document.getElementById("infantplus").addEventListener("click", () => {
  if (travellersobj.infant != 6) {
    travellersobj.infant++;
    displaytravellers();
  }
});
/////////////////////////////////////////////////////////////////////
// REAL WORK OF THE FETCH STARTING
var destinationobj = JSON.parse(localStorage.getItem("landing"));
var departingobj = JSON.parse(localStorage.getItem("depature"));
var dateobj = JSON.parse(localStorage.getItem("dates"));

let startdate = dateobj.startDate;
let returndate = dateobj.endDate;

const dateconst = new Date(startdate);
console.log(dateconst); // 👉️ Wed Jun 22 2022

const timestampInMs = dateconst.getTime();
console.log(timestampInMs);
const unixTimestamp = Math.floor(dateconst.getTime() / 1000);
console.log(unixTimestamp);

console.log(destinationobj.cityName, departingobj.cityName);
var data_airlabs = new URLSearchParams({
  api_key: "50fc71e2-d4d6-4d2b-89c3-0e68b04d8d38",
  dep_iata: departingobj.airportCode,
  arr_iata: destinationobj.airportCode,
});
console.log(data_airlabs);
var apiairlabs = `https://airlabs.co/api/v9/schedules?${data_airlabs}`;
//////////////////////searchline here
var sortselect = document.getElementById('selectsorting').value;

console.log(sortselect)
searchflights();
async function searchflights() {
  try {
    var res = await fetch(apiairlabs);
    var ans = await res.json();
    console.log(ans);
    sortingfunction(ans.response);
  } catch (err) {
    console.log("falil", err);
  }
}
function sortingfunction(data){
  document.getElementById('selectsorting').addEventListener("change",()=>sortingfunction(data));
  var sortselect = document.getElementById('selectsorting').value;

  if (sortselect == "pricelth") {
    data.sort((a, b) => {
      return a.flight_number - b.flight_number;
    });
  }
  if(sortselect == 'pricehtl'){
    data.sort((a, b) => {
      return b.flight_number - a.flight_number;
    });
  }
  displayresults(data)
}
function displayresults(data) {
  document.getElementById("flightresults").innerHTML = "";
  data.map((ele) => {
    let div = document.createElement("div");
    let dept = new Date(ele.dep_time);
    let arr = new Date(ele.arr_time);
    console.log(
      dept.getHours(),
      dept.getMinutes(),
      arr.getHours(),
      arr.getMinutes()
    );
    dep_iata = ele.dep_iata;
    arr_iata = ele.arr_iata;

    price = ele.flight_number;
    duration = ele.duration;
    console.log("duration of the flight is ---", duration);
    flighthours = Math.floor(duration / 60);
    flightmins = Math.floor(duration % 60);
    div.setAttribute("class", "d-grid gap-2");
    div.innerHTML = `
    <button
    type="button"
    class="btn btn-default mymodalbtn"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    <div class="panel panel-default flightresult">
      <div class="timing">
        <p class="deparrtime">${dept.getHours()}:${dept.getMinutes()}-${arr.getHours()}:${arr.getMinutes()}</p>
        <p class="traveldestinations">${dep_iata}-${arr_iata}</p>
        <p class="multipleplanes">
          <span
            ><img
              class="flightlogoinresults"
              src="https://previews.123rf.com/images/veronawinner/veronawinner1904/veronawinner190400005/124104248-plane-line-icon-isolated-on-white-background-airplane-symbol-in-flat-style-airplane-sign-abstract-pl.jpg"
              alt=""
          /></span>
          Multiple Airlines
        </p>
      </div>
      <div class="duration"><p>${flighthours}Hr ${flightmins} Minutes</p></div>
      <div class="pricing">
        <div class="price">$ ${price}</div>
        <div class="triptyperesult">Roundtrip per traveler</div>
        <div class="promo">
          <span
            ><img
              class="flightlogoinresults makecircle"
              src="https://www.kindpng.com/picc/m/94-949916_airplane-wing-clip-art-vehicle-black-and-white.png"
              alt="footballlogo"
          /></span>
          Earn ${price / 100} Orbucks
        </div>
      </div>
    </div>
  </button>`;
    div.addEventListener("click", () => {
      showflight(ele, flighthours, flightmins, dept, arr);
    });
    document.getElementById("flightresults").append(div);
  });
}

function showflight(ele, flighthours, flightmins, dept, arr) {
  document.getElementById(
    "exampleModalLabel"
  ).innerText = `${destinationobj.cityName} to ${departingobj.cityName}`;
  document.getElementById(
    "flightdetailsetc"
  ).innerText = `${ele.airline_iata}, ${dateobj.startDate}`;
  document.getElementById(
    "timedurationdiv"
  ).innerHTML = `<p class="deparrtime">${dept.getHours()}:${dept.getMinutes()}-${arr.getHours()}:${arr.getMinutes()}</p>
  <p>${flighthours}Hr ${flightmins} Minutes</p>`;
  document.getElementById(
    "selectedfaircity"
  ).innerText = `Selected Fair to ${destinationobj.cityName}`;
  document.getElementById("price").innerText = `$ ${
    price * (travellersobj.adult + travellersobj.child + travellersobj.infant)
  }`;
  document.getElementById(
    "pricefortravellers"
  ).innerText = `${price} roundtrip for 1 traveler`;
  localStorage.setItem("selecteddepartingelement", JSON.stringify(ele));
  localStorage.setItem("departprice", price);
}
