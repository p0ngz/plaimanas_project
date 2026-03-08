import Card from "./shared/Card.js";

function BestSeller() {
  const section = document.createElement("div");
  section.className = "best-seller-section";

  section.appendChild(
    Card({
      video: "./assets/videos/bestseller_video.mp4",
      label: "BEST SELLER",
      title: "Sed egestas, nibh a condimentum imperdiet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare, nisl non rhoncus commodo, turpis elit ultricies justo, vitae molestie quam justo ut lacus. Proin vitae",
      className: "best-seller-card",
      mediaClassName: "best-seller-card-media",
      labelClassName: "best-seller-card-label",
      textboxClassName: "best-seller-card-textbox",
      titleClassName: "best-seller-card-title",
      descriptionClassName: "best-seller-card-description",
    }),
  );

  return section;
}

export default BestSeller;
