const modal = document.getElementById("videoModal");
const container = document.getElementById("videoContainer");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".video-click").forEach(card => {
  card.addEventListener("click", () => {
    const vimeoId = card.dataset.vimeo;
    const youtubeId = card.dataset.youtube;

    if (vimeoId) {
      container.innerHTML = `
        <iframe
          src="https://player.vimeo.com/video/${vimeoId}?autoplay=1"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen>
        </iframe>
      `;
    }

    if (youtubeId) {
      container.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen>
        </iframe>
      `;
    }

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.style.display = "none";
  container.innerHTML = "";
  document.body.style.overflow = "";
}
