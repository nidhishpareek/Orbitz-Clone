export const navbarHome=()=>{
    return `<div id="navbar-div">
            <div id="first">
                <div id="logo-nav">
                    <a href="index.html">
                        <img src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2" alt="">
                    </a>
                </div>


                <div id="option">
                    <div>
                        <p>
                            More travel
                        </p>
                        <span class="material-symbols-outlined">
                            arrow_drop_down
                        </span>
                    </div>
                   

                </div>


            </div>
            <div id="last">
                <div>
                    <p>Espanol</p>
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
}