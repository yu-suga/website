const titleAnimation = document.querySelector('#title-animation');
const titleAnimation2 = document.querySelector('#title-animation2');

const cb = function(entries, observe) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('inview');
        } else {
            entry.target.classList.remove('inview');
        }
    });
}
const options = {
    root: null,
    rootMargin: "-100px 0px",
    threshold: [0, 0.5, 1]
};

const io = new IntersectionObserver(cb,options);
io.observe(titleAnimation);
io.observe(titleAnimation2);
