

 

    

const addData=async()=>{
    event.preventDefault();
      var email = document.getElementById("email").value;
      var firstName = document.getElementById("firstname").value;
      var lastName = document.getElementById("lastname").value;
      var password = document.getElementById("password").value;
      if(email==""||firstName==""||lastName==""||password==""){
        alert("Please fill all details")
      }
      
else{
      var obj={
        email,
        firstName,
        lastName,
        password,

      }
      console.log(obj)
     

      var res = await fetch("http://masai-api-mocker.herokuapp.com/auth/register",{
        method:"POST",
        body: JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
      });
      var res2=await res.json();
      console.log(res);
    }

}
document.getElementById("signInbutton").addEventListener("click", addData);