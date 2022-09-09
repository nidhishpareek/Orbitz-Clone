export const navbar = () => {
  return `
     <div id="navbar-div">
            <div id="first">
             <div id="logo-nav">
            <a href="index.html">
                <img src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2" alt="">
            </a>
             </div>
             <div id="option">
               <p>
                More travel 
               </p>
              <span class="material-symbols-outlined">
arrow_drop_down
</span>
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
                <div class="w3-dropdown-click">
    <button onclick="myFunction()" class="w3-button w3-black">Sign in</button>
    <div id="Demo" class="w3-dropdown-content w3-bar-block w3-card-4 w3-animate-zoom">
      <a href="#" class="w3-bar-item w3-button">Link 1</a>
      <a href="#" class="w3-bar-item w3-button">Link 2</a>
      <a href="#" class="w3-bar-item w3-button">Link 3</a>
    </div>
  </div>

            </div>
        </div>
    `;
};
