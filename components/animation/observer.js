const animax = document.getElementsByClassName("animax");

const observer = new IntersectionObserver( (entries, obs) => {
    if (entries[0].isIntersecting){
        animax.classList.add = 'animate';
        obs.unobserve(animax);
    }
})

observer.observe(animax);