
document.querySelector("body").addEventListener("click",function(){
    document.getElementById("serachItem").style.display = "none";
    document.getElementById("landingDiv").style.display = "none";
})
async function  searchData(){
   
    
var search=document.getElementById("leavingFrom").value;
if(search==""){
    document.getElementById("serachItem").style.display = "none";
}else{
     document.getElementById("serachItem").style.display = "flex";
     document.getElementById("serachItem").style.flexDirection = "column";
    var res = await fetch(
      `https://airlabs.co/api/v9/suggest?q=${search}&api_key=57bc2d89-1b13-4d42-829e-5dc8c08c1e19`
    );
    var res2=await res.json();
console.log("kashi")
    appenddata(res2.response.airports);
}
}


var printIt=debounch(searchData,1000);
console.log(printIt())
function debounch(fn,delay){
    let timeid;
    return function(){
        clearTimeout(timeid);
        timeid=setTimeout(function(){
            fn();
        },delay)
    }
}
document.getElementById("leavingFrom").addEventListener("input", printIt);

function appenddata(data){
  var div=  document.getElementById("serachItem");
  div.innerText="";
  data.map(async(el)=>{
    var res = await fetch(
      `https://airlabs.co/api/v9/cities?city_code=${el.city_code}&api_key=57bc2d89-1b13-4d42-829e-5dc8c08c1e19`
    );
    var res2=await res.json();
    var div1=document.createElement("div");
    div1.addEventListener("click",function(){
        sendData(el,res2.response[0].name);
    });
    var div2=document.createElement("div");
    
    div2.innerHTML = `<span class="material-symbols-outlined">
flight
</span>`;
   var div3 = document.createElement("div");

   var div4 = document.createElement("div");
   var h4 = document.createElement("h4");
 var hr = document.createElement("hr");
 h4.innerText = `${res2.response[0].name}(${el.city_code}-${el.name})`;
   div4.append(h4);
   div3.append(div4);
   div1.append(div2,div3);

  
   div.append(div1,hr);
 
  })
}
async function searchDataLanding() {
  var search = document.getElementById("goingTo").value;
  if (search == "") {
    document.getElementById("landingDiv").style.display = "none";
  } else {
    document.getElementById("landingDiv").style.display = "flex";
    document.getElementById("landingDiv").style.flexDirection = "column";
    var res = await fetch(
      `https://airlabs.co/api/v9/suggest?q=${search}&api_key=57bc2d89-1b13-4d42-829e-5dc8c08c1e19`
    );
    var res2 = await res.json();
    console.log("kashi");
    appenddata2(res2.response.airports);
  }
}

var printIt2 = debounch(searchDataLanding, 1000);
// console.log(printIt());
function debounch2(fn, delay) {
  let timeid;
  return function () {
    clearTimeout(timeid);
    timeid = setTimeout(function () {
      fn();
    }, delay);
  };
}
document.getElementById("goingTo").addEventListener("input", printIt2);

function appenddata2(data) {
  var div = document.getElementById("landingDiv");
  div.innerText = "";
  data.map(async (el) => {
    var res = await fetch(
      `https://airlabs.co/api/v9/cities?city_code=${el.city_code}&api_key=57bc2d89-1b13-4d42-829e-5dc8c08c1e19`
    );
    var res2 = await res.json();
    var div1 = document.createElement("div");
    div1.addEventListener("click", function () {
      sendData2(el, res2.response[0].name);
    });
    var div2 = document.createElement("div");

    div2.innerHTML = `<span class="material-symbols-outlined">
flight
</span>`;
    var div3 = document.createElement("div");

    var div4 = document.createElement("div");
    var h4 = document.createElement("h4");
    var hr = document.createElement("hr");
    h4.innerText = `${res2.response[0].name}(${el.city_code}-${el.name})`;
    div4.append(h4);
    div3.append(div4);
    div1.append(div2, div3);

    div.append(div1, hr);
  });
}



function sendData(el,name){
    document.getElementById("leavingFrom").value=`${name}(${el.city_code}-${el.name})`;
     var objDeparture={
        cityName:name,
        airportCode:el.city_code,
        airportName:el.name
     }

     localStorage.setItem("depature",JSON.stringify(objDeparture))
     

}
function sendData2(el,name){
    document.getElementById("goingTo").value=`${name}(${el.city_code}-${el.name})`;
     
      var objlanding = {
        cityName: name,
        airportCode: el.city_code,
        airportName: el.name,
      };

      localStorage.setItem("landing", JSON.stringify(objlanding));
     

}


document.getElementById("searchButton").addEventListener("click",function(){
var startDate = document.getElementById("startDate").value;
var endDate=document.getElementById("endDate").value;

  var objDate={
    startDate,
    endDate
  }
  localStorage.setItem("dates",JSON.stringify(objDate));

});
 
 

 
 