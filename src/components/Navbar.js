import { navbarLanguage, navbarMenu } from "../../data/navbar.js";

/**
 * Navbar Component
 * Uses innerHTML to render navbar from data/navbar.js
 */
function Navbar(brandBar) {
  const wrapper = document.createElement("div");
  wrapper.className = "navbar-wrapper";

  const nav = document.createElement("nav");
  nav.className = "navbar";

  nav.innerHTML = /* html */ `
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
            }
            return `<a href="${item.link}" class="navbar-submenu-link">${item.label.toUpperCase()}</a>`;
          })
          .join("")}
        </div>
        <div class="navbar-brand">
            <svg class="navbar-brand-svg" preserveAspectRatio="none">
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

  function fitBrandSvg(el) {
    el.querySelectorAll(".navbar-brand-svg text").forEach((text) => {
      const svg = text.closest("svg");
      const bbox = text.getBBox();
      const trimY = bbox.height * 0.1;
      svg.setAttribute(
        "viewBox",
        `${bbox.x} ${bbox.y + trimY} ${bbox.width} ${bbox.height - trimY * 2}`,
      );
    });
  }

  wrapper.appendChild(nav);

  // Auto-fit viewBox for submenu brand after font loads
  document.fonts.ready.then(() => {
    fitBrandSvg(wrapper);
  });

  // choose language selector
  const languageBtn = nav.querySelector(".navbar-language");
  const dropdownMenu = nav.querySelector(".navbar-dropdown-menu");
  const languageText = nav.querySelector(".navbar-language > .navbar-text");
  let currentLang = navbarLanguage[0].value;

  function renderDropdownItems() {
    dropdownMenu.innerHTML = navbarLanguage
      .filter((item) => item.value !== currentLang)
      .map(
        (item) =>
          `<div class="navbar-dropdown-item" data-value="${item.value}">${item.label.toUpperCase()}</div>`,
      )
      .join("");

    dropdownMenu.querySelectorAll(".navbar-dropdown-item").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        currentLang = el.dataset.value;
        const selected = navbarLanguage.find((l) => l.value === currentLang);
        languageText.textContent = selected.label.toUpperCase();
        dropdownMenu.classList.remove("active");
        renderDropdownItems();
      });
    });
  }

  renderDropdownItems();

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

    const isOpen = submenu.classList.contains("active");
    if (brandBar) brandBar.style.display = isOpen ? "none" : "";

    // Fit submenu brdna text to viewBox
    if (!brandFitted && isOpen) {
      const brandText = submenu.querySelector(".navbar-brand-text");
      if (brandText) {
        const svg = brandText.closest("svg");
        const bbox = brandText.getBBox();
        const trimY = bbox.height * 0.1;
        svg.setAttribute(
          "viewBox",
          `${bbox.x} ${bbox.y + trimY} ${bbox.width} ${bbox.height - trimY * 2}`,
        );
        brandFitted = true;
      }
    }
  });

  // Reset mobile menu state when resizing to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1440) {
      submenu.classList.remove("active");
      menuBtn.classList.remove("active");
      if (brandBar) brandBar.style.display = "";
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
