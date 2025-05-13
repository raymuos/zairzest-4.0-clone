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

const base =  getBasePath();


export function Header(){

    return `
    <header>
        <p style="cursor: pointer;" onclick="location.href='${base}/index.html'"><span id="zairzest-span">ZAIRZEST </span> <span id="span-4-0"> 4.0</span></p>
        <div id="menu-div">
            <a href="${base}/Pages/About.html">About Us</a>
            <a href="${base}/Pages/Register.html">Register</a>
            <a href="${base}/Pages/Login.html">Sign In</a>
        </div>
    </header>
    `
}