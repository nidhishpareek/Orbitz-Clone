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
var destinationobj = JSON.parse(localStorage.getItem("")) || {};
var departingobj = JSON.parse(localStorage.getItem("")) || {};
// var datestr = JSON.parse(localStorage.getItem("")) || {}
var dateStr = "2022-9-9";
const dateconst = new Date(dateStr);
console.log(dateconst); // 👉️ Wed Jun 22 2022

const timestampInMs = dateconst.getTime();

const unixTimestamp = Math.floor(dateconst.getTime() / 1000);
console.log(unixTimestamp);

var data_airlabs = new URLSearchParams({
  api_key: "50fc71e2-d4d6-4d2b-89c3-0e68b04d8d38",
  dep_iata: departingobj.code,
  arr_iata: destinationobj.code,
});

var apiairlabs = `https://airlabs.co/api/v9/flights?${data_airlabs}`;
searchflights();
async function searchflights() {
  try {
    var res = await fetch(apiairlabs);
    var ans = await res.json();
    console.log(ans);
    displayresults(ans);
  } catch (err) {
    console.log("falil", err);
  }
}

function displayresults(data) {
  document.getElementById("flightresults").innerHTML = "";
  data.map((ele) => {
    let div = document.createElement("div");
    dept = departingobj.place;
    arr = destinationobj.place;
    dep_iata = ele.dep_iata;
    arr_iata = ele.arr_iata;
    price = ele.flight_number;
    div.innerHTML = `
    <button
    type="button"
    class="btn btn-default mymodalbtn"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    <div class="panel panel-default flightresult">
      <div class="timing">
        <p class="deparrtime">${dept}-${$arr}</p>
        <p class="traveldestinations">${dept_iata}-${$arr_iata}</p>
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
      <div class="duration"></div>
      <div class="pricing">
        <div class="price">${price}</div>
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
  });
}
