window.addEventListener("DOMContentLoaded", () => {
  const next = document.querySelector("form .btn");

  next.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
  });
});
