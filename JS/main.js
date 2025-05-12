import {Header} from "../components/JS/header.js";
import {Footer} from "../components/JS/footer.js";
import {EventsForYou} from "../components/JS/eventsForYou.js";

document.body.innerHTML += Header();
document.body.innerHTML += EventsForYou();
document.body.innerHTML += Footer();