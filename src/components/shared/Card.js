/**
 * Card - Reusable card component
 * @param {Object} props
 * @param {string} [props.image] - Image source path
 * @param {string} [props.video] - Video source path (used instead of image when provided)
 * @param {string} [props.hoverImage] - Hover image source (desktop only)
 * @param {string} props.label - Overlay label text
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description
 * @param {string} [props.width] - Inline width for card media container
 * @param {string} [props.height] - Inline height for card media container
 * @param {string} [props.className] - Custom class for the card root
 * @param {string} [props.mediaClassName] - Custom class for the media container
 * @param {string} [props.labelClassName] - Custom class for the label
 * @param {string} [props.textboxClassName] - Custom class for the textbox
 * @param {string} [props.titleClassName] - Custom class for the title
 * @param {string} [props.descriptionClassName] - Custom class for the description
 */
function Card({
  image,
  video,
  hoverImage,
  label,
  title,
  description,
  width,
  height,
  className = "new-card",
  mediaClassName = "new-card-image",
  labelClassName = "new-card-label",
  textboxClassName = "new-card-textbox",
  titleClassName = "new-card-title",
  descriptionClassName = "new-card-description",
}) {
  const card = document.createElement("div");
  card.className = className;

  const mediaContainer = document.createElement("div");
  mediaContainer.className = mediaClassName;
  if (width) mediaContainer.style.width = width;
  if (height) mediaContainer.style.height = height;

  if (video) {
    const vid = document.createElement("video");
    vid.src = video;
    vid.autoplay = true;
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    mediaContainer.appendChild(vid);
  } else if (image) {
    const img = document.createElement("img");
    img.src = image;
    img.alt = title || "";
    img.className = "card-media-default";
    mediaContainer.appendChild(img);

    if (hoverImage) {
      const hoverImg = document.createElement("img");
      hoverImg.src = hoverImage;
      hoverImg.alt = title ? `${title} hover` : "";
      hoverImg.className = "card-media-hover";
      mediaContainer.appendChild(hoverImg);
    }
  }

  if (label) {
    const labelSpan = document.createElement("span");
    labelSpan.className = labelClassName;
    labelSpan.textContent = label;
    mediaContainer.appendChild(labelSpan);
  }

  card.appendChild(mediaContainer);

  if (title || description) {
    const textbox = document.createElement("div");
    textbox.className = textboxClassName;

    if (title) {
      const h3 = document.createElement("h3");
      h3.className = titleClassName;
      h3.textContent = title;
      textbox.appendChild(h3);
    }

    if (description) {
      const p = document.createElement("p");
      p.className = descriptionClassName;
      p.textContent = description;
      textbox.appendChild(p);
    }

    card.appendChild(textbox);
  }

  return card;
}

export default Card;
