import HomepageButton from "./shared/HomepageButton.js";
const footerData = [
  {
    title: "ABOUT",
    items: ["Women", "Collections", "Editorial", "Stories"],
  },
  {
    title: "HELP",
    items: ["Payment Notification", "Customer Service", "FAQ"],
  },
  {
    title: "SOCIAL",
    items: ["Instagram", "Facebook"],
  },
  {
    title: "LEGAL",
    items: ["Terms & Conditions", "Privacy Policy", "Cookies Policy"],
  },
];

function createFooterColumn(titleText, items) {
  const column = document.createElement("div");
  column.className = "footer-column";

  const title = document.createElement("h3");
  title.className = "footer-column-title";
  title.textContent = titleText;
  column.appendChild(title);

  const list = document.createElement("ul");
  list.className = "footer-column-list";

  items.forEach((item) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.className = "footer-column-link";
    link.href = "#";
    link.textContent = item;
    li.appendChild(link);
    list.appendChild(li);
  });

  column.appendChild(list);
  return column;
}

function createNewsletter() {
  const wrapper = document.createElement("div");
  wrapper.className = "footer-newsletter";

  const title = document.createElement("h3");
  title.className = "footer-newsletter-title";
  title.textContent = "NEWSLETTER";

  const form = document.createElement("form");
  form.className = "footer-newsletter-form";

  const input = document.createElement("input");
  input.className = "footer-newsletter-input";
  input.type = "email";
  input.placeholder = "Email";

  const button = document.createElement("button");
  button.className = "footer-newsletter-btn";
  button.type = "submit";
  button.textContent = "SUBSCRIBE";

  form.appendChild(input);
  form.appendChild(button);
  form.addEventListener("submit", (e) => e.preventDefault());

  wrapper.appendChild(title);
  wrapper.appendChild(form);
  return wrapper;
}

function Footer() {
  const section = document.createElement("section");
  section.className = "footer-section";

  section.appendChild(HomepageButton());

  const linkGrid = document.createElement("div");
  linkGrid.className = "footer-link-grid";

  footerData.forEach((col) => {
    linkGrid.appendChild(createFooterColumn(col.title, col.items));
  });

  const newsletter = createNewsletter();
  newsletter.classList.add("footer-grid-full");
  linkGrid.appendChild(newsletter);

  section.appendChild(linkGrid);

  const copyright = document.createElement("p");
  copyright.className = "footer-copyright-container";
  const copyrightSymbol = document.createElement("span");
  const copyrightText = document.createElement("span");
  copyrightSymbol.textContent = "©PLAIMANAS";
  copyrightText.textContent = "Web by ::*";
  copyright.appendChild(copyrightSymbol);
  copyright.appendChild(copyrightText);

  section.appendChild(copyright);

  return section;
}

export default Footer;
