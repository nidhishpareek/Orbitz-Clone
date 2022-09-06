
document.querySelector("body").addEventListener("click",function(){
    document.getElementById("serachItem").style.display = "none";
})
async function  searchData(){
    document.getElementById("serachItem").style.display="flex";
    document.getElementById("serachItem").style.flexDirection="column";
    
var search=document.getElementById("leavingFrom").value;
    var res = await fetch(
      `https://airlabs.co/api/v9/suggest?q=${search}&api_key=57bc2d89-1b13-4d42-829e-5dc8c08c1e19`
    );
    var res2=await res.json();
console.log("kashi")
    appenddata(res2.response.airports);
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
    
    div.innerHTML += `
    <div>
                <div><span class="material-symbols-outlined">
flight
</span></div>
                <div>
                    <div><h4>${res2.response[0].name}(${el.city_code}-${el.name})</h4></div>
                     
                </div>
            </div>
            <hr>`;
  })
}

 