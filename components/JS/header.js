function getBasePath() {
  const pathSegments = window.location.pathname.split('/');
  const repoName = pathSegments[1]; // assumes /RepoName/...
  
  // If hosted on GitHub Pages, use repo name
  if (window.location.hostname.includes("github.io") && repoName) {
    return `/${repoName}`;
  }

  // Else, local or root deployment
  return "";
}

export function showSidebar(){
  document.getElementById("menu-sidebar").style.display = "flex";
}

export function hideSidebar(){
  document.getElementById("menu-sidebar").style.display = "none";
}

const base =  getBasePath();


export function Header() {
  return `
    <header>
      <a class="load-link" href="${base}/index.html">
        <span id="zairzest-span">ZAIRZEST </span> <span id="span-4-0"> 4.0</span>
      </a>
      <div id="menu-div">
        <a class="load-link" href="${base}/Pages/About.html">About Us</a>
        <a class="load-link" href="${base}/Pages/Register.html">Register</a>
        <a class="load-link" href="${base}/Pages/Login.html">Sign In</a>
      </div>

      <p id="menu-bar-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#fff">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
      </p>

      <div id="menu-sidebar">
        <p id="close-menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#fff">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
        </p>
        <a class="load-link" href="${base}/Pages/About.html">About Us</a>
        <a class="load-link" href="${base}/Pages/Register.html">Register</a>
        <a class="load-link" href="${base}/Pages/Login.html">Sign In</a>
      </div>
    </header>
    <div id="page-loader" style="display: none;">
      <div class="loader"></div>
    </div>
    <script>
      document.querySelectorAll(".load-link").forEach(link => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const href = this.getAttribute("href");

          // Show the loader
          const loader = document.getElementById("page-loader");
          loader.style.display = "flex";

          // Delay navigation
          setTimeout(() => {
            window.location.href = href;
          }, 1200); // matched with loader transition
        });
      });
    </script>
  `;
}
