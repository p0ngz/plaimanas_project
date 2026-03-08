import createElement from "./utils/createElement.js";

function Layout() {
  const layout = createElement("div", { class: "layout" });

  // main component
  const header = createElement("header", { class: "layout-header" });
  const main = createElement("main", { class: "layout-main" });
  const footer = createElement("footer", { class: "layout-footer" });

  // sub component for main
  const heroSection = createElement("section", { attrs: { id: "hero" } });
  const newSection = createElement("section", { attrs: { id: "new-section" } });
  const bestsellerSection = createElement("section", { attrs: { id: "bestseller-section" } });
  const collectionSection = createElement("section", { attrs: { id: "collection-section" } });
  const marqueeSection = createElement("section", { attrs: { id: "marquee-section" } });
  const serviceSection = createElement("section", { attrs: { id: "service-section" } });
  const faqSection = createElement("section", { attrs: { id: "faq-section" } });
  const inquirySection = createElement("section", { attrs: { id: "inquiry-section" } });

  main.appendChild(heroSection);
  main.appendChild(newSection);
  main.appendChild(bestsellerSection);
  main.appendChild(collectionSection);
  main.appendChild(marqueeSection);
  main.appendChild(serviceSection);
  main.appendChild(faqSection);
  main.appendChild(inquirySection);

  // Footer

  // Assemble
  layout.appendChild(header);
  layout.appendChild(main);
  layout.appendChild(footer);

  return {
    layout,
    header,
    main,
    heroSection,
    newSection,
    bestsellerSection,
    collectionSection,
    marqueeSection,
    serviceSection,
    faqSection,
    inquirySection,
    footer
  };
}

export default Layout;
