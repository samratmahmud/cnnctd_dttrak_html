const contactButton = document.getElementById("contact");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close");

contactButton.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.remove("hidden");
  popup.classList.add("flex");
});

closeButton.addEventListener("click", () => {
  popup.classList.remove("flex");
  popup.classList.add("hidden");
});
