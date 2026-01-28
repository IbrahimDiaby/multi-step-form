window.addEventListener("DOMContentLoaded", () => {
  const next = document.querySelector("form .btn");
  const slideSteps = document.querySelectorAll(".step-slide");

  next.addEventListener("click", (e) => {
    e.preventDefault();

    slideSteps.forEach(slide => {
      const width = slide.getBoundingClientRect().width;
      slide.style.transform = `translateX(-${width}px)`;
    });
  });
});
