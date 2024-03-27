const baseScroll = document.querySelector("base");
baseScroll?.addEventListener("scroll", (e: Event) => {
  window.scrollTo(0, 0);
});
