
function Service() {
  const section = document.createElement("section");
  section.className = "service-section";

  serviceData.forEach((service) => {
    const card = document.createElement("div");
    card.className = "service-card";

    const title = document.createElement("h3");
    title.className = "service-card-title";
    title.textContent = service.title;
    card.appendChild(title);

    const description = document.createElement("p");
    description.className = "service-card-description";
    description.textContent = service.description;
    card.appendChild(description);

    section.appendChild(card);
  });

  return section;
}

