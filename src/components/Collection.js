import Card from "./shared/Card.js";
import { collectionData } from "../../data/collectionData.js";

function Collection() {
  const section = document.createElement("div");
  section.className = "collection-section";

  const grid = document.createElement("div");
  grid.className = "collection-grid";

  collectionData.forEach((item, index) => {
    const card = Card({
      image: item.image,
      hoverImage: item.hoverImage,
      label: item.label,
      className:
        index === 0
          ? "collection-card collection-card-1"
          : "collection-card collection-card-small",
      mediaClassName: "collection-card-media",
      labelClassName: "collection-card-label",
    });
    grid.appendChild(card);
  });

  section.appendChild(grid);
  return section;
}

export default Collection;
