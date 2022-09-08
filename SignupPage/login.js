
document.querySelector("form").addEventListener("submit", getToken);
if(localStorage.getItem("login")){
 location.href="../Pages/homePage.html"
}
async function getToken(){
 event.preventDefault();
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

   if (email == "" || firstName == "" || lastName == "" || password == "") {
     alert("Please fill all details");
   } else{
   
    var res = await fetch("http://localhost:3000/user");
   
    var res2=await res.json();
    var flag=false
    res2.map(el=>{
      if(el.email==email&&el.password==password){
          flag=true;
          localStorage.setItem("userDetails",JSON.stringify(el));
      }
    })

    if(flag){
      alert("login successfully")
      localStorage.setItem("login",1);
       location.href = "../Pages/homePage.html";
      
    }else{
      alert("Wrong creadintial")
    }
  }


}
document.getElementById("visibility").addEventListener("click", showPassword);
function showPassword() {
  var input = document.getElementById("password");
  if (input.type === "password") {
    input.type = "text";
    document.getElementById("visibility").innerText = "visibility_off";
  } else {
    input.type = "password";
    document.getElementById("visibility").innerText = "visibility";
  }
}
