import NewCard from "./shared/NewCard.js";

function New() {
  const section = document.createElement("div");
  section.className = "new-section";

  section.appendChild(
    NewCard({
      image: "./assets/images/new_img.jpg",
      label: "NEW",
      title: "Sed egestas, nibh a condimentum imperdiet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare, nisl non rhoncus commodo, turpis elit ultricies justo, vitae molestie quam justo ut lacus. Proin vitae",
    }),
  );

  return section;
}

export default New;