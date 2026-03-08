import Card from "./shared/Card.js";

function New() {
  const section = document.createElement("div");
  section.className = "new-section";

  section.appendChild(
    Card({
      image: "./assets/images/new_img.jpg",
      label: "NEW",
      title: "Sed egestas, nibh a condimentum imperdiet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare, nisl non rhoncus commodo, turpis elit ultricies justo, vitae molestie quam justo ut lacus. Proin vitae",
      className: "new-card",
      mediaClassName: "new-card-image",      labelClassName: "new-card-label",
      textboxClassName: "new-card-textbox",
      titleClassName: "new-card-title",
      descriptionClassName: "new-card-description",
    }),
  );

  return section;
}

export default New;
