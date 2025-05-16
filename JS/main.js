import {Header, showSidebar, hideSidebar} from "../components/JS/header.js";
import {Footer} from "../components/JS/footer.js";




document.addEventListener('DOMContentLoaded', () => {
    const spinners = document.querySelectorAll(".spin");
    const observer = new IntersectionObserver( (entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting){
                entry.target.classList.add('animate');
                obs.unobserve(entry.target);
            }
        })
    
    })
    spinners.forEach( elemento => observer.observe(elemento));
    
    const spinners1 = document.querySelectorAll(".slideX");
    const observer1 = new IntersectionObserver( (entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting){
                entry.target.classList.add('animate');
                obs.unobserve(entry.target);
            }
        })
    
    })
    spinners1.forEach( elemento => observer1.observe(elemento));
    
    const spinners2 = document.querySelectorAll(".slideY");
    const observer2 = new IntersectionObserver( (entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting){
                entry.target.classList.add('animate');
                obs.unobserve(entry.target);
            }
        })
    
    })
    spinners2.forEach( elemento => observer2.observe(elemento));
    
});

document.body.innerHTML += Header();
document.body.innerHTML += Footer();


document.getElementById("menu-bar-icon").onclick = () => showSidebar();
document.getElementById("close-menu-icon").onclick = () => hideSidebar();

//Logic for the Loading Animation at the Beginning 
window.addEventListener("load", () => {
  const loader = document.getElementById("loader-container");
  const content = document.getElementById("content");

  loader.classList.add("fade-out");

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 2000); // Match with the CSS transition duration
});