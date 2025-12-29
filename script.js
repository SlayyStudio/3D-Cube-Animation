const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  toggle.classList.add("rewind");
  setTimeout(() => {
    toggle.classList.toggle("active");
    toggle.classList.remove("rewind");
  }, 400);
});
