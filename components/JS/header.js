const base = window.location.origin /*+ "/zairzest-4.0-clone"*/

export function Header(){

    return `
    <header>
        <p style="cursor: pointer;" onclick="location.href='${base}/index.html'"><span id="zairzest-span">ZAIRZEST </span> <span id="span-4-0"> 4.0</span></p>
        <div id="menu-div">
            <a href="${base}/Pages/about.html">About Us</a>
            <a href="${base}/Pages/register.html">Register</a>
            <a href="${base}/Pages/login.html">Sign In</a>
        </div>
    </header>
    `
}