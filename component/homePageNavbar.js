export const navbarHome = () => {
  return `<div id="navbar-div">
            <div id="first">
                <div id="logo-nav">
                    <a href="index.html">
                        <img src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2" alt="">
                    </a>
                </div>

<nav class="navbar navbar-expand-md navbar-light bg-light" id="bg-light">
  <div class="container">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" style="background-color: #00253c;color:white; font-size: 13.125px; border: none;margin-left:20px" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More option
          </a>
          <!-- Here's the magic. Add the .animate and .slideIn classes to your .dropdown-menu and you're all set! -->
          <div class="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
            <div style="display: flex; padding:0px 10px; align-items: center">
          <span class="material-symbols-outlined"> apartment </span
          ><a style="padding: 10px 12px" class="dropdown-item" href="#">Stay</a>
        </div>
        <div style="display: flex; padding:0px 10px; align-items: center">
          <span class="material-symbols-outlined"> flight </span
          ><a style="padding: 10px 12px" class="dropdown-item" href="#"
            >Flight</a
          >
        </div>
        <div style="display: flex; padding:0px 10px; align-items: center">
          <span class="material-symbols-outlined">
            <span class="material-symbols-outlined"> luggage </span> </span
          ><a style="padding: 10px 12px" class="dropdown-item" href="#"
            >Packages</a
          >
        </div>
        <div style="display: flex; padding:0px 10px; align-items: center">
          <span class="material-symbols-outlined">
            <span class="material-symbols-outlined">
              directions_car
            </span> </span
          ><a style="padding: 10px 12px" class="dropdown-item" href="#">Cars</a>
        </div>
        <div style="display: flex; padding:0px 10px; align-items: center">
          <span class="material-symbols-outlined">
            <span class="material-symbols-outlined">
              directions_boat
            </span> </span
          ><a style="padding: 10px 12px" class="dropdown-item" href="#"
            >Cruies</a
          >
        </div>
        <div style="display: flex; padding:0px 10px; align-items: center">
          <span class="material-symbols-outlined">
            <span class="material-symbols-outlined">
              local_activity
            </span> </span
          ><a style="padding: 10px 12px" class="dropdown-item" href="#"
            >Things to do</a
          >
        </div>
        <div style="display: flex; padding:0px 10px; align-items: center">
          <a style="padding: 10px 12px" class="dropdown-item" href="#">Deals</a>
        </div>
        <div style="display: flex; padding:0px 10px; align-items: center">
          <a style="padding: 10px 12px" class="dropdown-item" href="#"
            >Groups and meetings</a
          >
        </div>
        <div style="display: flex; padding:0px 10px; align-items: center">
          <a style="padding: 10px 12px" class="dropdown-item" href="#"
            >Travel Blog</a
          >
        </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
                


            </div>
            <div id="last">
                <div>
                    <p id="lang">Espanol</p>
                </div>
                <div>
                    <a href="">List your property</a>
                </div>
                <div>
                    <a href="">Support</a>
                </div>
                <div>
                    <a href="">Trips</a>
                </div>
                <div class="w3-dropdown-click w3-right">
                    <button class="w3-button w3-transferent" id="signIn"></button>
                    <div id="Demo" class="indexPageSignIn w3-dropdown-content w3-bar-block w3-card-4 w3-animate-zoom"
                        style="right:0">
                        <div id="account">
                            <h2 class="homePage">Hi, <span id="userName"></span></h2>
                            <p><span id="emailOfuser"></span></p>
                            <button>Silver Member</button>
                            <p class="bucks">$0.00</p>
                            <p>Orbucks</p>
                        </div>
                        <div>
                            <p style="color: #007E8F;">Account</p>
                            <p style="color: #007E8F;">List of favorites</p>
                            <p>Feedback</p>
                            <hr>
                            <p style="color: #007E8F;" id="signOut">Sign out</p>
                        </div>

                    </div>
                </div>


            </div>`;
};
