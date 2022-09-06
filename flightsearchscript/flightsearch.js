/////////STORING TRAVELLERS COUNT BY TOP RIBBON///////////

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
    if (travellersobj.child <6) {
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

