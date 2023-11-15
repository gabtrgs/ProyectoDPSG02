window.addEventListener("scroll", () => {
  const img = document.querySelector(".case-meow_container");
  const section = document.querySelector("#personalizations");

  const rect = section.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    img.classList.add("slide-in");
  }
});
