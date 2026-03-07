/**
 * NewCard - Reusable card component
 * @param {Object} props
 * @param {string} props.image - Image source path
 * @param {string} props.label - Overlay label text
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description
 */
function NewCard({ image, label, title, description }) {
  const card = document.createElement("div");
  card.className = "new-card";

  card.innerHTML = `
    <div class="new-card-image">
      <img src="${image}" alt="${title}">
      <span class="new-card-label">${label}</span>
    </div>
    <div class="new-card-textbox">
      <h3 class="new-card-title">${title}</h3>
      <p class="new-card-description">${description}</p>
    </div>
  `;

  return card;
}

export default NewCard;
