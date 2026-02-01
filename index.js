window.addEventListener("DOMContentLoaded", () => {
  const previousBtns = document.querySelectorAll("form .btn.previous");
  const nextBtns = document.querySelectorAll("form .btn.next");
  const slideSteps = document.querySelectorAll(".step-slide");
  const steps = document.querySelectorAll(".step");
  const labelsContainer = document.querySelectorAll(".label-container");
  const pickAddOns = document.querySelectorAll(".pick-add-ons-selector");
  const plans = document.querySelectorAll(".plans-container .plan");
  const switchInput = document.querySelector(".switch-input");
  const changePlanBtn = document.querySelector("#change-plan");

  const resume = (data) => {
    // TODO : Implement resume
  };

  const updateResume = () => {
    resume();
  };

  changePlanBtn.addEventListener("click", () => {
    updateSteps(1);
    translateSlides(1);
  });

  const switchBtn = document.querySelector(".btn-switch");

  switchBtn.addEventListener("click", () => {
    const frequency = document.querySelector(".frequency");
    const monthly = document.querySelector(".frequency span.monthly");
    const yearly = document.querySelector(".frequency span.yearly");
    switchBtn.classList.toggle("active");

    monthly.classList.toggle("active");
    yearly.classList.toggle("active");

    data = {
      ...data,
      frequency: yearly.classList.contains("active")
        ? frequenciesList[1]
        : frequenciesList[0],
    };
    updateResume();
  });

  plans.forEach((plan, index) => {
    plan.addEventListener("click", () => {
      // Remove the old one
      plans.forEach((pl) => pl.classList.remove("active"));

      // Choose the new one
      plan.classList.toggle("active");

      // Update plan information
      data = { ...data, plan: plansList[index] };
    });
    updateResume();
  });

  pickAddOns.forEach((pickAdd, index) => {
    pickAdd.addEventListener("click", (e) => {
      // Update checkbox
      const input = pickAdd.querySelector("input");
      if (e.target.tagName.toString().toLowerCase() !== "input") {
        input.click();
      }

      // Update select indicator
      input.addEventListener("change", (e) => {
        pickAdd.classList.toggle("active");

        // Filtered Add Ons
        const toAdd = pickAdd.classList.contains("active");
        const currentAddOns = [...data.addOns];
        const newAddOns = toAdd
          ? [...currentAddOns, addOns[index]]
          : [...currentAddOns.filter((el) => el.title !== addOns[index].title)];
        // Update data
        data = { ...data, addOns: newAddOns };
        console.log(data);
      });
    });
    updateResume();
  });

  const currency = {
    title: "Dollar",
    symbol: "$",
  };

  const addOns = [
    {
      title: "Online service",
      subtitle: "Access to multiplayer games",
      price: "1",
    },
    {
      title: "Larger storage",
      subtitle: "Extra 1TB of cloud save",
      price: "2",
    },
    {
      title: "Customizable Profile",
      subtitle: "Custom theme on your profile",
      price: "2",
    },
  ];

  const frequenciesList = ["Monthly", "Yearly"];

  const plansList = [
    {
      title: "Arcade",
      pricePerMonth: "9",
    },
    {
      title: "Advanced",
      pricePerMonth: "12",
    },
    {
      title: "Pro",
      pricePerMonth: "15",
    },
  ];

  // Form Data
  let data = {
    fullname: "",
    email: "",
    tel: "",
    plan: plansList[0], //
    frequency: frequenciesList[0], // Monthly Or Yearly
    addOns: [addOns[0]],
  };

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
          label
            .querySelector("span.required-error")
            .classList.remove("visible");
        });
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

        if (inputEmail.value === "") {
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

          data = {
            ...data,
            fullname: inputName.value,
            email: inputEmail.value,
            tel: inputTel.value,
          };
        }
      }

      // Test
      if (index >= 1) {
        updateSteps(index + 1);
        translateSlides(index + 1);
      }
    });
  });
});
