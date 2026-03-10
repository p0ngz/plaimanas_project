function createMarqueeGroup() {
  const group = document.createElement("div");
  group.className = "marquee-group";

  const items = [
    { type: "arrow", className: "marquee-left-arrow" },
    { type: "text", text: "BEST SELLING" },
    { type: "arrow", className: "marquee-right-arrow" },
    { type: "text", text: "NEW ARRIVAL" },
  ];

  items.forEach((item) => {
    if (item.type === "arrow") {
      const arrow = document.createElement("div");
      arrow.className = item.className;
      group.appendChild(arrow);
    } else {
      const text = document.createElement("p");
      text.className = "marquee-text";
      text.textContent = item.text;
      group.appendChild(text);
    }
  });

  return group;
}

function Marquee() {
  const section = document.createElement("div");
  section.className = "marquee-section";

  const track = document.createElement("div");
  track.className = "marquee-track";

  for (let i = 0; i < 4; i++) {
    track.appendChild(createMarqueeGroup());
  }

  section.appendChild(track);
  return section;
}

export default Marquee;
