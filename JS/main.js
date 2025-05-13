import {Header, showSidebar, hideSidebar} from "../components/JS/header.js";
import {Footer} from "../components/JS/footer.js";
import {EventsForYou} from "../components/JS/eventsForYou.js";

document.body.innerHTML += Header();
document.body.innerHTML += EventsForYou();
document.body.innerHTML += Footer();

document.getElementById("menu-bar-icon").onclick = () => showSidebar();
document.getElementById("close-menu-icon").onclick = () => hideSidebar();