window.addEventListener("DOMContentLoaded", () => {
  const previousBtns = document.querySelectorAll("form .btn.previous");
  const nextBtns = document.querySelectorAll("form .btn.next");
  const slideSteps = document.querySelectorAll(".step-slide");
  const steps = document.querySelectorAll(".step");

  previousBtns.forEach((previousBtn, index) => {
    previousBtn.addEventListener("click", (e) => {
      e.preventDefault();

      steps.forEach((step, idx) => {
        const stepIndex =  step.querySelector(".step-index");
        console.log(stepIndex);
        if ( idx !== (index) ) {
            stepIndex.classList.remove("active")
        }
        else {
            stepIndex.classList.add("active");
        } 
      });

      slideSteps.forEach((slide, idx) => {
        const width = slide.getBoundingClientRect().width;
        const translate = width + (width * (index-1));
        slide.style.transform = `translateX(${translate}px)`;
      });
    });
  });

  nextBtns.forEach((nextBtn, index) => {
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();

      steps.forEach((step, idx) => {
        const stepIndex =  step.querySelector(".step-index");
        console.log(stepIndex);
        if ( idx !== (index+1) ) {
            stepIndex.classList.remove("active")
        }
        else {
            stepIndex.classList.add("active");
        } 
      });

      slideSteps.forEach((slide) => {
        const width = slide.getBoundingClientRect().width;
        const translate = width * (index+1);
        slide.style.transform = `translateX(-${translate}px)`;
      });
    });
  });
});
