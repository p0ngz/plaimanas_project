import createElement from "./utils/createElement.js";

/**
 * Layout Component
 * Creates page structure: <header>, <main> with sections, <footer>
 */
function Layout() {
  const layout = createElement("div", { class: "layout" });

  // Header
  const header = createElement("header", { class: "layout-header" });

  // Main with sections
  const main = createElement("main", { class: "layout-main" });

  const heroSection = createElement("section", { attrs: { id: "hero" } });
  const newSection = createElement("section", { attrs: { id: "new-section" } });
  const bestsellerSection = createElement("section", { attrs: { id: "bestseller-section" } });
  const collectionSection = createElement("section", { attrs: { id: "collection-section" } });
  const scrolltextSection = createElement("section", { attrs: { id: "scrolltext-section" } });
  const serviceSection = createElement("section", { attrs: { id: "service-section" } });
  const faqSection = createElement("section", { attrs: { id: "faq-section" } });
  const inquirySection = createElement("section", { attrs: { id: "inquiry-section" } });

  main.appendChild(heroSection);
  main.appendChild(newSection);
  main.appendChild(bestsellerSection);
  main.appendChild(collectionSection);
  main.appendChild(scrolltextSection);
  main.appendChild(serviceSection);
  main.appendChild(faqSection);
  main.appendChild(inquirySection);

  // Footer
  const footer = createElement("footer", { class: "layout-footer" });

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
    scrolltextSection,
    serviceSection,
    faqSection,
    inquirySection,
    footer
  };
}

export default Layout;
