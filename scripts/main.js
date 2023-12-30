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

const videos = document.getElementsByClassName("video-button");
const videoPopup = document.getElementById("video-popup");
const videoClose = document.getElementById("video-close");

[...videos].map((video) => {
  video.addEventListener("click", (e) => {
    e.preventDefault();
    const videoURL = e.currentTarget.href;

    videoPopup.classList.remove("hidden");
    videoPopup.classList.add("flex");

    videoPopup.querySelector("iframe").src = videoURL;
  });
});

videoClose.addEventListener("click", () => {
  videoPopup.classList.remove("flex");
  videoPopup.classList.add("hidden");
  videoPopup.querySelector("iframe").src = "";
});
