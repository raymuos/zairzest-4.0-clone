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
  document.getElementById("menu-sidebar").classList.add('open');
}

export function hideSidebar(){
  document.getElementById("menu-sidebar").classList.remove('open');
}

const base =  getBasePath();


export function Header(){

    return `<header>
        <a href="${base}/index.html">
            <span id="zairzest-span">ZAIRZEST </span> <span id="span-4-0"> 4.0</span>
        </a>
        <div id="menu-div">
            <a href="${base}/Pages/About.html">About Us</a>
            <a href="${base}/Pages/Register.html">Register</a>
            <a href="${base}/Pages/Login.html">Sign In</a>
        </div>

        <p id="menu-bar-icon">
            <svg class="hamburger" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#fff">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
        </p>

        <div id="menu-sidebar">
            <div id="nav-div">
                <p id="close-menu-icon">
                    <svg class="cross" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#fff">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                </p>
                <a href="${base}/Pages/About.html">About Us</a>
                <a href="${base}/Pages/Register.html">Register</a>
                <a href="${base}/Pages/Login.html">Sign In</a>
            </div>
            
            <div id="zairza-text-logo">
                <img src="${base}/Public/images/zairza-text-logo.webp"  height="40px">
            </div>
        </div>

    </header>
`
}