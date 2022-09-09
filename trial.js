//https://api.aviationstack.com/v1/flights?access_key=9425c7972d6f0ddc2f9b5fbfe05d0b94
// dep_iata

// `https://airlabs.co/api/v9/flights?${data}` api_key:'50fc71e2-d4d6-4d2b-89c3-0e68b04d8d38',
// https://airlabs.co/api/v9/flights?api_key=50fc71e2-d4d6-4d2b-89c3-0e68b04d8d38
// var data = new URLSearchParams({
//   api_key:'50fc71e2-d4d6-4d2b-89c3-0e68b04d8d38',
//   dep_iata : 'DXB',

//   arr_iata: 'DEL',


//`https://airlabs.co/api/v9/schedules?${data_airlabs}`
var data_airlabs = new URLSearchParams({
  api_key:'50fc71e2-d4d6-4d2b-89c3-0e68b04d8d38',
  dep_iata : 'DXB',
  arr_iata: 'DEL',
});
var data_aviation = new URLSearchParams({
  access_key:'9425c7972d6f0ddc2f9b5fbfe05d0b94',
  dep_iata : 'DXB',
  arr_iata: 'DEL',
});
var apiairlabs = `https://airlabs.co/api/v9/schedules?${data_airlabs}`;
var aviationstack = `http://api.aviationstack.com/v1/flights?${data_aviation}`;
show()
async function show() {
    try{
  var res = await fetch(apiairlabs);
  var ans = await res.json();
  console.log(ans)
}
catch(err){
    console.log("falil",err)
}
}
