/**
 * Scroll-Driven Typography
 * Scales an element from full size (1) down to minScale
 * based on page scroll progress (top → bottom).
 *
 * @param {HTMLElement} element - Element to apply scaling to
 * @param {Object} [options]
 * @param {number} [options.minScale=0.3] - Minimum scale at full scroll (0–1)
 */
export default function scrollDrivenTypography(element, { minScale = 0.3 } = {}) {
  let ticking = false;

  function update() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;

    const progress = Math.min(window.scrollY / maxScroll, 1);
    const scale = 1 - progress * (1 - minScale);

    element.style.transform = `scale(${scale})`;
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );

  update();
}
