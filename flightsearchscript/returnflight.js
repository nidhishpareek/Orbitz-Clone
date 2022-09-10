/////////STORING TRAVELLERS COUNT BY TOP RIBBON///////////
// import  navbar from '../flightsearchscript/navbar.js';
// document.getElementById("navbarcontainerforflightsearch").innerHTML= navbar();
 
// import  navbar from '../flightsearchscript/navbar.js';
// document.getElementById("navbarcontainerforflightsearch").innerHTML= navbar();
var listofairlines = new Set();
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
var destinationobj = JSON.parse(localStorage.getItem("depature"));
var departingobj = JSON.parse(localStorage.getItem("landing"));
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
//////////////////////////////searchline here
searchflights();
//////////////////////////////////////////////////////
//////////////////////////////////////////////////
///////////////////////////////////////////////////////////

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
function sortingfunction(data) {
  document
    .getElementById("selectsorting")
    .addEventListener("change", () => sortingfunction(data));
  var sortselect = document.getElementById("selectsorting").value;

  if (sortselect == "pricelth") {
    data.sort((a, b) => {
      return a.flight_number - b.flight_number;
    });
  } else if (sortselect == "pricehtl") {
    data.sort((a, b) => {
      return b.flight_number - a.flight_number;
    });
  } else if (sortselect == "departlatest") {
    data.sort((a, b) => {
      return b.dep_time_ts - a.dep_time_ts;
    });
  } else if (sortselect == "departearliest") {
    data.sort((a, b) => {
      return a.dep_time_ts - b.dep_time_ts;
    });
  } else if (sortselect == "durationlth") {
    data.sort((a, b) => {
      return a.duration - b.duration;
    });
  } else if (sortselect == "durationhtl") {
    data.sort((a, b) => {
      return b.duration - a.duration;
    });
  }
  displayresults(data);
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
    listofairlines.add(ele.airline_iata);
    div.addEventListener("click", () => {
      showflight(ele, flighthours, flightmins, dept, arr, price);
    });
    document.getElementById("flightresults").append(div);
  });
  console.log('list is',listofairlines);
  // displayairlines(listofairlines);
}

// function displayairlines(listofairlines) {
//   document.getElementById("airlines").innerHTML = "";
//   listofairlines.map((ele) => {
//     let div = document.createElement("div");
//     // let checkbox = document.createElement("input");
//     // let pr = document.createElement("p");
//     // checkbox.setAttribute("type", "checkbox");
//     // pr.innerText = ele;
//     // pr.setAttribute("class","airlinename")
//     // div.setAttribute("class", "airlinediv")
//     // div.append(checkbox, pr);
//     div.innerHTML= `              <div class="airlinediv">
//     <input type="checkbox">
//     <p class="airlinename">${airline_iata}</p>
//   </div>`
//     document.getElementById("airlines").append(div)
//   });
// }

function showflight(ele, flighthours, flightmins, dept, arr) {
  document.getElementById(
    "exampleModalLabel"
  ).innerText = `${destinationobj.cityName} to ${departingobj.cityName}`;
  document.getElementById(
    "flightdetailsetc"
  ).innerText = `${ele.airline_iata}, ${dateobj.endDate}`;
  document.getElementById(
    "timingincard"
  ).innerHTML = `<p class="deparrtime">${dept.getHours()}:${dept.getMinutes()}-${arr.getHours()}:${arr.getMinutes()}</p>
  <p>${flighthours}Hr ${flightmins} Minutes</p>`;
  document.getElementById(
    "selectedfaircity"
  ).innerText = `Selected Fair to ${destinationobj.cityName}`;
  document.getElementById("price").innerText = `$ ${
    ele.flight_number *
    (travellersobj.adult + travellersobj.child + travellersobj.infant)
  }`;
  document.getElementById(
    "pricefortravellers"
  ).innerText = `${ele.flight_number} roundtrip for 1 traveler`;
  localStorage.setItem("selectedreturningelement", JSON.stringify(ele));
  localStorage.setItem("returnprice", ele.flight_number);
}

function redirect() {
  window.location.href = "../ checkout.html";
}

document.getElementById("signIn").addEventListener("click", myFunction);
function myFunction() {
  var x = document.getElementById("Demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}var object = JSON.parse(localStorage.getItem("userDetails")) || {};

document.getElementById("signIn").innerText = object.firstName;
document.getElementById("userName").innerText = object.firstName;
document.getElementById("emailOfuser").innerText = object.email;
