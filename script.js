// create a smooth scroll function
function smoothScroll(target, duration) {
    let clickedTarget = document.querySelector(target);
    let targetPosition = clickedTarget.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    console.log(targetPosition);

    console.log(targetPosition, startPosition, distance, startTime);

    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
            console.log(currentTime);
        }
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
            // console.log(timeElapsed, duration);
        }
}

function ease(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t*t*t + 2) + b;
};

requestAnimationFrame(animation);
}

const clickedAbout = document.querySelector("#nav-about");
const clickedProject = document.querySelector("#nav-project");
const clickedContact = document.querySelector("#nav-contact");

// when a button is clicked, will ease into the target section
clickedAbout.addEventListener("click", function(){
    smoothScroll("#section1-content", 2000);
})

clickedProject.addEventListener("click", function(){
    smoothScroll("#section2-content", 2000);
})

clickedContact.addEventListener("click", function(){
    smoothScroll("#section3-content", 2000);
})

