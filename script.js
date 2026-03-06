const modal = document.getElementById("videoModal");
const container = document.getElementById("videoContainer");
const closeBtn = document.querySelector(".close");

/* VIDEO MODAL PLAYER */

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


/* CLOSE MODAL */

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.style.display = "none";
  container.innerHTML = "";
  document.body.style.overflow = "";
}


/* SCROLL ARROW LOGIC */

document.querySelectorAll(".scroll-wrapper").forEach(wrapper => {

  const row = wrapper.querySelector(".scroll-row");
  const leftBtn = wrapper.querySelector(".scroll-btn.left");
  const rightBtn = wrapper.querySelector(".scroll-btn.right");

  if (!row || !leftBtn || !rightBtn) return;

  const scrollAmount = 500;

  /* INITIAL STATE */

  leftBtn.style.opacity = "0";
  leftBtn.style.pointerEvents = "none";

  rightBtn.classList.add("hint");

  let activated = false;

  rightBtn.addEventListener("click", () => {

    row.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });

    if (!activated) {
      activated = true;

      leftBtn.style.opacity = "1";
      leftBtn.style.pointerEvents = "auto";

      rightBtn.classList.remove("hint");
    }

  });

  leftBtn.addEventListener("click", () => {

    row.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });

  });

});
