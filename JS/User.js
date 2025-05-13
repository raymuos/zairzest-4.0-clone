import {Header, showSidebar, hideSidebar} from "../components/JS/header.js";
import {Footer} from "../components/JS/footer.js";

document.body.innerHTML += Header();
document.body.innerHTML += Footer();

document.getElementById("menu-bar-icon").onclick = () => showSidebar();
document.getElementById("close-menu-icon").onclick = () => hideSidebar();