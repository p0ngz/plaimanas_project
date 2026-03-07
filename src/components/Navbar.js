import { navbarLanguage, navbarMenu } from "../../data/navbar.js";

/**
 * Navbar Component
 * Uses innerHTML to render navbar from data/navbar.js
 */
function Navbar() {
  const wrapper = document.createElement("div");
  wrapper.className = "navbar-wrapper";

  const nav = document.createElement("nav");
  nav.className = "navbar";

  
  nav.innerHTML = /* html */`
    <div class="navbar-left">
      <div class="navbar-language">
        <span class="navbar-text">${navbarLanguage[0].label.toUpperCase()}</span>
        <span class="navbar-dropdown-icon">▼</span>
        <div class="navbar-dropdown-menu">
          ${navbarLanguage
            .map(
              (item) =>
                `<div class="navbar-dropdown-item">${item.label.toUpperCase()}</div>`,
            )
            .join("")}
        </div>
      </div>
    </div>

    <div class="navbar-center">
      <button class="navbar-menu-btn" aria-label="Toggle menu">
        <span class="navbar-menu-icon">
          <span class="navbar-menu-line"></span>
          <span class="navbar-menu-line"></span>
        </span>
      </button>
      <div class="navbar-submenu">
        <div class="navbar-submenu-links">
        ${navbarMenu
          .map((item) => {
            if (item.submenu) {
              const sublinks = item.submenu
                .map(
                  (sub) =>
                    `<a href="${sub.link}" class="navbar-submenu-link">${sub.label.toUpperCase()}</a>`,
                )
                .join("");
              return `<div class="navbar-submenu-group">
                <div class="navbar-submenu-toggle" data-has-submenu>
                  <a class="navbar-submenu-link" data-has-submenu>${item.label.toUpperCase()}</a>
                  <span class="navbar-dropdown-icon">▼</span>
                </div>
                <div class="navbar-sublinks">${sublinks}</div>
              </div>`;
            }`1`
            return `<a href="${item.link}" class="navbar-submenu-link">${item.label.toUpperCase()}</a>`;
          })
          .join("")}
        </div>
        <div class="navbar-brand">
          <svg class="navbar-brand-svg">
            <text class="navbar-brand-text">PLAIMANAS</text>
          </svg>
        </div>
      </div>
    </div>

    <div class="navbar-right">
      <span class="navbar-text">SIGN IN</span>
      <button class="navbar-cart-btn" aria-label="Shopping cart">
        <svg class="navbar-icon"   fill="none" stroke="currentColor" stroke-width="2">
          <path d="M11.3333 7.08333V4.25C11.3333 3.49855 11.0348 2.77788 10.5035 2.24653C9.97212 1.71518 9.25145 1.41666 8.5 1.41666C7.74855 1.41666 7.02788 1.71518 6.49653 2.24653C5.96518 2.77788 5.66667 3.49855 5.66667 4.25V7.08333M2.125 4.95833V12.75C2.125 13.5014 2.42351 14.2221 2.95486 14.7535C3.48622 15.2848 4.20689 15.5833 4.95833 15.5833H12.0417C12.7931 15.5833 13.5138 15.2848 14.0451 14.7535C14.5765 14.2221 14.875 13.5014 14.875 12.75V4.95833H2.125Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
      </button>
    </div>
  `;

  // Auto-fit viewBox to text bounds after font loads
  document.fonts.ready.then(() => {
    wrapper.querySelectorAll("svg text").forEach((text) => {
      const svg = text.closest("svg"); // find closest svg ancestor
      const bbox = text.getBBox(); // find size of text box
      svg.setAttribute(
        "viewBox",
        `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`,
      );
    });
  });

  // Standalone brand bar (visible by default)
  const brandBar = document.createElement("div");
  brandBar.className = "navbar-brand";
  brandBar.innerHTML = `
    <svg class="navbar-brand-svg">
      <text class="navbar-brand-text">PLAIMANAS</text>
    </svg>
  `;

  wrapper.appendChild(nav);
  wrapper.appendChild(brandBar);

  // Event: toggle language dropdown
  const languageBtn = nav.querySelector(".navbar-language");
  const dropdownMenu = nav.querySelector(".navbar-dropdown-menu");

  languageBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
  });

  // Event: toggle mobile menu
  const menuBtn = nav.querySelector(".navbar-menu-btn");
  const submenu = nav.querySelector(".navbar-submenu");
  let brandFitted = false;

  menuBtn.addEventListener("click", () => {
    submenu.classList.toggle("active");
    menuBtn.classList.toggle("active");

    // Toggle brand bar visibility
    const isOpen = submenu.classList.contains("active");
    brandBar.style.display = isOpen ? "none" : "";

    // Fit submenu brand SVG viewBox on first open
    if (!brandFitted && isOpen) {
      const brandText = submenu.querySelector(".navbar-brand-text");
      if (brandText) {
        const svg = brandText.closest("svg");
        const bbox = brandText.getBBox();
        svg.setAttribute(
          "viewBox",
          `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`,
        );
        brandFitted = true;
      }
    }
  });

  // Event: toggle submenu items (Editorial etc.) - mobile only
  nav.querySelectorAll(".navbar-submenu-toggle").forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      if (window.innerWidth >= 1440) return;
      const group = toggle.closest(".navbar-submenu-group");
      const link = toggle.querySelector("a");
      const sublinks = group.querySelector(".navbar-sublinks");
      const isActive = sublinks.classList.contains("active");

      if (isActive) {
        link.classList.remove("navbar-submenu-link-thick");
        link.classList.add("navbar-submenu-link");
        sublinks.classList.remove("active");
        toggle.classList.remove("active");
      } else {
        link.classList.remove("navbar-submenu-link");
        link.classList.add("navbar-submenu-link-thick");
        sublinks.classList.add("active");
        toggle.classList.add("active");
      }
    });
  });

  return wrapper;
}

export default Navbar;
