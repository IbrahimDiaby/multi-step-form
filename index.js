window.addEventListener("DOMContentLoaded", () => {
  const previousBtns = document.querySelectorAll("form .btn.previous");
  const nextBtns = document.querySelectorAll("form .btn.next");
  const slideSteps = document.querySelectorAll(".step-slide");
  const steps = document.querySelectorAll(".step");
  const labelsContainer = document.querySelectorAll(".label-container");

  console.log(nextBtns)

  const updateSteps = (activeIndex) => {
    steps.forEach((step, idx) => {
      step
        .querySelector(".step-index")
        .classList.toggle("active", idx === activeIndex);
    });
  };

  const translateSlides = (targetIndex) => {
    slideSteps.forEach((slide) => {
      const width = slide.getBoundingClientRect().width;
      slide.style.transform = `translateX(-${width * targetIndex}px)`;
    });
  };

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
      
      if (index === 0) {
        labelsContainer.forEach((label) => {
          label.querySelector("span.required-error").classList.remove("visible");
        })
        // Personal Info
        const inputName = document.querySelector(
          "form#personalInfo input#name",
        );
        const inputEmail = document.querySelector(
          "form#personalInfo input#email",
        );
        const inputTel = document.querySelector("form#personalInfo input#tel");

        if (inputName.value === "") {
          labelsContainer[0]
            .querySelector("span.required-error")
            .classList.toggle("visible");
        }

        if (inputEmail.value === "") {;
          labelsContainer[1]
            .querySelector("span.required-error")
            .classList.toggle("visible");
        }

        if (inputTel.value === "") {
          labelsContainer[2]
            .querySelector("span.required-error")
            .classList.toggle("visible");
        }

        if (
          !(
            inputName.value === "" ||
            inputEmail.value === "" ||
            inputTel.value === ""
          )
        ) {
          updateSteps(index + 1);
          translateSlides(index + 1);
        }
      }

      // Test
      if(index >= 1){
        updateSteps(index + 1);
        translateSlides(index + 1);
      }
    });
  });
});
