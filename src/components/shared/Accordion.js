/**
 * Accordion - Reusable expandable/collapsible component
 * @param {Object} props
 * @param {string} props.titleAccordion - Accordion header text
 * @param {string} props.content - Accordion body text
 * @param {boolean} [props.open] - Whether initially open
 */
function Accordion({ titleAccordion, content, open = false }) {
  const wrapper = document.createElement("div");
  wrapper.className = `accordion${open ? " accordion--open" : ""}`;

  const header = document.createElement("p");
  header.className = "accordion-header";

  const titleElement = document.createElement("span");
  titleElement.className = "accordion-titleAccordion";
  titleElement.textContent = titleAccordion.toUpperCase();

  const icon = document.createElement("span");
  icon.className = "accordion-icon";

  header.appendChild(titleElement);
  header.appendChild(icon);

  const body = document.createElement("div");
  body.className = "accordion-body";

  const bodyContent = document.createElement("p");
  bodyContent.className = "accordion-content";
  bodyContent.textContent = content;
  body.appendChild(bodyContent);

  header.addEventListener("click", () => {
    wrapper.classList.toggle("accordion--open");
  });

  wrapper.appendChild(header);
  wrapper.appendChild(body);

  return wrapper;
}

