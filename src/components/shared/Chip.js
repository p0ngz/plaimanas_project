/**
 * @param {Object} props
 * @param {string} props.text 
 * @param {string} [props.className]
 * @param {boolean} [props.active] 
 */
function Chip({ text, className = "", active = false }) {
  const chip = document.createElement("button");
  chip.className = `chip${active ? " chip--active" : ""}${className ? ` ${className}` : ""}`;
  chip.textContent = text.toUpperCase();
  return chip;
}

export default Chip;
