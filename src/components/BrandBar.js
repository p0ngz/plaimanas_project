
function BrandBar() {
  const brand = document.createElement("div");
  brand.className = "brandbar";
  brand.innerHTML = `
    <svg class="brandbar-svg" preserveAspectRatio="none">
      <text class="brandbar-text">PLAIMANAS</text>
    </svg>
  `;

  // auto fit new box
  document.fonts.ready.then(() => {
    const text = brand.querySelector(".brandbar-text");
    if (!text) return;
    const svg = text.closest("svg");
    const bbox = text.getBBox();
    const trimY = bbox.height * 0.1;
    svg.setAttribute(
      "viewBox",
      `${bbox.x} ${bbox.y + trimY} ${bbox.width} ${bbox.height - trimY * 2}`,
    );

    scrollDrivenTypography(brand, 0.3);
  });

  return brand;
}

