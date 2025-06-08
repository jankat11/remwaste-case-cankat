export const scrollToSkip = (el) =>
  setTimeout(() => {
    const { top, bottom } = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const skipActionsEl = document.getElementById("skip-actions");
    const barHeight = skipActionsEl
      ? skipActionsEl.getBoundingClientRect().height
      : 0;

    if (top < 0) {
      window.scrollBy({ top: top - 16, behavior: "smooth" });
    } else if (bottom > vh - barHeight) {
      const overshoot = bottom - (vh - barHeight);
      window.scrollBy({ top: overshoot + 16, behavior: "smooth" });
    }
  }, 10);
