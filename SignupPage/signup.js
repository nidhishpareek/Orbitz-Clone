




if(localStorage.getItem("mail")){
  location="login.html"
}
const addData = async () => {
   event.preventDefault();
  var email = document.getElementById("email").value;
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var password = document.getElementById("password").value;
  if (email == "" || firstName == "" || lastName == "" || password == "") {
    alert("Please fill all details")
  }  else if(await check(email)){
    alert("User already exist")
  }

  else {
    var obj = {
      email,
      firstName,
      lastName,
      password,

    }
    console.log(obj)


    fetch("https://orbiz-project.herokuapp.com/user", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      alert("Sign in successfully");
      localStorage.setItem("mail", 1);
    });
   
  
   
}
}

async function check(email){
  var res = await fetch("https://orbiz-project.herokuapp.com/user");
  var res2=await res.json();
  var che=false
 var ans= res2.map((el)=>{
  console.log(el.email)
    if(el.email==email){
      che= true
    }
  });
  console.log(ans)
  return che;

}
 
document.getElementById("signInbutton").addEventListener("click", addData);

document.getElementById("visibility").addEventListener("click",showPassword)
function showPassword(){

  var input=document.getElementById("password");
  if(input.type==="password"){
    input.type="text"
    document.getElementById("visibility").innerText = "visibility_off";
  }else{
    input.type="password"
    document.getElementById("visibility").innerText = "visibility";
  }
}