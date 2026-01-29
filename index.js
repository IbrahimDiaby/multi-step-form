window.addEventListener("DOMContentLoaded", () => {
  const previousBtns = document.querySelectorAll("form .btn.previous");
  const nextBtns = document.querySelectorAll("form .btn.next");
  const slideSteps = document.querySelectorAll(".step-slide");
  const steps = document.querySelectorAll(".step");

  const updateSteps = (activeIndex) => {
    steps.forEach((step, idx) => {
      step.querySelector(".step-index")
        .classList.toggle("active", idx === activeIndex);
    });
  }

  const translateSlides = (targetIndex) => {
    slideSteps.forEach((slide) => {
      const width = slide.getBoundingClientRect().width;
      slide.style.transform = `translateX(-${width * targetIndex}px)`;
    });
  }

  previousBtns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      updateSteps(index);
      translateSlides(index);
    });
  });

  nextBtns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      updateSteps(index + 1);
      translateSlides(index + 1);
    });
  });
});
