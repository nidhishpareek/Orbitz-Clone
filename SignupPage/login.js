
document.querySelector("form").addEventListener("submit", getToken);
async function getToken(){
event.preventDefault();
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;


    var obj={
        email,
        password,
    }

console.log(obj)
    var res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var res2=await res.json();
    console.log(res2);


}
