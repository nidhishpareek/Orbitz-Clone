var travellersobj = JSON.parse(localStorage.getItem("travellerslist")) || {
  adult: 1,
  child: 0,
  infant: 0,
};
var userDetails = JSON.parse(localStorage.getItem("userDetails"));
var destinationobj = JSON.parse(localStorage.getItem("landing"));
var departingobj = JSON.parse(localStorage.getItem("depature"));
var dateobj = JSON.parse(localStorage.getItem("dates"));
var destflight = JSON.parse(localStorage.getItem("selecteddepartingelement"));
var returnflight = JSON.parse(localStorage.getItem("selectedreturningelement"));
let startdate = dateobj.startDate;
let returndate = dateobj.endDate;

dep_iata = destflight.dep_iata;
arr_iata = destflight.arr_iata;
let destdept = new Date(destflight.dep_time);
let destarr = new Date(destflight.arr_time);

document.getElementById("mail").innerHTML = `${userDetails.email}`
document.getElementById("tickets").innerHTML = `
<p>${
  travellersobj.infant + travellersobj.child + travellersobj.adult
} Tickets</p>
<p>${travellersobj.adult} Adult</p>
<p>${travellersobj.child} Children</p>
<p>${travellersobj.infant} Infant</p>`;

document.getElementById(
  "destination"
).innerHTML = `${destinationobj.cityName} to ${departingobj.cityName}`;

document.getElementById("dateshow").innerHTML = `${startdate}`
document.getElementById("timing").innerHTML= `>${destdept.getHours()}:${destdept.getMinutes()}-${destarr.getHours()}:${destarr.getMinutes()}`
document.getElementById("flightname").innerHTML= `${destflight.airline_iata}  ${destflight.flight_iata}`


document.getElementById("price").innerHTML = `$ ${destflight.flight_number + returnflight.flight_number}`

// document.getElementById("completeBook").addEventListener("click", ()=>{
//   alert("flight booked");
//   // localStorage.setItem("flightbookingstatus", JSON.stringify("confirmed"));

//   // window.location.href='../index.html';

// })
function completed(){
  alert("Flights Booked successfully")
  window.location.href = '../pages/index.html'
}
