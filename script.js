const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const autoplayVideos = () => {
  document.querySelectorAll("video[autoplay][muted][loop]").forEach((video) => {
    video.play().catch(() => {
      // Some browsers defer autoplay until the video is visible or the tab is active.
    });
  });
};

autoplayVideos();

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    autoplayVideos();
  }
});

window.addEventListener("pageshow", autoplayVideos);
